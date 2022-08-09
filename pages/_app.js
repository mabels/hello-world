import '../styles/globals.css';
const uuid  = require('uuid');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}>
    MyApp --- {uuid.v4()}
    </Component>
}

export default MyApp
