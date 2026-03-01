import WeatherStatus from '../components/WeatherStatus';

export default {
  title: 'WeatherStatus Component',
  component: WeatherStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    infoSize: { control: 'select', options: ['large', 'medium', 'small'] },
  },
  args: {
    infoSize: 'large',
  },
};

export const Large = {};

export const Medium = {
  args: {
    infoSize: 'medium',
  },
};

export const Small = {
  args: {
    infoSize: 'small',
  },
};

