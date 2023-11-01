import { useState } from 'react'
import { FaRegImage } from 'react-icons/fa'

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // if any image uploaded, then create objectUrl from the image and set to state
      const imageURL = URL.createObjectURL(file)
      setSelectedImage(imageURL)
    }
  }

  return (
    <div>
      <input
        className='hidden' //hide the input field to trigger it onclick of label
        type='file'
        accept='image/*'
        id='fileInput'
        onChange={handleImageChange}
      />
      {/* if selectedImage is not null, then show the image  */}
      {selectedImage ? (
        <div>
          <img
            className='image w-[180px] h-[180px]'
            src={selectedImage}
            alt='Selected'
            style={{ maxWidth: '100%' }}
          />
        </div>
      ) : (
        // if selected image is null, then show the upload icon
        <label htmlFor='fileInput' className='cursor-pointer'>
          <div className='w-[180px] h-[180px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-3'>
            <FaRegImage className='w-6 h-6' />
            <h1 className='text-lg'>Add Images</h1>
          </div>
        </label>
      )}
    </div>
  )
}

export default UploadImage
