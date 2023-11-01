import { useState } from 'react'
import { photos } from './assets/photos'
import GalleryGrid from './components/galleryGrid/GalleryGrid'

function App() {
  const [images, setImages] = useState(photos)
  const lastIndex = images.length - 1

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const updatedImages = [...images]
    const [movedImage] = updatedImages.splice(oldIndex, 1)
    updatedImages.splice(newIndex, 0, movedImage)
    setImages(updatedImages)
  }

  const handleDeleteImages = (selectedImageIds) => {
    const updatedImages = images.filter(
      (image) => !selectedImageIds.includes(image.id)
    )
    setImages(updatedImages)
  }

  return (
    <div className='w-full flex justify-center'>
      <GalleryGrid
        lastIndex={lastIndex}
        onDelete={handleDeleteImages}
        images={images}
        onSortEnd={onSortEnd}
        axis='xy'
      />
    </div>
  )
}

export default App
