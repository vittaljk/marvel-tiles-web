import React from 'react';
import * as Templates from "@/components/Templates";
import * as Atoms from "@/components/Atoms";
import CategoryView from '@/components/Molecules/CategoryView/CategoryView';
import { categories, products } from '@/data/products';

function Gallery() {
    return (
        <Templates.Layout>
            <div className="max-w-7xl mx-auto px-6">
                <div className="mt-32 mb-10">
                    <Atoms.ProductNoteCard />
                </div>
                <Atoms.ProductInfoCard />
                {categories.map((category) => {
                    const catProducts = category.id === 'all' ? products : products.filter((p) => p.category === category.id);
                    return (
                        <CategoryView
                            key={category.id}
                            categoryData={category}
                            products={catProducts}
                            title={category.name}
                            noteCard={false}
                            infoCard={false}
                            heroBanner={false}
                        />
                    );
                })}
            </div>
        </Templates.Layout>
    );
}

export default Gallery;