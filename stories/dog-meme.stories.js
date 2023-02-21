import { html } from 'lit';
import '../src/dog-meme.js';

export default {
  title: 'DogMeme',
  component: 'dog-meme',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <dog-meme
      style="--dog-meme-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </dog-meme>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
