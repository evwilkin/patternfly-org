const optimizelySDK = require('@optimizely/optimizely-sdk');

// console logging for SDK processes
// https://docs.developers.optimizely.com/rollouts/docs/customize-logger-javascript-node
optimizelySDK.setLogLevel('warning');
optimizelySDK.setLogger(optimizelySDK.logging.createLogger())

const optimizelyDevInstance = optimizelySDK.createInstance({
  sdkKey: 'F4nG4qT7a98DzHLTZN8zyx',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

const optimizelyProdInstance = optimizelySDK.createInstance({
  sdkKey: '6DvBTLhgH6a7GZxdA7B27R',
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 1000,  // 1 second in milliseconds
  },
});

const createFeatureFlag = flagName => {
  fetch("https://api.optimizely.com/v2/features", {
    method: 'POST',
    headers: {
      Authorization: "Bearer 2:GXdz48mVG9mIKEq9GTG85PujpxoBXHszlvhtOP5g0FsPysAfzSLk"
    },
    body: JSON.stringify({
      archived: false,
      environments: {
        development: {
          rollout_rules: [
            {
              audience_conditions: "everyone",
              enabled: true,
              percentage_included: 10000
            }
          ]
        },
        production: {
          rollout_rules: [
            {
              audience_conditions: "everyone",
              enabled: false,
              percentage_included: 10000
            }
          ]
        }
      },
      key: flagName,
      project_id: 17281121446,
      variables: []
    })
  })
  .then(function(res){
    console.log(res);
  })
  .catch(function(error){
    console.log(error);
  });
}

module.exports = {
  optimizelyDevInstance,
  optimizelyProdInstance,
  createFeatureFlag
};
