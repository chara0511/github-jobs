// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.search || req.query.location || req.query.full_time) {
    await fetch(
      `https://jobs.github.com/positions.json?search=${req.query.search}&location=${req.query.location}&full_time=${req.query.full_time}`,
    )
      .then((res) => res.json())
      .then((data) => res.json(data))
      .catch((err) => res.status(400).send(`An Error occurred: ${err.message}`))

    return
  }

  await fetch(`https://jobs.github.com/positions.json`)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).send(`An Error occurred: ${err.message}`))
}
