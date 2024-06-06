import { DealsComponent } from './../pages/home/components/deals/deals.component';
export interface Product {
  id: string;
  name: string;
  price: number;
  thumbUrl: string;
  imageUrl: string;
  description: string;
}

// The Products Data
export const PRODUCTS: Product[] = [
  {
    id: '8347836c-35db-4307-ac5d-cbdf19a9a50c',
    name: 'Lenovo X1 Carbon 6th Gen',
    description: '',
    price: 102,
    thumbUrl:
    'assets/images/products/4.png',
    imageUrl: 'assets/images/products/4.png',
  },
  {
    id: 'f8c2cc34-ddb7-46ec-96ee-e27d1765df10',
    name: 'Dell XPS 13',
    description: '',
    price: 115,
    thumbUrl:
    'assets/images/products/3.png',
    imageUrl: 'assets/images/products/3.png',
  },
  {
    id: '2927b969-1c97-4a36-b4ab-a0777d8690e2',
    name: 'HP Spectre x360',
    description: '',
    price: 114,
    thumbUrl:
    'assets/images/products/2.png',
    imageUrl: 'assets/images/products/2.png',
  },
  {
    id: '57ba7441-8bea-4340-9f49-dc369d108cf7',
    name: 'HP Elite Dragonfly',
    description: '',
    price: 105,
    thumbUrl:
    'assets/images/products/1.png',
    imageUrl: 'assets/images/products/1.png',
  },
  {
    id: '552809ab-7ea3-4e48-be23-3c7c53219284',
    name: 'HP Envy x360',
    description: '',
    price: 119,
    thumbUrl:
    'assets/images/products/4.png',
    imageUrl: 'assets/images/products/4.png',
  },
  {
    id: '893deaf7-5224-4702-9ba6-4fc4c52bed22',
    name: 'Alienware Area-51m',
    description: '',
    price: 109.99,
    thumbUrl:
    'assets/images/products/3.png',
    imageUrl: 'assets/images/products/3.png',
  },
  {
    id: '26917fd7-61c3-41d7-b7cd-3c823bae77d2',
    name: 'HP Omni 220 Quad',
    description: '',
    price: 120,
    thumbUrl:
    'assets/images/products/2.png',
    imageUrl: 'assets/images/products/2.png',
  },
  {
    id: '30e575f5-8997-4c34-aa44-88af74452db2',
    name: 'Asus rog strix',
    description: '',
    price: 110,
    thumbUrl:
    'assets/images/products/1.png',
    imageUrl: 'assets/images/products/1.png',
  },
]
