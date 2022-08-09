// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req, res) {
  const ret =      Object.entries(this||globalThis||{}).map((a) => {
         return [a[0], a[1]+''].join(":")
      })
  console.log(ret)
  res.status(200).json(
    ret
  )
}
