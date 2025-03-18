export default function handler(req, res) {
  // Import the app component
  const { default: App } = require('../../src/app/page');
  
  return {
    props: {}
  };
} 