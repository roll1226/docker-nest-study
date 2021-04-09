module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/migrations/*.{js,ts}'],
  seeds: ['src/seeders/*.seed.{js,ts}'],
  factories: ['src/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
    seedersDir: 'src/seeds',
    factoriesDir: 'src/factories',
  },
  synchronize: false,
};
