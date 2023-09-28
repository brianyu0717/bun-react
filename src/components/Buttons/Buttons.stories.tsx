import type { Meta, StoryObj } from '@storybook/react';
import Icon1 from "@mui/icons-material/AccessAlarms";
import Icon2 from "@mui/icons-material/Battery3BarSharp";


import Buttons  from './Buttons';

const meta = {
  title: 'My Components/Buttons',
  component: Buttons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], // args auto-inferred by autodocs, included with @storybook/addon-essentials, doesn't quite work for the icon arg
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    icon: <Icon1 />
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    icon: <Icon2/>
  }
};