import { tutorials } from '@/data/tutorials';
import LineChart from '@/charts/LineChart';
import BarChart from '@/charts/BarChart';

export default function Tutorials() {
  const tutorialChartData = {
    line: [
      {
        type: 'line',
        dataPoints: [
          { x: new Date(2024, 0, 1), y: 450 },
          { x: new Date(2024, 1, 1), y: 520 },
          { x: new Date(2024, 2, 1), y: 580 },
          { x: new Date(2024, 3, 1), y: 620 },
        ],
      },
    ],
    bar: [
      {
        type: 'column',
        dataPoints: [
          { label: 'Q1', y: 1200 },
          { label: 'Q2', y: 1850 },
          { label: 'Q3', y: 2100 },
          { label: 'Q4', y: 2400 },
        ],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Step-by-Step Tutorials</h1>
        <p className="text-xl text-gray-600">
          Learn CanvasJS through practical, hands-on tutorials. Each tutorial includes detailed explanations,
          code snippets, and live chart renderings.
        </p>
      </div>

      <div className="space-y-16">
        {tutorials.map((tutorial, index) => (
          <div key={tutorial.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tutorial Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 sm:px-8 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {tutorial.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Explanation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tutorial.explanation}
                </p>
              </div>

              {/* Code Snippet */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code Example
                </h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
                    <code>{tutorial.codeSnippet}</code>
                  </pre>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>

              {/* Rendered Chart Output */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  Live Result
                </h3>
                <div className="border-2 border-gray-200 rounded-lg p-6 bg-gradient-to-br from-gray-50 to-white">
                  {tutorial.chartType === 'line' && (
                    <LineChart 
                      data={tutorialChartData.line} 
                      title="Monthly Sales Data"
                    />
                  )}
                  {tutorial.chartType === 'bar' && (
                    <BarChart 
                      data={tutorialChartData.bar} 
                      title="Quarterly Revenue"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Tutorial Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>~5 min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                    {tutorial.chartType.toUpperCase()}
                  </span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                    Beginner
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Explore More?</h3>
        <p className="text-primary-100 mb-6 text-lg">
          Now that you've learned the basics, dive into our comprehensive documentation or try out more
          interactive examples.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/documentation"
            className="inline-block px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Read Full Documentation
          </a>
          <a
            href="/examples"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-colors text-center border-2 border-white"
          >
            View More Examples
          </a>
        </div>
      </div>
    </div>
  );
}
