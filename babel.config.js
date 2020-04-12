module.exports = {
  plugins: [
    ["@babel/plugin-proposal-pipeline-operator", { 
      proposal: "smart",
     },
   ],
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
  ],
};
