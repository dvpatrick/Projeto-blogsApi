module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  PostCategory.associate = (model) => {
    model.Category.belongsToMany(model.BlogPost, {
      through: 'PostCategory',
      foreignKey: 'categoryId',
    })
  
    model.BlogPost.belongsToMany(model.Category, {
      through: 'PostCategory',
      foreignKey: 'postId',
    })
  }

  return PostCategory;
};
