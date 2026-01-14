import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Card, CardBody, Badge } from '../components';
import { ChartWrapper } from '../charts';
import { chartExamples } from '../data/examples';
import type { ChartExample } from '../types';

type CategoryFilter = 'all' | 'line' | 'bar' | 'pie' | 'area';

export const ExamplesPage: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  useEffect(() => {
    document.title = 'Examples - CanvasJS Learning Hub';
  }, []);

  const filteredExamples =
    filter === 'all'
      ? chartExamples
      : chartExamples.filter((example) => example.category === filter);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All Charts' },
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'pie', label: 'Pie' },
    { value: 'area', label: 'Area' },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Chart Examples
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of CanvasJS chart examples. Each example includes
            a live rendered chart with real data to demonstrate various capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter chart examples"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              role="tab"
              aria-selected={filter === cat.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExamples.map((example, index) => (
            <ExampleCard key={example.id} example={example} index={index} />
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500">No examples found for this category.</p>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

interface ExampleCardProps {
  example: ChartExample;
  index: number;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ example, index }) => {
  const getCategoryColor = (category: string): 'primary' | 'success' | 'warning' | 'danger' => {
    switch (category) {
      case 'line':
        return 'primary';
      case 'bar':
        return 'success';
      case 'pie':
        return 'warning';
      case 'area':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardBody className="p-0">
          {/* Chart Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{example.title}</h3>
              <Badge variant={getCategoryColor(example.category)} size="md">
                {example.category.charAt(0).toUpperCase() + example.category.slice(1)}
              </Badge>
            </div>
            <p className="text-gray-600 text-sm">{example.description}</p>
          </div>

          {/* Chart Container */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <ChartWrapper 
                options={{
                  ...example.chartOptions,
                  height: 300,
                }} 
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ExamplesPage;
