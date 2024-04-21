# Under Construction Template
> A simple, minimalistic & cross-device compatible landing page for when your website is under construction

<img src="https://github.com/hendrikdemir/under-construction-template/blob/main/demo.jpg"/>

![license](https://img.shields.io/github/license/hendrikdemir/under-construction-template)
![forks](https://img.shields.io/github/forks/hendrikdemir/under-construction-template)
![issues](https://img.shields.io/github/issues/hendrikdemir/under-construction-template)

This is a very simple landing page built with Tailwind that can be put on display when you're still working on your website. You can completely modify it to your liking and use it in whatever way you like. Contributions to further improve the design, performance and configurability are very welcome.

## Usage

In order to deploy this simple page, you'll need to build it using Webpack, which will generate the `dist` folder.

1. [Use this repository as a template](https://github.com/new?template_name=under-construction-template&template_owner=hendrikdemir) to create your own repository & clone it `git clone https://github.com/<yourusername>/<your-repository-name>`

2. Run `npm run build`

Webpack will now generate a `dist` folder containing `index.html`, `main.js` and the construction image. Copy this to the root folder of your website, and you're done!

## Configuration

While making adjustments to the page, keep in mind that the `dist` folder is only for output purposes. If you want to make adjustments to the page's content, such as text, you must do this in `src/index.html`. Once you're done making adjustments, you'll need to run `npm run build` to get an up-to-date `dist` folder.

### Colors

The colors used on the page can be modified in `tailwind.config.js`.

```yml
colors: {
    'primary': {
        DEFAULT: '#f4a117',
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fce68b',
        '300': '#fbd14e',
        '400': '#fabd25',
        '500': '#f4a117',
        '600': '#d87607',
        '700': '#b3520a',
        '800': '#91400f',
        '900': '#773510',
        '950': '#451a03',
    }
}
```

The value set for `DEFAULT` will be used when you don't provide the color's shade, such as `bg-primary`. More about this can be found at [Tailwind's documentation](https://tailwindcss.com/docs/configuration).

### Fonts

The fonts are provided in `src/style.css` and configured in `tailwind.config.js`.

```css
@import url('https://fonts.googleapis.com/...');
```

```yml
fontFamily: {
    sans: ['Roboto', 'sans-serif'],
    serif: ['Playfair Display', 'serif']
}
```

### Image

The construction site image is configured in `src/index.js`.

```js
import constructionImagePath from './construction.svg'
document.querySelector("img").src = constructionImagePath;
```

If you use a different image and adjust the path, Webpack should automatically pick this up and copy the image over to the `dist` folder.

## Meta

LinkedIn – [@Hendrik Demir](https://www.linkedin.com/in/hendrik-demir/)

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing

1. [Fork](https://github.com/hendrikdemir/under-construction-template/fork) & clone the repository  
`git clone https://github.com/<yourusername>/<your-repository-name>`
2. Create your feature branch  
`git checkout -b feature/superlaser`
3. Commit your changes  
`git commit -am 'Added superlaser'`
4. Push to the branch  
`git push origin feature/superlaser`
5. [Create a new Pull Request](https://github.com/hendrikdemir/under-construction-template/compare)

## Acknowledgements
- [Tailwind CSS 3.4.3](https://tailwindcss.com)
- [Webpack 5.91.0](https://webpack.js.org)
- [PostCSS 8.4.38](https://postcss.org)
- [Font Awesome Free 6.5.2](https://fontawesome.com)
- [Construction vector from Manypixels](https://www.manypixels.co/)
- [Playfair Display and Roboto from Google Fonts](https://fonts.google.com)
- [Mockup from Anthony Boyd Graphics](https://www.anthonyboyd.graphics/mockups/front-view-iphone-x-and-macbook-pro-mockup/)