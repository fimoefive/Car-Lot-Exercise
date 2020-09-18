import { CarSelect} from "./Cars/CarsList.js";
import { getCars, useCars } from "./Cars/CarsProvider.js";
import { ColorSelect } from "./Colors/ColorsList.js";
import { getAvailableColors, useColors } from "./Colors/ColorsProvider.js";


CarSelect();
ColorSelect();
getCars();
useCars();
getAvailableColors();
useColors();