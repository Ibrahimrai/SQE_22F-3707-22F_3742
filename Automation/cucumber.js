module.exports = {
    default: {
      require: ['tests/step-definitions/*.js'], // Path to your step definitions
      format: [
        'progress',
        'json:./reports/cucumber_report.json' // Generate Cucumber JSON report
      ],
      publishQuiet: true
    }
  };
  