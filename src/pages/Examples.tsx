import { chartExamples, lineChartData, barChartData, pieChartData } from '@/data/examples';
import LineChart from '@/charts/LineChart';
import BarChart from '@/charts/BarChart';
import PieChart from '@/charts/PieChart';

export default function Examples() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Chart Examples</h1>
        <p className="text-xl text-gray-600">
          Explore live CanvasJS chart examples. Each chart is fully interactive and responsive.
        </p>
      </div>

      <div className="space-y-12">
        {/* Line Chart Example */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {chartExamples[0].title}
                </h2>
                <p className="text-gray-600">
                  {chartExamples[0].description}
                </p>
              </div>
            </div>
            <div className="mt-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <LineChart 
                data={lineChartData} 
                title="Monthly Sales Growth 2024"
              />
            </div>
          </div>
        </div>

        {/* Bar Chart Example */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {chartExamples[1].title}
                </h2>
                <p className="text-gray-600">
                  {chartExamples[1].description}
                </p>
              </div>
            </div>
            <div className="mt-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <BarChart 
                data={barChartData} 
                title="Quarterly Revenue 2024"
              />
            </div>
          </div>
        </div>

        {/* Pie Chart Example */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {chartExamples[2].title}
                </h2>
                <p className="text-gray-600">
                  {chartExamples[2].description}
                </p>
              </div>
            </div>
            <div className="mt-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <PieChart 
                data={pieChartData} 
                title="Chart Type Usage Distribution"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Learn More?</h3>
        <p className="text-gray-700 mb-6">
          Check out our step-by-step tutorials to learn how to create and customize these charts in your own projects.
        </p>
        <a
          href="/tutorials"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          View Tutorials
        </a>
      </div>
    </div>
  );
}
