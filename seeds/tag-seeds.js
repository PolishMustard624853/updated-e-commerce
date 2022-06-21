const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Electronic music',
  },
  {
    tag_name: 'Hip Hop',
  },
  {
    tag_name: 'maroon',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
