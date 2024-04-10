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
