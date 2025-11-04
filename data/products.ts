export type ProductCategoryId =
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

// Only millimeter thicknesses allowed per new requirement
export type ThicknessUnit = "mm";
export type ProductThickness = 9 | 12 | 15 | 20;

export interface Thickness {
  value: ProductThickness; // restricted allowed values in mm
  unit: ThicknessUnit; // 'mm'
}

export interface ProductCategory {
  id: ProductCategoryId;
  name: string;
  thumbnail: string;
}

export interface Product {
  id: string;
  link: string;
  name: string;
  category: ProductCategoryId;
  size: ProductSize;
  thickness: Thickness;
  images: string[];
  thumbnail: string;
  description?: string;
}

export const categories: ProductCategory[] = [
  {
    id: "flooring-tiles",
    name: "Flooring Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282226/0e4d292c-86cf-4682-bd6c-612eec05b546.png",
  },
  {
    id: "parking-tiles",
    name: "Parking Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762283118/40d3b4c5-5648-4279-a7bd-c6ee35970ba2.png",
  },
  {
    id: "bathroom-tiles",
    name: "Bathroom Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762281743/c85bfdc1-2b5f-4f0f-ac0e-51a6e18d35ed.png",
  },
  {
    id: "kitchen-tiles",
    name: "Kitchen Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282190/b47d850c-5f2b-4f60-bdee-d6094a77f001.png",
  },
  {
    id: "elevation-tiles",
    name: "Elevation Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762283369/4fdc3a60-b7c1-49ca-9e46-550200955c0a.png",
  },
  {
    id: "full-body-tiles",
    name: "Full Body Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282568/8d4d3eb4-52db-4136-aa40-cbe818173ad6.png",
  },
  {
    id: "colour-body-tiles",
    name: "Colour Body Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282273/8b11a0f2-7b7b-4584-b094-e0d0b1d72966.png",
  },
  {
    id: "vetrified-tiles",
    name: "Vitrified Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282901/bc3f290f-b564-41fb-ba96-7f220fa81cee.png",
  },
  {
    id: "gvt-and-pgvt-tiles",
    name: "GVT and PGVT Tiles",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282728/bed3ffec-3d58-4e9e-afd7-a3f484e8b3e2.png",
  },
  {
    id: "all",
    name: "All Products",
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282401/a6b81e1a-1bab-4373-a7db-94bacfc819ca.png",
  },
];

export const products: Product[] = [
  {
    id: "mt-f01",
    link: "/products/flooring-tiles/marbella-white-gloss",
    name: "Marbella White Gloss",
    category: "flooring-tiles",
    size: "2x4",
    thickness: { value: 15, unit: "mm" },
    thumbnail: "https://placehold.co/600x400",
    images: [
      "https://res.cloudinary.com/duy0961om/image/upload/v1762282047/5d49ed87-e2d5-4564-b33d-64a16585c6ca.png",
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
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282047/5d49ed87-e2d5-4564-b33d-64a16585c6ca.png",
    images: [
      "https://res.cloudinary.com/duy0961om/image/upload/v1762282047/5d49ed87-e2d5-4564-b33d-64a16585c6ca.png",
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
    thumbnail: "https://placehold.co/600x400",
    images: [
      "https://res.cloudinary.com/demo/image/upload/v1730123456/travertine-1.jpg",
    ],
    description:
      "Warm beige tile inspired by natural travertine stone, suited for kitchen walls.",
  },
];