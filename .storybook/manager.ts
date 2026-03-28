import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

// inline setting theme. Overriding NORMAL. normal auto detects light/dark based on system preferences.
// Define theme in file. TS complains when you try `base: normal`. Kinda need to pick light or dark...
addons.setConfig({
  theme: { ...themes.normal, brandTitle: "LFooT UI lib", brandUrl: "/", brandImage: "/logo-sm.webp" },
});
