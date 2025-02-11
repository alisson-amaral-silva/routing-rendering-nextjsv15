import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
  const newSlug = params.slug
  const newItem = DUMMY_NEWS.find((news) => news.slug === newSlug)

  if (!newItem) {
    notFound()
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            style={{ width: '100%', height: '100%' }}
            alt={newItem.title}
            src={`/images/news/${newItem.image}`}
          />
        </div>
      </dialog>
    </>
  )
}
