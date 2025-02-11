import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
  const newSlug = params.slug
  const newItem = DUMMY_NEWS.find((news) => news.slug === newSlug)

  if (!newItem) {
    notFound()
  }
  return (
    <div className="fullscreen-image">
      <img alt={newItem.title} src={`/images/news/${newItem.image}`} />
    </div>
  )
}
