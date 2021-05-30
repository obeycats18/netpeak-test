import Icon01d from "@icons/weather/01d.svg";
import Icon01n from "@icons/weather/01n.svg";
import Icon02d from "@icons/weather/02d.svg";
import Icon02n from "@icons/weather/02n.svg";
import Icon03d from "@icons/weather/03d.svg";
import Icon03n from "@icons/weather/03n.svg";
import Icon04d from "@icons/weather/04d.svg";
import Icon04n from "@icons/weather/04n.svg";
import Icon09d from "@icons/weather/09d.svg";
import Icon09n from "@icons/weather/09n.svg";
import Icon10d from "@icons/weather/10d.svg";
import Icon10n from "@icons/weather/10n.svg";
import Icon11d from "@icons/weather/11d.svg";
import Icon11n from "@icons/weather/11n.svg";
import Icon13d from "@icons/weather/13d.svg";
import Icon13n from "@icons/weather/13n.svg";
import Icon50d from "@icons/weather/50d.svg";
import Icon50n from "@icons/weather/50n.svg";

const iconsForCode = [
  { code: "01d", icon: Icon01d },
  { code: "01n", icon: Icon01n },
  { code: "02d", icon: Icon02d },
  { code: "02n", icon: Icon02n },
  { code: "03d", icon: Icon03d },
  { code: "03n", icon: Icon03n },
  { code: "04d", icon: Icon04d },
  { code: "04n", icon: Icon04n },
  { code: "09d", icon: Icon09d },
  { code: "09n", icon: Icon09n },
  { code: "10d", icon: Icon10d },
  { code: "10n", icon: Icon10n },
  { code: "11d", icon: Icon11d },
  { code: "11n", icon: Icon11n },
  { code: "13d", icon: Icon13d },
  { code: "13n", icon: Icon13n },
  { code: "50d", icon: Icon50d },
  { code: "50n", icon: Icon50n },
];

export const getIconByCode = (code: string) => {
  return iconsForCode.find((el) => el.code === code)?.icon;
};
