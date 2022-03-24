import React from 'react'
import './CreateNewItem.css'
import { FaAsterisk, FaPlus, FaStar } from 'react-icons/fa'
import { BsFillGrid1X2Fill, BsFillUnlockFill } from 'react-icons/bs'
import { BiLockOpen } from 'react-icons/bi'
import { ImStatsBars, ImWarning } from 'react-icons/im'

export const CreateNewItems = () => {
  return (
    <div class='container'>
      <h1>Create New Item</h1>
      <p class='sub-title text-muted'>
        <FaAsterisk class='text-danger m-2' size={8} />
        Required field
      </p>
      <div class='mb-3'>
        <label for='formFile' class='form-label'>
          Image, Video, Audio, or 3D Model
          <FaAsterisk class='text-danger m-2' size={8} />
        </label>
        <p class='sub-title text-muted'>
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </p>
        <input
          class='form-control choose-file'
          type='file'
          id='formFile'
          required
        />
      </div>
      <div class='mb-3'>
        <label for='formFile' class='form-label'>
          Name
          <FaAsterisk class='text-danger m-2' size={8} />
        </label>
        <input
          class='form-control form-control-lg'
          type='text'
          required
          placeholder='item name'
        />
      </div>

      <div class='mb-3'>
        <label for='formFile' class='form-label'>
          External link
        </label>
        <p class='sub-title text-muted'>
          OpenSea will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </p>
        <input
          class='form-control form-control-lg'
          type='text'
          placeholder='https://yoursite.io/item/123'
          aria-label='.form-control-lg example'
        />
      </div>

      <div class='mb-3'>
        <label for='description' class='form-label'>
          Description
        </label>
        <p class='sub-title text-muted'>
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </p>
        <textarea
          class='form-control'
          id='description'
          placeholder='Provide a detailed description of your item.'
          rows='4'
          columns='5'
        ></textarea>
      </div>

      <div class='mb-3 collection'>
        <label for='collection' class='form-label'>
          Collection
        </label>
        <p class='sub-title text-muted'>
          This is the collection where your item will appear.
          <span
            class='d-inline-block'
            tabindex='0'
            data-bs-toggle='popover'
            data-bs-trigger='hover focus'
            data-bs-content='Moving items to a different collection may take up to 30 minutes. You can manage your collections here.'
          >
            <button class='btn i-btn' type='button' disabled>
              i
            </button>
          </span>
        </p>
        <select
          class='form-select form-select-lg mb-4'
          id='collection'
          placeholder='Select collection'
        >
          <option selected>
            <p class='text-muted'>Select collection</p>
          </option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </select>
      </div>

      <div class='my-3'>
        <div class='d-flex border-bottom my-4'>
          <BsFillGrid1X2Fill size={24} />

          <div class='col mx-3'>
            <h6 class='title subheading'>Properties</h6>
            <p class='text sub-text'>
              Textual traits that show up as rectangles
            </p>
          </div>
          <button class='btn btn-add'>
            <FaPlus />
          </button>
        </div>

        <div class='d-flex border-bottom my-4'>
          <FaStar size={24} />

          <div class='col mx-3'>
            <h6 class='title subheading'>Levels</h6>
            <p class='text sub-text'>
              Numerical traits that show as a progress bar
            </p>
          </div>

          <button class='btn btn-add'>
            <FaPlus />
          </button>
        </div>

        <div class='d-flex border-bottom my-4'>
          <ImStatsBars size={24} />
          <div class='col mx-3'>
            <h6 class='title subheading'>Stats</h6>
            <p class='text sub-text'>
              Numerical traits that show as a progress bar
            </p>
          </div>
          <button class='btn btn-add'>
            <FaPlus />
          </button>
        </div>

        <div class='d-flex border-bottom my-4'>
          <BiLockOpen size={24} />
          <div class='col mx-3'>
            <h6 class='title  subheading'>Unlockable Content</h6>
            <p class='text sub-text'>
              Include unlockable content that can only be revealed by the owner
              of the item.
            </p>
          </div>
          <div class='form-check form-switch fs-2'>
            <input class='form-check-input' type='checkbox' id='' />
          </div>
        </div>

        <div class='d-flex border-bottom my-4'>
          <ImWarning size={24} />
          <div class='col mx-3'>
            <h6 class='title subheading'>Explicit & Sensitive Content</h6>
            <p class='text sub-text'>
              Set this item as explicit and sensitive contentinfo
            </p>
          </div>
          <div class='form-check form-switch fs-2'>
            <input class='form-check-input' type='checkbox' id='' />
          </div>
        </div>
      </div>

      <button class='btn btn-lg fs-2 btn-outline-primary px-4 my-5 mx-5'>
        Create
      </button>
    </div>
  )
}
