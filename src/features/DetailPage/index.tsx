import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const DetailPage = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log(req.query);

  const { id } = req.query;
  res.status(200).json({ name: 'John Doe' });
  return <div>디테일페이지</div>;
};
export default DetailPage;
