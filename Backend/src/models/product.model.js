const mongoose = require('mongoose');
const { private, paginate, softDelete } = require('./plugins');


const productSchema = mongoose.Schema(
    {
        title: { type: String },
        price: { type: Number },
        description: { type: String },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
        image: [
            {
                name: { type: String },
                imageUrl: { type: String }
            }
        ],
        rating: [
            {
                rate: { type: Number },
                ratingBy: {
                    type: mongoose.Types.ObjectId,
                    ref: "User"
                }
            }
        ]
    },
    {
        timestamps: true,
    }
);


productSchema.plugin(softDelete);
productSchema.plugin(private);
productSchema.plugin(paginate);





/**
 * @typedef product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
