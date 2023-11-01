import { SortableElement } from 'react-sortable-hoc'
import './GalleryImage.css'

const GalleryImage = SortableElement(
  ({ image, isFeatured, index, onSelect, isSelected }) => {
    return (
      <div
        className={`image
        ${isSelected ? 'selected' : ''}
        ${isFeatured ? 'featured' : ''}`}
      >
        {/* single gallery image */}
        <img src={image.src} alt={`Image ${index + 1}`} />

        {/* overlay containing checkbox */}
        <div className='overlay'>
          <input
            type='checkbox'
            className='border-2 border-black w-5 h-5 left-3 top-3 absolute'
            id={`${image.id}`}
            checked={isSelected}
            onChange={() => onSelect(image.id)}
          />
        </div>
        {/* if image is selected checkbox will remain visible */}
        {isSelected && (
          <input
            type='checkbox'
            className='border-2 border-black w-5 h-5 left-3 top-3 absolute z-50'
            id={`${image.id}`}
            checked={isSelected}
            onChange={() => onSelect(image.id)}
          />
        )}
      </div>
    )
  }
)

export default GalleryImage
