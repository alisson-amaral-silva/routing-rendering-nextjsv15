import NewsList from '@/components/NewsList/news-list'
import { getAllNews } from '@/lib/backend/news'

export default function NewsPage() {
  const news = getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}
