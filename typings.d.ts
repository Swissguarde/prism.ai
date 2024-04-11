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
  _type: string;
  style: "normal";
  _key: string;
  children: Child[];
}

interface BentoItem {
  bentoHeader: string;
  bentoDescription: string;
  bentoImage: Image;
  wide?: boolean;
  _key: string;
}

interface BentoProps {
  bento: BentoItem[];
  _type: string;
  title: string;
  _updatedAt: string;
  highlighted: string;
  _createdAt: string;
  _rev: string;
  description: Description[];
  _id: string;
}

interface Child {
  _type: string;
  _key: string;
  text: string;
  marks: [];
}

interface ShowcaseProps {
  title: string;
  subtitle: string;
  showcaseButton: string;
  showcaseImage: {
    asset: {
      _ref: string;
    };
  };
  showcaseTitle: string;
  _id: string;
  showcaseDescription: string;
}
