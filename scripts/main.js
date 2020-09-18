import { CarList} from "./Cars/CarsList.js";
import { getCars, useCars } from "./Cars/CarsProvider.js";
import { ColorList } from "./Colors/ColorsList.js";
import { getAvailableColors, useColors } from "./Colors/ColorsProvider.js";


CarList();
ColorList();
getCars();
useCars();
getAvailableColors();
useColors();