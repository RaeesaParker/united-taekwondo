import React from "react";

import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Homepage } from "./Pages/HomePage";
import { BeltsPage } from "./Pages/Taekwondo/BeltsPage";
import { TaekwondoPage } from "./Pages/Taekwondo/TaekwondoPage";
import { TrainingPage } from "./Pages/TrainingPage";

export const webRoutes = [
  { path: "/", element: ( < Homepage/> ) }, 
  { path: "/about", element:( <AboutPage />) }, 
  { path: "/training", element:( <TrainingPage />) },
  { path: "/contact", element:( <ContactPage />) },
  { path: "/taekwondo", element:( <TaekwondoPage />) },
  { path: "/taekwondo/belts", element:( <BeltsPage />) }

];
