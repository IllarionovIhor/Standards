import { fn } from 'storybook/test';

import SendEmail from '../components/SendEmail';


import "primereact/resources/themes/lara-light-cyan/theme.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'SendEmail Component',
  component: SendEmail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    notificationSeverity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
  },
  args: { notificationSeverity: 'success', skipApi: true },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
  args: {
    notificationSeverity: 'success',
  },
};

export const Info = {
  args: {
    notificationSeverity: 'info',
  },
};

export const Error = {
  args: {
    notificationSeverity: 'error',
  },
};

export const Warning = {
  args: {
    notificationSeverity: 'warn',
  },
};

