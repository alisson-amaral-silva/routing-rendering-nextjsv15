import { getNewsItem } from '@/lib/backend/news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
  const newSlug = params.slug
  const newItem = getNewsItem(newSlug)

  if (!newItem) {
    notFound()
  }
  return (
    <div className="fullscreen-image">
      <img alt={newItem.title} src={`/images/news/${newItem.image}`} />
    </div>
  )
}
