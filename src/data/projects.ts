export const projects = [
  {
    id: "01",
    slug: "great-value-sharnam",
    title: "Great Value Sharnam",
    category: "Civil Construction",
    location: "Noida",
    description:
      "A residential construction project focused on structural quality, precise execution, and dependable construction standards.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },
  {
    id: "02",
    slug: "birla-tower",
    title: "Birla Tower",
    category: "Commercial Construction",
    location: "New Delhi",
    description:
      "Commercial construction work delivered with attention to structural integrity, finishing quality, and professional execution.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    featured: false,
  },
  {
    id: "03",
    slug: "op-jindal-global-university",
    title: "O.P. Jindal Global University",
    category: "Institutional Project",
    location: "Sonipat",
    description:
      "Institutional construction executed with a focus on durability, precision, functionality, and high-quality finishing.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=90",
    featured: false,
  },
  {
    id: "04",
    slug: "osho-ashram",
    title: "Osho Ashram",
    category: "Construction & Finishing",
    location: "Sonipat",
    description:
      "Construction and finishing work combining practical execution with refined interior and architectural detailing.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
    featured: false,
  },
  {
    id: "05",
    slug: "chattarpur-farmhouse",
    title: "Chattarpur Farmhouse",
    category: "Renovation & Finishing",
    location: "New Delhi",
    description:
      "Renovation and finishing work focused on transforming existing spaces while maintaining quality and attention to detail.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    featured: false,
  },
  {
    id: "06",
    slug: "residential-development",
    title: "Residential Development",
    category: "Residential Construction",
    location: "Delhi NCR",
    description:
      "Residential construction solutions designed around reliable execution, structural quality, and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
    featured: false,
  },
];

export type Project = (typeof projects)[number];