interface Image {
  src: string;
  category: string;
  alt: string;
  id: number;
}

const imageList: Image[] = [
  {
    src: "/images/gaming-setup-1-bing-ai.jpg",
    category: "gaming",
    alt: "gaming setup",
    id: 1,
  },
  {
    src: "/images/gaming-setup-2-bing-ai.jpg",
    category: "gaming",
    alt: "dark-white streaming deck",
    id: 2,
  },
  {
    src: "/images/streaming-bing-ai.jpg",
    category: "streaming",
    alt: "streaming equipment",
    id: 3,
  },
  {
    src: "/images/webcam-bing-ai.jpg",
    category: "webcam",
    alt: "webcam",
    id: 4,
  },
  {
    src: "/images/webcam-2-bing-ai.jpg",
    category: "webcam",
    alt: "webcam",
    id: 5,
  },
  {
    src: "/images/gaming-headphones-bing-ai.jpg",
    category: "headphones",
    alt: "headphones",
    id: 6,
  },
];

export default imageList;
