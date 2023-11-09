import watchVaultImage from "../assets/ProjectsImages/watch-vault.png";
import bankAppImage from "../assets/ProjectsImages/bank-app.png";
import osfDigitalImage from "../assets/ProjectsImages/internship-osf.png";
import prettyMansionImage from "../assets/ProjectsImages/pretty-mansion.png";

export const projectData = [
  {
    id: 0,
    image: watchVaultImage,
    title: "Watch Vault",
    usage: "React - Node - Express - MongoDb",
    gitHub: "https://github.com/razvanghr/Watch-Vault",
    live: "https://watchvault.netlify.app/",
    info: `
    An application where you can store all your favorite films and series, and more.
    You can find out data about the movie/series you are going to see.`,
  },

  {
    id: 1,
    image: bankAppImage,
    title: "Bank App",
    usage: "React - Node - Express - MySQL",
    gitHub: "https://github.com/razvanghr/BankApp-Fullstack",
    live: "https://www.youtube.com/watch?v=tzaJjucctt8&ab_channel=RazvanGhilea",
    info: `A banking application where you can open an account and make transactions.`,
  },

  {
    id: 2,
    image: prettyMansionImage,
    title: "Pretty Mansion Page",
    usage: "React - SCSS",
    gitHub: "https://github.com/razvanghr/prettymansion-page",
    live: "https://prettymansion.netlify.app/",
    info: `A landing page made to present a small local restaurant.`,
  },

  {
    id: 3,
    image: osfDigitalImage,
    title: "OSF Intern Project",
    usage: "React - SCSS - Express - MongoDb",
    gitHub: "https://github.com/razvanghr/Internship-OSF",
    live: "https://internshiposf-rg.netlify.app/",
    info: `Project carried out during the internship.`,
  },
];
