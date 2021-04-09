module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  seeds: ['dist/seeders/*.seed.{js,ts}'],
  factories: ['dist/factories/*.factory.{js,ts}'],
  cli: {
    migrationsDir: 'dist/migrations',
    entitiesDir: 'dist/entities',
    seedersDir: 'dist/seeds',
    factoriesDir: 'dist /factories',
  },
  synchronize: false,
};
