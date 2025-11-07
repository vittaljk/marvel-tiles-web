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
    // ===== ELEVATION TILES =====
    {
        id: "et-stone-textured",
        link: "/products/elevation-tiles/stone-textured",
        name: "Stone Textured",
        category: "elevation-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "Natural stone-inspired textured elevation tile for sophisticated exterior walls.",
    },
    {
        id: "et-rustic-charm",
        link: "/products/elevation-tiles/rustic-charm",
        name: "Rustic Charm",
        category: "elevation-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "Rustic-styled elevation tile perfect for creating warmth in outdoor spaces.",
    },
    {
        id: "et-modern-slate",
        link: "/products/elevation-tiles/modern-slate",
        name: "Modern Slate",
        category: "elevation-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Contemporary slate-look elevation tiles for sleek exterior designs.",
    },
    {
        id: "et-brick-elegance",
        link: "/products/elevation-tiles/brick-elegance",
        name: "Brick Elegance",
        category: "elevation-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "Classic brick-pattern elevation tiles with a modern twist.",
    },
    {
        id: "et-mountain-ridge",
        link: "/products/elevation-tiles/mountain-ridge",
        name: "Mountain Ridge",
        category: "elevation-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Textured elevation tiles inspired by mountain landscapes.",
    },
    {
        id: "et-urban-concrete",
        link: "/products/elevation-tiles/urban-concrete",
        name: "Urban Concrete",
        category: "elevation-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "Industrial-style concrete-look elevation tiles for modern buildings.",
    },
    {
        id: "et-desert-sand",
        link: "/products/elevation-tiles/desert-sand",
        name: "Desert Sand",
        category: "elevation-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Sand-textured elevation tiles perfect for warm climate architecture.",
    },
    {
        id: "et-forest-wood",
        link: "/products/elevation-tiles/forest-wood",
        name: "Forest Wood",
        category: "elevation-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "Wood-grain elevation tiles bringing natural aesthetics to exterior walls.",
    },
    {
        id: "et-crystal-stone",
        link: "/products/elevation-tiles/crystal-stone",
        name: "Crystal Stone",
        category: "elevation-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "Premium stone-effect elevation tiles with crystalline patterns.",
    },
    // ===== FULL BODY TILES =====
    {
        id: "fb-premium-granite",
        link: "/products/full-body-tiles/premium-granite",
        name: "Premium Granite",
        category: "full-body-tiles",
        size: "2x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "Full-body granite tiles with consistent color and pattern throughout their thickness.",
    },
    {
        id: "fb-marble-elite",
        link: "/products/full-body-tiles/marble-elite",
        name: "Marble Elite",
        category: "full-body-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "Luxurious full-body marble tiles with deep, rich patterns that run through the entire tile.",
    },
    {
        id: "fb-stone-fusion",
        link: "/products/full-body-tiles/stone-fusion",
        name: "Stone Fusion",
        category: "full-body-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Contemporary full-body tiles combining multiple stone textures for unique aesthetics.",
    },
    {
        id: "fb-porcelain-plus",
        link: "/products/full-body-tiles/porcelain-plus",
        name: "Porcelain Plus",
        category: "full-body-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "High-performance full-body porcelain tiles for maximum durability and wear resistance.",
    },
    {
        id: "fb-onyx-supreme",
        link: "/products/full-body-tiles/onyx-supreme",
        name: "Onyx Supreme",
        category: "full-body-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Premium full-body tiles featuring striking onyx patterns throughout their composition.",
    },
    {
        id: "fb-industrial-steel",
        link: "/products/full-body-tiles/industrial-steel",
        name: "Industrial Steel",
        category: "full-body-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "Modern full-body tiles with metallic industrial finish perfect for contemporary spaces.",
    },
    {
        id: "fb-travertine-deluxe",
        link: "/products/full-body-tiles/travertine-deluxe",
        name: "Travertine Deluxe",
        category: "full-body-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Classic full-body travertine tiles with consistent natural stone appearance.",
    },
    {
        id: "fb-quartzite-pro",
        link: "/products/full-body-tiles/quartzite-pro",
        name: "Quartzite Pro",
        category: "full-body-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "Professional-grade full-body quartzite tiles for high-traffic commercial spaces.",
    },
    {
        id: "fb-basalt-elite",
        link: "/products/full-body-tiles/basalt-elite",
        name: "Basalt Elite",
        category: "full-body-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "Premium full-body basalt tiles offering superior strength and elegant dark tones.",
    },
    // ===== COLOUR BODY TILES =====
    {
        id: "cb-azure-blend",
        link: "/products/colour-body-tiles/azure-blend",
        name: "Azure Blend",
        category: "colour-body-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "Vibrant blue-toned colour body tiles with subtle variations for modern interiors.",
    },
    {
        id: "cb-terra-fusion",
        link: "/products/colour-body-tiles/terra-fusion",
        name: "Terra Fusion",
        category: "colour-body-tiles",
        size: "4x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "Earth-toned colour body tiles featuring rich terracotta hues and natural patterns.",
    },
    {
        id: "cb-emerald-wave",
        link: "/products/colour-body-tiles/emerald-wave",
        name: "Emerald Wave",
        category: "colour-body-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Deep green colour body tiles with wave-like patterns for elegant spaces.",
    },
    {
        id: "cb-pearl-lustre",
        link: "/products/colour-body-tiles/pearl-lustre",
        name: "Pearl Lustre",
        category: "colour-body-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "Pearlescent white colour body tiles with subtle iridescent effects.",
    },
    {
        id: "cb-sunset-glow",
        link: "/products/colour-body-tiles/sunset-glow",
        name: "Sunset Glow",
        category: "colour-body-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Warm-toned colour body tiles featuring sunset-inspired gradients.",
    },
    {
        id: "cb-platinum-grey",
        link: "/products/colour-body-tiles/platinum-grey",
        name: "Platinum Grey",
        category: "colour-body-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "Sophisticated grey colour body tiles with metallic undertones.",
    },
    {
        id: "cb-ruby-shimmer",
        link: "/products/colour-body-tiles/ruby-shimmer",
        name: "Ruby Shimmer",
        category: "colour-body-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Deep red colour body tiles with shimmering surface effects.",
    },
    {
        id: "cb-amber-grain",
        link: "/products/colour-body-tiles/amber-grain",
        name: "Amber Grain",
        category: "colour-body-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "Golden-hued colour body tiles with subtle grain patterns.",
    },
    {
        id: "cb-sapphire-frost",
        link: "/products/colour-body-tiles/sapphire-frost",
        name: "Sapphire Frost",
        category: "colour-body-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "Deep blue colour body tiles with frosted finish and crystalline effects.",
    },
    // ===== VITRIFIED TILES =====
    {
        id: "vt-crystal-shine",
        link: "/products/vetrified-tiles/crystal-shine",
        name: "Crystal Shine",
        category: "vetrified-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "High-gloss vitrified tiles with crystal-clear finish and exceptional durability.",
    },
    {
        id: "vt-marble-luxe",
        link: "/products/vetrified-tiles/marble-luxe",
        name: "Marble Luxe",
        category: "vetrified-tiles",
        size: "4x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "Premium vitrified tiles replicating luxury marble with enhanced strength.",
    },
    {
        id: "vt-nano-polish",
        link: "/products/vetrified-tiles/nano-polish",
        name: "Nano Polish",
        category: "vetrified-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Nano-polished vitrified tiles offering supreme shine and stain resistance.",
    },
    {
        id: "vt-royal-granite",
        link: "/products/vetrified-tiles/royal-granite",
        name: "Royal Granite",
        category: "vetrified-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "Granite-look vitrified tiles combining elegance with exceptional hardness.",
    },
    {
        id: "vt-platinum-gloss",
        link: "/products/vetrified-tiles/platinum-gloss",
        name: "Platinum Gloss",
        category: "vetrified-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Ultra-glossy vitrified tiles with mirror-like finish and superior durability.",
    },
    {
        id: "vt-rustic-matt",
        link: "/products/vetrified-tiles/rustic-matt",
        name: "Rustic Matt",
        category: "vetrified-tiles",
        size: "3x3",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "Matt-finish vitrified tiles with rustic appeal and enhanced grip.",
    },
    {
        id: "vt-mirror-elite",
        link: "/products/vetrified-tiles/mirror-elite",
        name: "Mirror Elite",
        category: "vetrified-tiles",
        size: "2x4",
        thickness: { value: 9, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Mirror-finish vitrified tiles for luxurious interior spaces.",
    },
    {
        id: "vt-wooden-grace",
        link: "/products/vetrified-tiles/wooden-grace",
        name: "Wooden Grace",
        category: "vetrified-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "Wood-effect vitrified tiles combining natural aesthetics with vitrified strength.",
    },
    {
        id: "vt-supreme-stone",
        link: "/products/vetrified-tiles/supreme-stone",
        name: "Supreme Stone",
        category: "vetrified-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "Stone-inspired vitrified tiles offering unmatched durability and elegance.",
    },
    // ===== GVT AND PGVT TILES =====
    {
        id: "gp-imperial-marble",
        link: "/products/gvt-and-pgvt-tiles/imperial-marble",
        name: "Imperial Marble",
        category: "gvt-and-pgvt-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-gritex_g8mfas.png",
        description: "Premium GVT tiles replicating rare marble with exceptional clarity and depth.",
    },
    {
        id: "gp-crystal-quartz",
        link: "/products/gvt-and-pgvt-tiles/crystal-quartz",
        name: "Crystal Quartz",
        category: "gvt-and-pgvt-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/antiek-carving_iwvtsc.png",
        description: "PGVT tiles featuring crystalline patterns with superior scratch resistance.",
    },
    {
        id: "gp-royal-onyx",
        link: "/products/gvt-and-pgvt-tiles/royal-onyx",
        name: "Royal Onyx",
        category: "gvt-and-pgvt-tiles",
        size: "3x3",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450088/antiek-glossy_ahanzd.png",
        description: "Luxurious GVT tiles with deep onyx patterns and exceptional polish.",
    },
    {
        id: "gp-platinum-travertine",
        link: "/products/gvt-and-pgvt-tiles/platinum-travertine",
        name: "Platinum Travertine",
        category: "gvt-and-pgvt-tiles",
        size: "6x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-high-glossy_v0spny.png",
        description: "PGVT tiles showcasing premium travertine aesthetics with enhanced durability.",
    },
    {
        id: "gp-metallic-fusion",
        link: "/products/gvt-and-pgvt-tiles/metallic-fusion",
        name: "Metallic Fusion",
        category: "gvt-and-pgvt-tiles",
        size: "4x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-marvello_rdx8va.png",
        description: "Contemporary GVT tiles with metallic finish and superior stain resistance.",
    },
    {
        id: "gp-granite-supreme",
        link: "/products/gvt-and-pgvt-tiles/granite-supreme",
        name: "Granite Supreme",
        category: "gvt-and-pgvt-tiles",
        size: "3x3",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450085/anitek-matt_ewvk6h.png",
        description: "PGVT tiles with authentic granite appearance and exceptional load-bearing capacity.",
    },
    {
        id: "gp-luxury-sandstone",
        link: "/products/gvt-and-pgvt-tiles/luxury-sandstone",
        name: "Luxury Sandstone",
        category: "gvt-and-pgvt-tiles",
        size: "2x4",
        thickness: { value: 12, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450086/antiek-super-gloss_khjemo.png",
        description: "Premium GVT tiles featuring refined sandstone textures with enhanced durability.",
    },
    {
        id: "gp-wooden-elite",
        link: "/products/gvt-and-pgvt-tiles/wooden-elite",
        name: "Wooden Elite",
        category: "gvt-and-pgvt-tiles",
        size: "6x4",
        thickness: { value: 15, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/antiek-wood_hbhnon.png",
        description: "PGVT tiles with premium wood grain patterns and exceptional wear resistance.",
    },
    {
        id: "gp-diamond-slate",
        link: "/products/gvt-and-pgvt-tiles/diamond-slate",
        name: "Diamond Slate",
        category: "gvt-and-pgvt-tiles",
        size: "4x4",
        thickness: { value: 20, unit: "mm" },
        thumbnail: "https://res.cloudinary.com/duy0961om/image/upload/v1762450087/flais-extamax_uupmu5.png",
        description: "High-end GVT tiles with slate finish and diamond-like hardness.",
    },
];