// src/components/MessageList/MessageList1.stories.tsx
import type { Decorator, Meta, StoryObj } from "@storybook/react-vite";
import MessageList1 from "./MessageList1";

const bigPaddingDecorator: Decorator = (Story) => {
  return (
    <div style={{ padding: "100px", border: "2px dashed red" }}>
      <Story />
    </div>
  );
};

// Meta object
const meta: Meta<typeof MessageList1> = {
  title: "Components/MessageList1",
  component: MessageList1,
  tags: ["autodocs"], // optional: generates props table automatically
  decorators: [bigPaddingDecorator],
};

export default meta;
type Story = StoryObj<typeof MessageList1>;

// Default story
export const Default: Story = {};
