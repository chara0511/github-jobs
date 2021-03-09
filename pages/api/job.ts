import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.id) {
    await fetch(`https://jobs.github.com/positions/${req.query.id}.json`)
      .then((res) => res.json())
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).send(`An Error occurred: ${err.message}`))
  }
}
