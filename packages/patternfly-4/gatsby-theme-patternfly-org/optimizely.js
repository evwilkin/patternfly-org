const optimizelySDK = require('@optimizely/optimizely-sdk');

// console logging for SDK processes
// https://docs.developers.optimizely.com/rollouts/docs/customize-logger-javascript-node
optimizelySDK.setLogLevel('warning');
optimizelySDK.setLogger(optimizelySDK.logging.createLogger())

const optlyProdReactInstance = optimizelySDK.createInstance({
  sdkKey: '6DvBTLhgH6a7GZxdA7B27R',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

const optlyProdCoreInstance = optimizelySDK.createInstance({
  sdkKey: 'F4nG4qT7a98DzHLTZN8zyx',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

const optlyStagingReactInstance = optimizelySDK.createInstance({
  sdkKey: 'TCqky9nBNRwfmKhq9FqrNW',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

const optlyStagingCoreInstance = optimizelySDK.createInstance({
  sdkKey: 'MwZCfoQvjwZGcsM9Kxojyb',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

module.exports = {
  optlyProdReactInstance,
  optlyProdCoreInstance,
  optlyStagingReactInstance,
  optlyStagingCoreInstance
};
