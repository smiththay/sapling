import React from 'react'


export default function CommentList(props) {



    const mapAllGoalComments = props.comments.map((comment, index) => {
        console.log(comment)

        return (

            <div key={index}  className='col-12 mb-3'>
                {comment.content}
            </div>
        )
    });

    return (
        <div className='container1 mt-2'>
            <div className='row'>
                {mapAllGoalComments}
            </div>
        </div>
    )

}
