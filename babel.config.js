export default {
  presets: [
    [
      "@babel/preset-env", {
        modules: false,
        useBuiltIns: "usage",
        corejs: "3.42.0"
      }
    ]
  ]
};
