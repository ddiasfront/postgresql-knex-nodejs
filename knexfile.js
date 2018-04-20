// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'cjswebstore',
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      password: '123456',
      utf: 'utf8'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'testcjswebstore',
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      password: '123456',
      utf: 'utf8'
    }
  }
}
