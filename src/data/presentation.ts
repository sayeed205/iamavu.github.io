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
    "welcome to avantika's wanderings, where she dwells into anything and everything computer security. enjoy your stay <3",
  socials: [
    {
      label: "x",
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
