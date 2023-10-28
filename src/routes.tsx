import React from "react";

import { Homepage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { TrainingPage } from "./Pages/TrainingPage";
import { ContactPage } from "./Pages/ContactPage";
import { TaekwondoPage } from "./Pages/Taekwondo/TaekwondoPage";
import { BeltsPage } from "./Pages/Taekwondo/BeltsPage";

export const webRoutes = [
  { path: "/", element: ( < Homepage/> ) }, 
  { path: "/about", element:( <AboutPage />) }, 
  { path: "/training", element:( <TrainingPage />) },
  { path: "/contact", element:( <ContactPage />) },
  { path: "/taekwondo", element:( <TaekwondoPage />) },
  { path: "/taekwondo/belts", element:( <BeltsPage />) }

];
