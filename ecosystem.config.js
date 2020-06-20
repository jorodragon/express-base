module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [

        // First application
        {
            name      : 'express-base',
            script    : './bin/www',
            env: {
                DB_NAME : "express_base"
            },
            env_production : {
                NODE_ENV: 'production',
                DB_HOST : "server host",
                DB_USER : "username",
                DB_PASSWORD : "password",
                PORT : 8888,
                DEBUG: "express-base:error,app:error",
            },
            env_development: {
                NODE_ENV: 'development',
                DB_HOST : "localhost",
                DB_USER : "root",
                DB_PASSWORD : "tronghieu",
                PORT : 8585,
                DEBUG: "express-base:*,app:*",
            }
        },
        
    ],
};
