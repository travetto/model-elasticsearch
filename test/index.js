require('@travetto/base/bin/travetto').run()
  .then(x => {
    require('./watch');
  });