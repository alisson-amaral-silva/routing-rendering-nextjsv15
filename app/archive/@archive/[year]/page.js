import NewsList from '@/components/NewsList/news-list'
import { getNewsForYear } from '@/lib/utils'

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year
  const news = getNewsForYear(newsYear)

  return <NewsList news={news} />
}
