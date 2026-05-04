// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock Vercel Analytics - must be before any imports of the module
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
  track: jest.fn(),
}), { virtual: true });

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/react', () => ({
  SpeedInsights: () => null,
}), { virtual: true });
