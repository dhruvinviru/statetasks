// Mock for @vercel/analytics
const Analytics = () => null;
const track = jest.fn();

module.exports = {
  Analytics,
  track,
  react: {
    Analytics,
    track,
  },
};
