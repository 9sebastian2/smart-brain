import React from 'react';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This magic brain will detect faces in pictures you upload'}
            </p>
            <input className='f4 pa2 w-70 center' type='text' />
            <button className='f4 pa2 w-25 center'>Detect</button>

        </div>
    );
}

export default ImageLinkForm;