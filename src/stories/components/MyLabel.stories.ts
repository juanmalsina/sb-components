import type { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    fontColor: { control: "color" },
  },
  tags: ["UIcustom"],
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "secondary",
  },
};

export const Terciary: Story = {
  args: {
    label: "Hola mundo",
    size: "normal",
    color: "tertiary",
  },
};

export const UpperCase: Story = {
  args: {
    label: "Hola mundo",
    size: "normal",
    allCaps: true,
  },
};
