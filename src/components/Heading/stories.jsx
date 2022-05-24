import { Heading } from ".";

export default {
  title: 'Heading', //Titulo que vai aparecer no storybook
  component: Heading,
  args:{
    children:'Anderson',
  },

  argTypes:{
    children:{type:'string'},
  },

parameters:{
  backgrounds:{
    default:'dark',
  },

},

};

export const Template = (args) => <Heading {...args}/>;
