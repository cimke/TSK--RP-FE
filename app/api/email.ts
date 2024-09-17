// TODO: Dunno why this is not working, find out more about next api routing

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  referral_code?: string;
  error?: {
    status: number;
    name: string;
    message: string;
    details: {
      id: string;
      humanReadable: string;
    };
  } | string;
  details?: {
    id: string;
    humanReadable: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('im here')
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required'});
    }

    try {
      // TODO: Replace with nextjs api route
      const strapiResponse = await fetch('http://localhost:1337/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email } }),
      });

      const responseJSON = await strapiResponse.json();

      // error from Strapi if email already exists
      if (responseJSON.error) {
        return res.status(strapiResponse.status).json({
          error: responseJSON.error.message || 'Error occurred',
          details: responseJSON.error.details || {},
        });
      }

      if (responseJSON.referral_code) {
        return res.status(200).json({ referral_code: responseJSON.referral_code });
      } else {
        return res.status(500).json({ error: 'Referral code not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'server Error' });
    }
  }
}
