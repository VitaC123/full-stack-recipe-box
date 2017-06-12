var dbPassword = process.env.dbPassword || require('../local-dev-creds').dbPassword;

module.exports = {
    url: 'mongodb://full-stack-recipe-box-user1:' +
    dbPassword +
    '@ds123752.mlab.com:23752/full-stack-recipe-box'
};
