import React, { useState } from 'react'

export default function CommentAdd(props) {
    const [commentData, setCommentData] = useState('')

    const handleChange = (e) => {

        setCommentData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createComment(commentData)
        //console.log('submitted')
    }
    return (
        <div className="row d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="col-9">
                    <div className="form-floating">
                        <input name='comment' type="text" className="form-control"
                            onChange={handleChange}
                            value={commentData}
                        />
                        <label htmlFor="floatingInput">Rooting For You...</label>
                    </div>
                    <div className='col-3'>
                        <button className=" btn btn-success" type="submit" >
                            Add Comment
                </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
