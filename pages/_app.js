import '../styles/globals.css';
import useSWR from 'swr'
const uuid  = require('uuid');

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ?
  'http://localhost:3000' :
  'https://meno.abels.com';

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const article = await getArticleFromAPI()
  return {
    props: {
      fallback: {
        '/api/hello': article
      }
    }
  }
}

function MyApp({ Component, pageProps }) {
  const my = {...pageProps, uuid: uuid.v4()};
  return <Component {...my} />;
}

export const getArticleFromAPI = (url) => {
  console.log("XXXXXX", url)
  return fetch(`${server}/api/hello`).then((res) => {
  console.log(">>>>",res)
  return res.json()
})
}

export function Uuid() {
  console.log("yyyyyyyy")
  const bla = useSWR('/api/hello', getArticleFromAPI)
  console.log("x", bla, "y", bla.data)

  return <div>{bla.data?.name}</div>;
}

export default MyApp
