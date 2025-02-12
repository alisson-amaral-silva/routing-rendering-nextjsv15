import ModalBackdrop from '@/components/ModalBackdrop/modal-backdrop'
import { getNewsItem } from '@/lib/backend/news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {

  const newSlug = params.slug
  const newItem = getNewsItem(newSlug)

  if (!newItem) {
    notFound()
  }


  return (
    <>
      <ModalBackdrop />
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
