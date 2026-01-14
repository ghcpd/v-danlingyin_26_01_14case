export default function Documentation() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">CanvasJS Documentation</h1>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction to CanvasJS</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CanvasJS is a powerful JavaScript charting library built on HTML5 Canvas for rendering beautiful,
            responsive charts. It provides an easy-to-use API that works seamlessly with modern frameworks like
            React, making it the ideal choice for data visualization in web applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With support for 30+ chart types and extensive customization options, CanvasJS enables developers
            to create professional-grade visualizations that perform smoothly even with large datasets.
          </p>
        </section>

        {/* Installation */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Instructions</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Using npm</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>npm install @canvasjs/react-charts</code>
          </pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Using pnpm</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>pnpm add @canvasjs/react-charts</code>
          </pre>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Using yarn</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>yarn add @canvasjs/react-charts</code>
          </pre>
        </section>

        {/* Basic Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic Chart Concepts</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Chart Options Object</h3>
            <p className="text-gray-700 mb-3">
              Every CanvasJS chart is configured using an options object that defines the chart's appearance
              and behavior. The options object contains properties like title, data, axes, and more.
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`const options = {
  animationEnabled: true,
  title: {
    text: "Chart Title"
  },
  data: [{
    type: "line",
    dataPoints: [
      { x: 10, y: 71 },
      { x: 20, y: 55 },
      { x: 30, y: 50 }
    ]
  }]
};`}</code>
            </pre>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Points</h3>
            <p className="text-gray-700 mb-3">
              Data points are the core of any chart. They represent individual values to be plotted.
              Each data point typically has x and y coordinates, though some chart types use different formats.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>x:</strong> The horizontal coordinate (can be number or Date)</li>
              <li><strong>y:</strong> The vertical coordinate (numeric value)</li>
              <li><strong>label:</strong> Text label for the data point</li>
              <li><strong>color:</strong> Custom color for individual points</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Series</h3>
            <p className="text-gray-700 mb-3">
              A data series is a collection of related data points. Charts can contain multiple data series,
              each with its own type and styling. This allows for complex multi-series visualizations.
            </p>
          </div>
        </section>

        {/* Common Chart Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Chart Types</h2>

          <div className="space-y-6">
            {/* Line Chart */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Line Chart</h3>
              <p className="text-gray-800 mb-3">
                Line charts are ideal for showing trends over time or continuous data. They connect data
                points with lines, making it easy to visualize patterns and changes.
              </p>
              <p className="text-gray-700"><strong>Use cases:</strong> Time series data, trends, forecasting</p>
              <p className="text-gray-700 mt-2"><strong>Type:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-sm">line</code></p>
            </div>

            {/* Bar Chart */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-green-900 mb-3">Bar Chart (Column)</h3>
              <p className="text-gray-800 mb-3">
                Bar charts display data using rectangular bars. They're perfect for comparing discrete
                categories or showing rankings. Bars can be vertical (column) or horizontal.
              </p>
              <p className="text-gray-700"><strong>Use cases:</strong> Category comparison, rankings, distribution</p>
              <p className="text-gray-700 mt-2"><strong>Type:</strong> <code className="bg-green-200 px-2 py-1 rounded text-sm">column</code> or <code className="bg-green-200 px-2 py-1 rounded text-sm">bar</code></p>
            </div>

            {/* Pie Chart */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-purple-900 mb-3">Pie Chart</h3>
              <p className="text-gray-800 mb-3">
                Pie charts show proportional data as slices of a circle. Each slice represents a percentage
                of the whole, making them excellent for displaying composition and market share.
              </p>
              <p className="text-gray-700"><strong>Use cases:</strong> Percentages, market share, composition</p>
              <p className="text-gray-700 mt-2"><strong>Type:</strong> <code className="bg-purple-200 px-2 py-1 rounded text-sm">pie</code></p>
            </div>

            {/* Area Chart */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-orange-900 mb-3">Area Chart</h3>
              <p className="text-gray-800 mb-3">
                Area charts are similar to line charts but fill the area below the line. They're useful
                for emphasizing magnitude and cumulative totals over time.
              </p>
              <p className="text-gray-700"><strong>Use cases:</strong> Cumulative data, volume over time, trends</p>
              <p className="text-gray-700 mt-2"><strong>Type:</strong> <code className="bg-orange-200 px-2 py-1 rounded text-sm">area</code></p>
            </div>
          </div>
        </section>

        {/* Props and Configuration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Props and Configuration Overview</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Property</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">animationEnabled</td>
                  <td className="px-6 py-4 text-sm text-gray-700">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Enables animation on chart load</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">title</td>
                  <td className="px-6 py-4 text-sm text-gray-700">object</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Chart title configuration with text and styling</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">theme</td>
                  <td className="px-6 py-4 text-sm text-gray-700">string</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Visual theme (light1, light2, dark1, dark2)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">data</td>
                  <td className="px-6 py-4 text-sm text-gray-700">array</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Array of data series to be plotted</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">axisX</td>
                  <td className="px-6 py-4 text-sm text-gray-700">object</td>
                  <td className="px-6 py-4 text-sm text-gray-700">X-axis configuration (labels, grid, range)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">axisY</td>
                  <td className="px-6 py-4 text-sm text-gray-700">object</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Y-axis configuration (labels, grid, range)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">backgroundColor</td>
                  <td className="px-6 py-4 text-sm text-gray-700">string</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Background color of the chart</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">height</td>
                  <td className="px-6 py-4 text-sm text-gray-700">number</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Chart height in pixels</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">width</td>
                  <td className="px-6 py-4 text-sm text-gray-700">number</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Chart width in pixels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Start Example */}
        <section className="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Example</h2>
          <p className="text-gray-700 mb-4">
            Here's a minimal example to get you started with CanvasJS in React:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyFirstChart() {
  const options = {
    animationEnabled: true,
    title: {
      text: "My First Chart"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 }
      ]
    }]
  };

  return <CanvasJSChart options={options} />;
}`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}
