import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Card, CardBody, CardHeader, CodeBlock, Badge, Button } from '../components';
import { ChartWrapper } from '../charts';
import { tutorials } from '../data/tutorials';
import type { Tutorial, TutorialStep } from '../types';

export const TutorialsPage: React.FC = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  useEffect(() => {
    document.title = 'Tutorials - CanvasJS Learning Hub';
  }, []);

  const getDifficultyColor = (difficulty: string): 'success' | 'warning' | 'danger' => {
    switch (difficulty) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'danger';
      default:
        return 'success';
    }
  };

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
            Step-by-Step Tutorials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn CanvasJS through our guided tutorials. Each tutorial includes
            detailed explanations, code snippets, and live chart examples.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedTutorial ? (
            <TutorialDetail
              tutorial={selectedTutorial}
              onBack={() => setSelectedTutorial(null)}
              getDifficultyColor={getDifficultyColor}
            />
          ) : (
            <TutorialList
              tutorials={tutorials}
              onSelect={setSelectedTutorial}
              getDifficultyColor={getDifficultyColor}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

interface TutorialListProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
  getDifficultyColor: (difficulty: string) => 'success' | 'warning' | 'danger';
}

const TutorialList: React.FC<TutorialListProps> = ({
  tutorials,
  onSelect,
  getDifficultyColor,
}) => {
  return (
    <motion.div
      key="list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {tutorials.map((tutorial, index) => (
        <motion.div
          key={tutorial.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card hoverable onClick={() => onSelect(tutorial)} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {tutorial.title}
                  </h3>
                  <Badge variant={getDifficultyColor(tutorial.difficulty)} size="sm">
                    {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center text-primary-600">
                  <span className="text-sm font-medium mr-2">{tutorial.steps.length} steps</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">{tutorial.description}</p>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

interface TutorialDetailProps {
  tutorial: Tutorial;
  onBack: () => void;
  getDifficultyColor: (difficulty: string) => 'success' | 'warning' | 'danger';
}

const TutorialDetail: React.FC<TutorialDetailProps> = ({
  tutorial,
  onBack,
  getDifficultyColor,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Button and Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Tutorials
        </button>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{tutorial.title}</h1>
            <div className="flex items-center gap-4">
              <Badge variant={getDifficultyColor(tutorial.difficulty)} size="md">
                {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
              </Badge>
              <span className="text-gray-500">{tutorial.steps.length} steps</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-4">{tutorial.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {tutorial.steps.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-600 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentStep + 1) / tutorial.steps.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <StepContent
          key={currentStep}
          step={tutorial.steps[currentStep]}
          stepNumber={currentStep + 1}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
          leftIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          }
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {tutorial.steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep
                  ? 'bg-primary-600'
                  : index < currentStep
                  ? 'bg-primary-300'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextStep}
          disabled={currentStep === tutorial.steps.length - 1}
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          }
        >
          {currentStep === tutorial.steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </motion.div>
  );
};

interface StepContentProps {
  step: TutorialStep;
  stepNumber: number;
}

const StepContent: React.FC<StepContentProps> = ({ step, stepNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-lg font-bold text-primary-600">{stepNumber}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
          </div>
        </CardHeader>
        <CardBody className="space-y-6">
          {/* Explanation */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Explanation
            </h3>
            <p className="text-gray-700 leading-relaxed">{step.explanation}</p>
          </div>

          {/* Code Snippet */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Code
            </h3>
            <CodeBlock code={step.codeSnippet} language="typescript" />
          </div>

          {/* Chart Output */}
          {step.chartOptions && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Output
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ChartWrapper options={step.chartOptions} />
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TutorialsPage;
