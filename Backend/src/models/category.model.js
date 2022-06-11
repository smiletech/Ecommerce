const mongoose = require('mongoose');
const { private, paginate, softDelete } = require('./plugins');


const categorySchema = mongoose.Schema(
    {
        name: { type: String },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);


categorySchema.plugin(softDelete);
categorySchema.plugin(private);
categorySchema.plugin(paginate);





/**
 * @typedef product
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
