import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, CodeBlock } from '../components';
import { documentationSections } from '../data/documentation';
import type { DocSection } from '../types';

export const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  useEffect(() => {
    document.title = 'Documentation - CanvasJS Learning Hub';
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav
              className="sticky top-24 bg-white rounded-lg shadow-md p-4"
              aria-label="Documentation navigation"
            >
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Contents
              </h2>
              <ul className="space-y-1">
                {documentationSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                    {section.subsections && activeSection === section.id && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {section.subsections.map((sub) => (
                          <li key={sub.id}>
                            <button
                              onClick={() => scrollToSection(sub.id)}
                              className="w-full text-left px-3 py-1.5 text-xs text-gray-500 hover:text-gray-900 rounded"
                            >
                              {sub.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
              
              <div className="prose prose-lg max-w-none">
                {documentationSections.map((section) => (
                  <DocSectionComponent
                    key={section.id}
                    section={section}
                    onInView={() => setActiveSection(section.id)}
                  />
                ))}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

interface DocSectionComponentProps {
  section: DocSection;
  onInView: () => void;
}

const DocSectionComponent: React.FC<DocSectionComponentProps> = ({ section }) => {
  return (
    <section id={section.id} className="mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          {section.title}
        </h2>
        
        <div className="text-gray-700 mb-6 whitespace-pre-line">
          {section.content}
        </div>

        {section.subsections?.map((sub) => (
          <div key={sub.id} id={sub.id} className="mb-8 scroll-mt-24">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {sub.title}
            </h3>
            
            <div className="text-gray-600 mb-4 whitespace-pre-line">
              {sub.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={idx} className="font-semibold text-gray-800 mt-4 mb-2">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={idx} className="ml-4 text-gray-600">
                      {paragraph.substring(2)}
                    </li>
                  );
                }
                return (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {sub.codeExample && (
              <div className="mt-4">
                <CodeBlock code={sub.codeExample} language="typescript" />
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default DocumentationPage;
