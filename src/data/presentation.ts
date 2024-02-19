type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "imailavantika@gmail.com",
  title: "hello, friend",
  profile: "public/profile.png",
  description:
    "she dwells into anything and everything computer security",
  socials: [
    {
      label: "x/twitter",
      link: "https://twitter.com/iamavu",
    },
    {
      label: "bento",
      link: "https://bento.me/iamavu",
    },
    {
      label: "github",
      link: "https://github.com/iamavu",
    },
  ],
};

export default presentation;
