import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ken Wheeler",
  about:
    `Technology Artist - Synthwave & Hip Hop Producer - Dad - Grilling Enthusiast.

Note that due to external circumstances, Ken won't be present at the conference and will participate remotely!`,
  image: {
    url: "people/kenw.jpg",
  },
  social: {
    homepage: "",
    twitter: "ken_wheeler",
    github: "kenwheeler",
    linkedin: "kennywheeler",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Allenwood",
  },
  tagline: "Made slick carousel, now makes beats",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
