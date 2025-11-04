// data/products.ts
export type ProductCategory =
    | "flooring-tiles"
    | "parking-tiles"
    | "bathroom-tiles"
    | "kitchen-tiles"
    | "elevation-tiles"
    | "full-body-tiles"
    | "colour-body-tiles"
    | "vetrified-tiles"
    | "gvt-and-pgvt-tiles"
    | "all";

export type ProductSize = "2x4" | "6x4" | "3x3" | "4x4";

// New: typesafe thickness representation
// Only millimeter thicknesses allowed per new requirement
export type ThicknessUnit = "mm";
export type AllowedThicknessValue = 9 | 12 | 15 | 20;
export interface Thickness {
    value: AllowedThicknessValue; // restricted allowed values in mm
    unit: ThicknessUnit; // 'mm'
}

export interface Product {
    id: string;
    link: string;
    name: string;
    category: ProductCategory;
    size: ProductSize;
    thickness: Thickness; // changed from string to structured type
    images: string[];
    thumbnail: string;
    description?: string; // optional for future use
}

export const categories: ProductCategory[] = [
    "flooring-tiles",
    "parking-tiles",
    "bathroom-tiles",
    "kitchen-tiles",
    "elevation-tiles",
    "full-body-tiles",
    "colour-body-tiles",
    "vetrified-tiles",
    "gvt-and-pgvt-tiles",
    "all"
];

export const products: Product[] = [
    {
        id: "mt-f01",
        link: "/products/flooring-tiles/marbella-white-gloss",
        name: "Marbella White Gloss",
        category: "flooring-tiles",
        size: "2x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail:
            "https://placehold.co/600x400",
        images: [
            "https://res.cloudinary.com/demo/image/upload/v1730123456/marble-white-1.jpg",
            "https://res.cloudinary.com/demo/image/upload/v1730123456/marble-white-2.jpg",
        ],
        description:
            "Elegant white vitrified tile with high-gloss finish, ideal for modern flooring.",
    },
    {
        id: "mt-b01",
        link: "/products/bathroom-tiles/slate-grey-matte",
        name: "Slate Grey Matte",
        category: "bathroom-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail:
            "https://placehold.co/600x400",
        images: [
            "https://res.cloudinary.com/demo/image/upload/v1730123456/slate-grey-1.jpg",
        ],
        description:
            "Matte textured grey tile perfect for bathrooms and wet areas.",
    },
    {
        id: "mt-k01",
        link: "/products/kitchen-tiles/travertine-beige",
        name: "Travertine Beige",
        category: "kitchen-tiles",
        size: "6x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail:
            "https://placehold.co/600x400",
        images: [
            "https://res.cloudinary.com/demo/image/upload/v1730123456/travertine-1.jpg",
        ],
        description:
            "Warm beige tile inspired by natural travertine stone, suited for kitchen walls.",
    },
];