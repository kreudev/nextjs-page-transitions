
![Video](https://printeeds.s3.eu-central-1.amazonaws.com/next-s3-uploads/3a592b73-e6e8-4cad-9867-ac19ad48458a/09c063c7455b89b59ba8830f344da0d4.gif)


## Demo

https://nextjs-page-transitions-web.vercel.app/


# NextJS Page Transitions

nextjs-page-transitions is an npm package designed to help you add smooth and dynamic transitions between pages in your Next.js applications. Built on top of the Next.js framework, this package allows you to easily create engaging page transitions that keep your users engaged and enhance their browsing experience. With nextjs-page-transitions, you can choose from a variety of transition effects, including fade, slide, scale, and more, and customize the animation duration and easing function to fit your specific needs. The package also includes support for page-level transitions, allowing you to animate individual elements as they enter or exit the page. Whether you're building a blog, an e-commerce site, or a complex web application, nextjs-page-transitions can help you take your user interface to the next level. So why wait? Download nextjs-page-transitions today and start creating stunning page transitions for your Next.js projects!
## Installation

Install with npm

```bash
  npm install nextjs-page-transitions
```
    
## Usage/Examples

```javascript
// 📂 pages/_app.js

import NextjsTransition from 'react-infinite-logo-slider'


export default function App({ Component, pageProps }) {
    
    return (
        <NextjsTransition>
            <Component {...pageProps} />
        </NextjsTransition>
    )
}              

```


## Slider props

```javascript
  <NextjsTransition
    animation="default"
    duration={0.5}
    isCustom={false}
    customAnimation={{
        initialState: {
            opacity: 0, // Initial state
        },    
        animateState: {
            opacity: 1, // Page animation
        },
        exitState: {
            // If you want an exit animation, code here.
        },
    }}
  >
    ...
  </NextjsTransition>
```

| Prop | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `animation`      | `string` |  `default` | Options: ["default", "fade", "flip", "scale", "curtain", "circle"]  | 
| `duration`      | `number` |  `0.3` | The speed with which it moves (in seconds) |
| `isCustom`      | `boolean` |  `false` | If you want to pass custom animation |
| `customAnimation`      | `object` |  `null` | Custom animation object ( look up ) |



