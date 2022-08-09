import '../styles/globals.css';
import useSWR from 'swr'
const uuid  = require('uuid');

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ?
  'http://localhost:3000' :
  'https://meno.adviser.com';

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
  return fetch(`${server}/api/hello`).then((res) => {
  return res.json()
})
}

export function Uuid() {
  const bla = useSWR('/api/hello', getArticleFromAPI)
  return bla.data?.map(i => <><div>{i}</div><br /></>)
}
export default MyApp;