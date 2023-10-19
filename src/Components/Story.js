import React from 'react'
import StoryChild from './StoryChild'

const Story = () => {
    return (
<div className='container'>       
     <div className='d-flex mt-4 justify-content-center'>
            <StoryChild title="Sonny Sangha"
                img='https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
                proSrc="data:image/jpeg;base64,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" />
            <StoryChild
                title="Saro"
                img="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60 "
                proSrc="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM= "
/>
            <StoryChild
                title="Frank"
                img="https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60 "
                proSrc="data:image/jpeg;base64,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 "
            />
            <StoryChild
                title="Nazz"
                img="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60 "
                proSrc="data:image/jpeg;base64,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 "
            />

        </div>
        </div> 
    )
}

export default Story