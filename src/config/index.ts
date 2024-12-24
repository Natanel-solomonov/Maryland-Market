export const PRODUCT_CATEGORIES = [
  {
    label: "Electronics",
    value: "electronics" as const,
    featured: [
      {
        name: "Laptops & Tablets",
        href: "#",
        imageSrc: "/nav/LaptopTablet.png",
      },
      {
        name: "Audio & Headphones",
        href: "#",
        imageSrc: "/Nav/Audio.png",
      },
      {
        name: "Smartphones & Accessories",
        href: "#",
        imageSrc: "/nav/Phone.png",
      },
    ],
  },
  {
    label: "Transportation",
    value: "books_academic_supplies" as const,
    featured: [
      {
        name: "E-Scooters",
        href: "#",
        imageSrc: "/Nav/Scooter.png",
      },
      {
        name: "Bikes",
        href: "#",
        imageSrc: "/Nav/Bike.png",
      },
      {
        name: "Other",
        href: "#",
        imageSrc: "/Nav/OneWheel.png",
      },
    ],
  },
  // {
  //   label: "Dorm Essentials",
  //   value: "furniture_dorm_essentials" as const,
  //   featured: [
  //     {
  //       name: "Room Decor",
  //       href: "#",
  //       imageSrc: "/nav/furniture/decor.jpg",
  //     },
  //     {
  //       name: "Storage & Organization",
  //       href: "#",
  //       imageSrc: "/nav/furniture/storage.jpg",
  //     },
  //     {
  //       name: "Bedding",
  //       href: "#",
  //       imageSrc: "/nav/furniture/bedding.jpg",
  //     },
  //   ],
  // },
  {
    label: "Clothing",
    value: "clothing" as const,
    featured: [
      {
        name: "Jackets/Hoodies",
        href: "#",
        imageSrc: "/Nav/Top.png",
      },
      {
        name: "Shirts",
        href: "#",
        imageSrc: "/Nav/Shirt.png",
      },
      {
        name: "Bottoms",
        href: "#",
        imageSrc: "/Nav/Pants.png",
      },
    ],
  },
];
