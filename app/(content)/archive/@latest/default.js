import NewsList from '@/components/NewsList/news-list'
import { getLatestNews } from '@/lib/backend/news'

export default function LatestNewsPage() {
  const latestNews = getLatestNews()
  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  )
}
