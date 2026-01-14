import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CanvasJSReact from '@canvasjs/react-charts';
import { Layout, Button } from '../components';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// Animated floating shapes component
const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-canvasjs-blue/20 to-canvasjs-green/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-canvasjs-orange/20 to-canvasjs-purple/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '50%', right: '5%' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-primary-400/20 to-primary-600/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', left: '30%' }}
      />
    </div>
  );
};

// Animated chart for hero section
const AnimatedHeroChart: React.FC = () => {
  const chartRef = useRef<unknown>(null);

  const options = {
    animationEnabled: true,
    theme: 'light2',
    backgroundColor: 'transparent',
    height: 250,
    axisX: {
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      labelFontSize: 0,
    },
    axisY: {
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      labelFontSize: 0,
    },
    data: [
      {
        type: 'splineArea',
        color: 'rgba(54, 158, 173, 0.3)',
        markerSize: 0,
        dataPoints: [
          { y: 25 },
          { y: 45 },
          { y: 35 },
          { y: 60 },
          { y: 48 },
          { y: 75 },
          { y: 65 },
          { y: 85 },
          { y: 70 },
          { y: 90 },
        ],
      },
      {
        type: 'spline',
        color: '#369EAD',
        lineThickness: 3,
        markerType: 'circle',
        markerSize: 8,
        markerColor: '#369EAD',
        dataPoints: [
          { y: 25 },
          { y: 45 },
          { y: 35 },
          { y: 60 },
          { y: 48 },
          { y: 75 },
          { y: 65 },
          { y: 85 },
          { y: 70 },
          { y: 90 },
        ],
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      <CanvasJSChart
        options={options}
        onRef={(ref: unknown) => {
          chartRef.current = ref;
        }}
      />
    </motion.div>
  );
};

// Feature card component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'CanvasJS Learning Hub - Home';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <FloatingShapes />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 mb-6">
                  <motion.span
                    className="w-2 h-2 bg-primary-500 rounded-full mr-2"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Developer Learning Platform
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Master{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-canvasjs-blue to-canvasjs-green">
                  CanvasJS
                </span>{' '}
                Charts
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg"
              >
                A comprehensive learning hub for building beautiful, high-performance
                charts with CanvasJS. From basics to advanced customization.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button as="link" to="/documentation" size="lg">
                  View Documentation
                </Button>
                <Button as="link" to="/examples" variant="outline" size="lg">
                  Explore Examples
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="flex gap-8 mt-12"
              >
                <div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    10x
                  </motion.div>
                  <div className="text-sm text-gray-500">Faster than SVG</div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    30+
                  </motion.div>
                  <div className="text-sm text-gray-500">Chart Types</div>
                </div>
                <div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-sm text-gray-500">Responsive</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 relative">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-canvasjs-green rounded-full animate-bounce-slow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-canvasjs-orange rounded-full animate-pulse-slow" />
                <AnimatedHeroChart />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* What is CanvasJS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What is CanvasJS?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CanvasJS is a responsive HTML5 charting library built on the Canvas element. 
              It delivers exceptionally fast performance while maintaining beautiful visuals 
              and smooth animations, making it perfect for data-intensive applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning Fast"
              description="Canvas-based rendering delivers 10x better performance than SVG alternatives."
              delay={0.1}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Responsive"
              description="Charts automatically adapt to any screen size and device orientation."
              delay={0.2}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              title="Customizable"
              description="Extensive options for colors, themes, legends, axes, and more."
              delay={0.3}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              }
              title="Interactive"
              description="Built-in support for tooltips, zoom, pan, and click events."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose CanvasJS Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose CanvasJS?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Simple API',
                    desc: 'Intuitive configuration object makes chart creation straightforward',
                  },
                  {
                    title: 'Rich Chart Types',
                    desc: 'Line, bar, pie, area, and many more chart types supported',
                  },
                  {
                    title: 'Smooth Animations',
                    desc: 'Beautiful built-in animations that engage your users',
                  },
                  {
                    title: 'Great Documentation',
                    desc: 'Comprehensive docs and examples to get you started quickly',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <CanvasJSChart
                options={{
                  animationEnabled: true,
                  theme: 'light2',
                  title: { text: 'Sample Multi-Series Chart', fontSize: 18 },
                  axisY: { includeZero: true },
                  legend: { cursor: 'pointer', verticalAlign: 'top' },
                  data: [
                    {
                      type: 'column',
                      name: '2024',
                      showInLegend: true,
                      dataPoints: [
                        { label: 'Q1', y: 45 },
                        { label: 'Q2', y: 55 },
                        { label: 'Q3', y: 60 },
                        { label: 'Q4', y: 70 },
                      ],
                    },
                    {
                      type: 'column',
                      name: '2025',
                      showInLegend: true,
                      dataPoints: [
                        { label: 'Q1', y: 52 },
                        { label: 'Q2', y: 68 },
                        { label: 'Q3', y: 75 },
                        { label: 'Q4', y: 85 },
                      ],
                    },
                  ],
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Dive into our tutorials and start creating beautiful charts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button as="link" to="/tutorials" variant="secondary" size="lg">
                Start Learning
              </Button>
              <Button
                as="anchor"
                href="https://canvasjs.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white/10"
              >
                Visit CanvasJS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
