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

export const productSizes: ProductSize[] = ["2x4", "6x4", "3x3", "4x4"];

// Only millimeter thicknesses allowed per new requirement
export type ThicknessUnit = "mm";
export const thicknessUnit: ThicknessUnit = "mm";

export type ProductThickness = 9 | 12 | 15 | 20;

export const productThicknesses: ProductThickness[] = [9, 12, 15, 20];

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
    images?: string[];
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
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450133/Screenshot_2025-11-06_at_4.36.51_PM_xnjjub.png",
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
    // {
    //     id: "all",
    //     name: "All Products",
    //     thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282401/a6b81e1a-1bab-4373-a7db-94bacfc819ca.png",
    // },
];


// produtNames

// anitek-gritex
// anitek-carving
// anitek-glossy
// anitek-high-glossy
// anitek-marvello
// anitek-matt
// anitek-super-gloss
// anitek-wood
// flais-extramax


export const products: Product[] = [
    // ===== FLOORING TILES =====
    {
        id: "ft-anitek-gritex",
        link: "/products/flooring-tiles/anitek-gritex",
        name: "Anitek Gritex",
        category: "flooring-tiles",
        size: "2x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "Durable grit-textured flooring tile designed for modern high-traffic spaces.",
    },
    {
        id: "ft-anitek-carving",
        link: "/products/flooring-tiles/anitek-carving",
        name: "Anitek Carving",
        category: "flooring-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "Carved surface flooring tile offering depth and refined aesthetics.",
    },
    {
        id: "ft-anitek-glossy",
        link: "/products/flooring-tiles/anitek-glossy",
        name: "Anitek Glossy",
        category: "flooring-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Glossy vitrified flooring tile that enhances interior brightness and elegance.",
    },
    {
        id: "ft-anitek-high-glossy",
        link: "/products/flooring-tiles/anitek-high-glossy",
        name: "Anitek High Glossy",
        category: "flooring-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "High-gloss tile with mirror-like finish for contemporary flooring.",
    },
    {
        id: "ft-anitek-marvello",
        link: "/products/flooring-tiles/anitek-marvello",
        name: "Anitek Marvello",
        category: "flooring-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Marble-inspired luxury tile ideal for elegant flooring applications.",
    },
    {
        id: "ft-anitek-matt",
        link: "/products/flooring-tiles/anitek-matt",
        name: "Anitek Matt",
        category: "flooring-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "Matt finish tile offering anti-slip comfort and modern style.",
    },
    {
        id: "ft-anitek-super-gloss",
        link: "/products/flooring-tiles/anitek-super-gloss",
        name: "Anitek Super Gloss",
        category: "flooring-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Ultra-glossy surface tile for bright and luxurious flooring spaces.",
    },
    {
        id: "ft-anitek-wood",
        link: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        name: "Anitek Wood",
        category: "flooring-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "Wood-grain flooring tile combining natural texture and modern durability.",
    },
    {
        id: "ft-flais-extramax",
        link: "/products/flooring-tiles/flais-extramax",
        name: "Flais Extramax",
        category: "flooring-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "Extra-durable flooring tile engineered for heavy-duty performance.",
    },
    // ===== PARKING TILES =====
    {
        id: "pt-anitek-gritex",
        link: "/products/parking-tiles/anitek-gritex",
        name: "Bricks Punch",
        category: "parking-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450130/brick-arizona_o8zrrj.png",
        description:
            "Heavy-duty grit-textured tile designed for parking and outdoor driveways with superior traction.",
    },
    {
        id: "pt-anitek-carving",
        link: "/products/parking-tiles/anitek-carving",
        name: "MM Ruby Green",
        category: "parking-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450131/mm-green_v4igjn.png",
        description:
            "Carved surface parking tile that combines aesthetic appeal with structural strength.",
    },
    {
        id: "pt-anitek-glossy",
        link: "/products/parking-tiles/anitek-glossy",
        name: "Hexa Cobble Cubix",
        category: "parking-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450133/Screenshot_2025-11-06_at_4.36.51_PM_xnjjub.png",
        description:
            "Smooth glossy tile ideal for covered parking zones and easy maintenance areas.",
    },
    {
        id: "pt-anitek-high-glossy",
        link: "/products/parking-tiles/anitek-high-glossy",
        name: "Montessa Fusion Victor",
        category: "parking-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450134/Screenshot_2025-11-06_at_4.37.35_PM_agqmv3.png",
        description:
            "High-gloss finish tile that offers refined look with moderate load-bearing capability.",
    },
    {
        id: "pt-anitek-marvello",
        link: "/products/parking-tiles/anitek-marvello",
        name: "Plain Series",
        category: "parking-tiles",
        size: "3x3",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450134/Screenshot_2025-11-06_at_4.37.59_PM_qd0dz3.png",
        description:
            "Marble-inspired robust tile suitable for both vehicle parking and outdoor pathways.",
    },
    {
        id: "pt-anitek-matt",
        link: "/products/parking-tiles/anitek-matt",
        name: "Rock Cross Strip Square",
        category: "parking-tiles",
        size: "4x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450135/Screenshot_2025-11-06_at_4.38.19_PM_d9mm8t.png",
        description:
            "Matt finish anti-slip tile for outdoor parking with long-lasting color durability.",
    },
    {
        id: "pt-anitek-super-gloss",
        link: "/products/parking-tiles/anitek-super-gloss",
        name: "Rotek Aero Stone",
        category: "parking-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450136/Screenshot_2025-11-06_at_4.38.54_PM_idktaj.png",
        description:
            "Super glossy tile designed for semi-covered parking areas with easy cleaning surface.",
    },
    // {
    //     id: "pt-anitek-wood",
    //     link: "/products/parking-tiles/anitek-wood",
    //     name: "Anitek Wood",
    //     category: "parking-tiles",
    //     size: "6x4",
    //     thickness: { value: 20, unit: "mm" },
    //     thumbnail: "https://placehold.co/600x400",
    //     description:
    //         "Wood-grain textured tile offering a natural finish ideal for parking zones and patios.",
    // },
    // {
    //     id: "pt-flais-extramax",
    //     link: "/products/parking-tiles/flais-extramax",
    //     name: "Flais Extramax",
    //     category: "parking-tiles",
    //     size: "4x4",
    //     thickness: { value: 20, unit: "mm" },
    //     thumbnail: "https://placehold.co/600x400",
    //     description:
    //         "Extra-strong parking tile engineered to withstand high load vehicles and long-term wear.",
    // },
    // ===== BATHROOM TILES =====
    {
        id: "bt-anitek-gritex",
        link: "/products/bathroom-tiles/anitek-gritex",
        name: "Anitek Gritex",
        category: "bathroom-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762282047/5d49ed87-e2d5-4564-b33d-64a16585c6ca.png",
        description:
            "Anti-slip grit-textured tile ideal for wet bathroom floors, providing superior grip and safety.",
    },
    {
        id: "bt-anitek-carving",
        link: "/products/bathroom-tiles/anitek-carving",
        name: "Anitek Carving",
        category: "bathroom-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450051/anitek-carving_mch5ua.png",
        description:
            "Carved design bathroom tile that adds texture and a touch of modern craftsmanship.",
    },
    {
        id: "bt-anitek-glossy",
        link: "/products/bathroom-tiles/anitek-glossy",
        name: "Anitek Glossy",
        category: "bathroom-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450051/anitek-glossy_ue5odz.png",
        description:
            "Glossy bathroom wall tile that reflects light beautifully and is easy to clean.",
    },
    {
        id: "bt-anitek-high-glossy",
        link: "/products/bathroom-tiles/anitek-high-glossy",
        name: "Anitek High Glossy",
        category: "bathroom-tiles",
        size: "6x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450052/anitek-high-glossy_ihxwev.png",
        description:
            "High-gloss tile suitable for luxurious bathroom walls and accent sections.",
    },
    {
        id: "bt-anitek-marvello",
        link: "/products/bathroom-tiles/anitek-marvello",
        name: "Anitek Marvello",
        category: "bathroom-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450051/anitek-marvello_dqdn4e.png",
        description:
            "Marble-inspired tile bringing a sophisticated spa-like look to bathroom spaces.",
    },
    {
        id: "bt-anitek-matt",
        link: "/products/bathroom-tiles/anitek-matt",
        name: "Anitek Matt",
        category: "bathroom-tiles",
        size: "4x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450051/anitek-matt_lfhqfm.png",
        description:
            "Matte finish tile designed for slip resistance and moisture control in bathrooms.",
    },
    {
        id: "bt-anitek-super-gloss",
        link: "/products/bathroom-tiles/anitek-super-gloss",
        name: "Anitek Super Gloss",
        category: "bathroom-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450051/anitek-super-gloss_l6bpau.png",
        description:
            "Ultra-gloss tile ideal for bathroom walls offering a reflective, easy-to-clean surface.",
    },
    {
        id: "bt-anitek-wood",
        link: "/products/bathroom-tiles/anitek-wood",
        name: "Anitek Wood",
        category: "bathroom-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450055/anitek-wood-terrazo_dikzhk.png",
        description:
            "Wood-look tile perfect for dry bathroom areas, blending warmth and natural aesthetics.",
    },
    {
        id: "bt-flais-extramax",
        link: "/products/bathroom-tiles/flais-extramax",
        name: "Flais Extramax",
        category: "bathroom-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450053/flais-extramax_hdojux.png",
        description:
            "Extra-durable bathroom tile built to handle constant moisture and daily wear with ease.",
    },
    // ===== KITCHEN TILES =====
    {
    id: "kt-anitek-gritex",
    link: "/products/kitchen-tiles/anitek-gritex",
    name: "Anitek Gritex",
    category: "kitchen-tiles",
    size: "2x4",
    thickness: { value: 9, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
    description:
      "Textured kitchen wall tile that offers strong grip and a rugged, contemporary finish.",
  },
  {
    id: "kt-anitek-carving",
    link: "/products/kitchen-tiles/anitek-carving",
    name: "Anitek Carving",
    category: "kitchen-tiles",
    size: "3x3",
    thickness: { value: 12, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450110/anitek-carving_jo3vst.png",
    description:
      "Carved design tile perfect for stylish kitchen backsplashes and feature walls.",
  },
  {
    id: "kt-anitek-glossy",
    link: "/products/kitchen-tiles/anitek-glossy",
    name: "Anitek Glossy",
    category: "kitchen-tiles",
    size: "2x4",
    thickness: { value: 9, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450110/anitek-glossy_j4v5oz.png",
    description:
      "Glossy tile that brightens up kitchen spaces and makes cleaning effortless.",
  },
  {
    id: "kt-anitek-high-glossy",
    link: "/products/kitchen-tiles/anitek-high-glossy",
    name: "Anitek High Glossy",
    category: "kitchen-tiles",
    size: "6x4",
    thickness: { value: 15, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450112/anitek-high-glossy_cdihnf.png",
    description:
      "High-gloss kitchen tile with a mirror-like surface, ideal for modern cooking spaces.",
  },
//   {
//     id: "kt-anitek-marvello",
//     link: "/products/kitchen-tiles/anitek-marvello",
//     name: "Anitek Marvello",
//     category: "kitchen-tiles",
//     size: "3x3",
//     thickness: { value: 12, unit: "mm" },
//     thumbnail: "https://placehold.co/600x400",
//     description:
//       "Marble-finish tile for elegant kitchen interiors that balance luxury and functionality.",
//   },
  {
    id: "kt-anitek-matt",
    link: "/products/kitchen-tiles/anitek-matt",
    name: "Anitek Matt",
    category: "kitchen-tiles",
    size: "4x4",
    thickness: { value: 15, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450111/anitek-matt_rynane.png",
    description:
      "Matte surface kitchen tile designed for a soft, muted look and enhanced stain resistance.",
  },
//   {
//     id: "kt-anitek-super-gloss",
//     link: "/products/kitchen-tiles/anitek-super-gloss",
//     name: "Anitek Super Gloss",
//     category: "kitchen-tiles",
//     size: "2x4",
//     thickness: { value: 9, unit: "mm" },
//     thumbnail: "https://placehold.co/600x400",
//     description:
//       "Super glossy kitchen wall tile reflecting light beautifully and simplifying maintenance.",
//   },
  {
    id: "kt-anitek-wood",
    link: "/products/kitchen-tiles/anitek-wood",
    name: "Anitek Wood",
    category: "kitchen-tiles",
    size: "6x4",
    thickness: { value: 15, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450112/anitek-wood_oys2u2.png",
    description:
      "Wood-inspired tile adding warmth and natural texture to modern kitchen settings.",
  },
  {
    id: "kt-flais-extramax",
    link: "/products/kitchen-tiles/flais-extramax",
    name: "Flais Extramax",
    category: "kitchen-tiles",
    size: "4x4",
    thickness: { value: 20, unit: "mm" },
    thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450112/flais-extramax_bgdkkf.png",
    description:
      "Extra-strong, heat-resistant tile ideal for high-use kitchen walls and counters.",
  },
];