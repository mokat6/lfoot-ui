import "../src/index.css"; // or wherever your tailwind file is

import type { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.normal,
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
        // 👇 Add your own
        // maroon: { name: "Maroon", value: "#400" },
      },
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color. small letter maroon, dark, etc
    backgrounds: { value: "dark" },
  },
  decorators: [
    //  Add .dark on the root iframe element. Based on selected background
    (Story, context) => {
      const isDark = context.globals.backgrounds.value === "dark";
      document.documentElement.classList.toggle("dark", isDark);
      return Story();
    },
  ],
};

export default preview;
