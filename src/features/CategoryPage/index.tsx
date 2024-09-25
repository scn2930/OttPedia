import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const category = router.query.id;
  console.log(category, 'fdfdf');

  return <div>카테고리</div>;
};

export default CategoryPage;
