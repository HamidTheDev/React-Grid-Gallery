import { useState } from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import GalleryImage from '../galleryImage/GalleryImage'
import './GalleryGrid.css'
import UploadImage from '../uploadImage/UploadImage'

const GalleryGrid = SortableContainer(({ images, lastIndex, onDelete }) => {
  const [selectedImages, setSelectedImages] = useState([])

  const handleSelectImage = (imageId) => {
    if (selectedImages.includes(imageId)) {
      //if image is already selected, remove it from the selected images array
      //and remove the imageId from the selectedImages array

      setSelectedImages(selectedImages.filter((id) => id !== imageId))
    } else {
      //if image is not selected, add it to the selected images array
      //and add the imageId to the selectedImages array

      setSelectedImages([...selectedImages, imageId])
    }
  }

  const handleDeleteSelected = () => {
    onDelete(selectedImages)
    setSelectedImages([]) //reset selected image array to empty
  }

  return (
    <section className='shadow-lg rounded-xl p-10 w-fit'>
      {/* heading */}
      <header className='border-b mb-5 pb-5 h-11'>
        {/* if selected images array is not empty, show the delete files button  */}
        {selectedImages.length > 0 && (
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
              <input
                className='w-5 h-5'
                type='checkbox'
                checked
                name=''
                id=''
              />
              <span className='font-semibold'>
                {selectedImages.length} Files Selected
              </span>
            </div>
            <p
              className='text-red-500 cursor-pointer font-semibold'
              onClick={handleDeleteSelected}
            >
              Delete Files
            </p>
          </div>
        )}
      </header>
      {/* gallery  */}
      <div className='gallery'>
        {images.map((image, index) =>
          // if index is not the last index, render GalleryImage component
          index !== lastIndex ? (
            <GalleryImage
              onSelect={handleSelectImage}
              isSelected={selectedImages.includes(image.id)}
              onDelete={onDelete}
              lastIndex={lastIndex}
              key={`image-${index}`}
              index={index}
              image={image}
              isFeatured={index === 0}
            />
          ) : (
            // if index is the last index, render UploadImage component
            <UploadImage key={index} />
          )
        )}
      </div>
    </section>
  )
})

export default GalleryGrid
