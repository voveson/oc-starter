import { dom, library } from '@fortawesome/fontawesome-svg-core';

// Import Icons
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

// Add Icons to Library
library.add(
  faBars,
  faFacebookF,
  faInstagram,
  faPinterest,
  faSearch,
  faTwitter,
  faYoutube,
);

// Replace `<i>` tags with inline SVG icons
dom.i2svg();

window.dom = dom;
