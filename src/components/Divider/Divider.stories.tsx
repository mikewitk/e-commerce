import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Divider from "./Divider";

const meta: Meta = {
  title: "Components/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  tags: ["components", "divider"],
  args: { onClick: fn() },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
