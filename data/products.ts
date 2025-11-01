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
export type ThicknessUnit = "mm" | "cm" | "in";
export interface Thickness {
    value: number; // numeric value, e.g., 400
    unit: ThicknessUnit; // e.g., 'mm'
}

export interface Product {
    id: string;
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
        name: "Marbella White Gloss",
        category: "flooring-tiles",
        size: "2x4",
        thickness: { value: 400, unit: "mm" },
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
        name: "Slate Grey Matte",
        category: "bathroom-tiles",
        size: "2x4",
        thickness: { value: 400, unit: "mm" },
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
        name: "Travertine Beige",
        category: "kitchen-tiles",
        size: "6x4",
        thickness: { value: 400, unit: "mm" },
        thumbnail:
            "https://placehold.co/600x400",
        images: [
            "https://res.cloudinary.com/demo/image/upload/v1730123456/travertine-1.jpg",
        ],
        description:
            "Warm beige tile inspired by natural travertine stone, suited for kitchen walls.",
    },
];