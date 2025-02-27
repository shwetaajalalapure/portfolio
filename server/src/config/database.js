// This is a dummy database file that doesn't actually connect to MySQL
// It's used to maintain compatibility with existing code while removing the MySQL dependency

console.log('MySQL dependency has been removed. Using dummy database implementation.');

// Create a dummy sequelize object with methods that do nothing
const sequelize = {
  authenticate: async () => {
    return Promise.resolve();
  },
  sync: async () => {
    return Promise.resolve();
  },
  define: (modelName, attributes, options) => {
    // Return a dummy model with common methods
    return {
      findAll: async () => [],
      findByPk: async () => null,
      create: async (data) => ({ id: 'dummy-id', ...data, createdAt: new Date(), updatedAt: new Date() }),
      update: async () => [0],
      destroy: async () => 0
    };
  }
};

// No need to initialize anything
export default sequelize; 