import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SalesTopBar from "./SalesTopBar";

const meta: Meta = {
  title: "Components/SalesTopBar",
  component: SalesTopBar,
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  tags: ["components", "header"],
  args: { onClick: fn() },
} satisfies Meta<typeof SalesTopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
