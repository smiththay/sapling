import React, { useState } from 'react'

export default function CommentAdd(props) {
    const [commentData, setCommentData] = useState('')

    const handleChange = (e) => {

        setCommentData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createComment(commentData)
        setCommentData('')
        //console.log('submitted')
    }
    return (
        <div className="row px-5 pt-2 d-flex">
            <span><form onSubmit={handleSubmit} >
                    <div className="form-floating col-12">
                        <input name='comment' type="text" className="form-control"
                            onChange={handleChange}
                            value={commentData}
                        />
                        <label htmlFor="floatingInput">Add Comment...</label>
                    </div>
                
                    <div className='col pt-2 pb-4 text-center'>
                    <button className=" btn btn-success" type="submit" >
                        Add Comment
                    </button>
                </div>
                
            </form></span>
        </div>

    )
}
