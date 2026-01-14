import { motion } from 'framer-motion';
import { Layout, Button } from '../components';

export const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="text-9xl font-bold text-gray-200 mb-4"
          >
            404
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button as="link" to="/" size="lg">
            Go Back Home
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
