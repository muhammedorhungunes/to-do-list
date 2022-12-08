import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'


const Detail: NextPage = () => {
  const router  = useRouter();

  const newsId = router.query.newsId ;

  return (<h1>The Detail Page</h1>
  )
}

export default Detail