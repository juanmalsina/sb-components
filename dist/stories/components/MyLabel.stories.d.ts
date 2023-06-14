import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, size, allCaps, color, fontColor, }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Terciary: Story;
export declare const UpperCase: Story;
