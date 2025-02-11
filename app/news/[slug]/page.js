import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

export default function NewPage({ params }) {
  const newSlug = params.slug
  const newItem = DUMMY_NEWS.find((news) => news.slug === newSlug)

  if (!newItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        <h1>{newItem.title}</h1>
        <time dateTime={newItem.date}>{newItem.date}</time>
      </header>
      <p>{newItem.content}</p>
    </article>
  )
}
