interface Button {
  isFeatured: boolean;
  buttonText: string;
  buttonLink: string;
  _key: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}

interface NavigationProps {
  buttons: Button[];
  _createdAt: string;
  _rev: string;
  _type: string;
  logo: Image;
  _id: string;
  title: string;
  _updatedAt: string;
}

interface Asset {
  // Add properties of Asset here
}

interface Slug {
  current: string;
  _type: string;
}

interface HeroProps {
  buttons: Button[];
  _createdAt: string;
  _id: string;
  title: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  banner: {
    asset: string;
    _type: "reference";
  };
  description: Description[];
  slug: Slug;
}

interface Description {
  _key: string;
  _type: string;
  children: Child[];
  style: "normal";
}

interface Child {
  _type: string;
  _key: string;
  text: string;
  marks: [];
}
