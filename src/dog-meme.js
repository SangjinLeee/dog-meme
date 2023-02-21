import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class DogMeme extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      meme-maker {
  --meme-maker-font-size: 12px;
  --meme-maker-font-size-medium: 24px;
  --meme-maker-font-size-small: 16px;
  width: 200px;

  .button{
   padding: 5px;
   color: blue;
}

.button:hover{
  background-color: orange;
}

.button:focus {
  background-color: orange; 
}


.all{
  border-width: 5px;
  width: 400px;
  max-width: 500px;
  margin: auto;
  margin-top: 10px;
}

.title{
  text-align: center;
  font-size: 40px;
}

.name{
  text-align: center;
}
.content{
   text-align: center;
}
img {
  width: 300px;
}

p {
/*   text-align: left;  */
  text-indent: 5%;
  font-size: 18px;
}

.detailsButton {
  margin: 12px;
  position: center; 
  color: blue;
}

  @media (min-width: 500px) and (max-width: 800px) {
    
    .detailsButton {
      display: none;
    }
}

@media (max-width: 500px) {
  .all{
    transform: scale(0.8);
  }
}

}
      
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <section class="card">
  <header class="name">
    <h1 id="title" class="title"> Coffee </h1>
    </header>
  <p>
    "Good morning, I like coffeeeeee" </p>
  <section class="content">
    <meme-maker image-url="https://thumbor.bigedition.com/husky-good-morning-meme/pH3EqF8t0ug2q1rb8xQUIfy_TIM=/800x739/filters:format(webp):quality(80)/granite-web-prod/48/f0/48f096f394fe421fa43128fa65a1f2a1.jpeg"
top-text="dog" bottom-text="coffee"></meme-maker>
</section>
</section>
    `;
  }
}

customElements.define('dog-meme', DogMeme);



/**
 * `meme-maker`
 * Meme all the things
 *
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 *  - go forth and make dank memes yo
 * @element meme-maker
 */
class MemeMaker extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        * {
          box-sizing: border-box;
        }
        figure {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 20px;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: auto;
        }
        .top-text,
        .bottom-text {
          position: absolute;
          left: 0;
          width: 100%;
          padding: 3% 2%;
          text-align: center;
          text-transform: uppercase;
          font-weight: 900;
          font-family: "Impact", "Arial Black", "sans serif";
          line-height: 1.2;
          font-size: var(--meme-maker-font-size, 36px);
          color: white;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
          letter-spacing: 2px;
        }
        .top-text {
          top: 0;
        }
        .bottom-text {
          bottom: 0;
        }
        @media (max-width: 800px) {
          .top-text,
          .bottom-text {
            font-size: var(--meme-maker-font-size-medium, 20px);
          }
        }
        @media (max-width: 600px) {
          .top-text,
          .bottom-text {
            font-size: var(--meme-maker-font-size-small, 20px);
          }
        }
      `,
    ];
  }
  render() {
    return html`
      <figure>
        <img
          loading="lazy"
          src="${this.imageUrl}"
          alt="${this.alt || ""}"
          aria-describedby="${this.describedBy || ""}"
        />
        <figcaption class="top-text">${this.topText}</figcaption>
        <figcaption class="bottom-text">${this.bottomText}</figcaption>
      </figure>

      


    
</section>
</section>
    `;
  }
  static get tag() {
    return "meme-maker";
  }
  constructor() {
    super();
    this.alt = "";
  }
  static get properties() {
    return {
      /**
       * Alt data passed down to appropriate tag
       */
      alt: {
        type: String,
      },
      /**
       * Aria-describedby data passed down to appropriate tag
       */
      describedBy: {
        type: String,
        attribute: "described-by",
      },
      /**
       * url to the meme image
       */
      imageUrl: {
        type: String,
        attribute: "image-url",
        reflect: true,
      },
      /**
       * Text on top of the image.
       */
      topText: {
        type: String,
        attribute: "top-text",
        reflect: true,
      },
      /**
       * Bottom text for the image.
       */
      bottomText: {
        type: String,
        attribute: "bottom-text",
        reflect: true,
      },
    };
  }
}
customElements.define(MemeMaker.tag, MemeMaker);
export { MemeMaker };