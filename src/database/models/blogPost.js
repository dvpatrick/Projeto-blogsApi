module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      // foreignKey: 'userId',
      // as: 'user' // verificar, pois acho q e o 'u' maiusculo
    });
  };

  return BlogPost;
};