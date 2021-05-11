import React, { useState, useEffect } from 'react'
import { Circle } from 'rc-progress'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import { useAuth } from '../utilities/AuthContext'
import { axiosHelper } from '../utilities/axiosHelper'

export default function CommentModal(props) {
    const { token } = useAuth()
    const [comments, setComments] = useState([])


    function saveComments(res) {
        setComments(res.data)
    }

    function getComments() {
        console.log(props.goal.id)
        axiosHelper({
            token,
            url: `/api/comments/${props.goal.id}`,
            successMethod: saveComments
        })
    }
    useEffect(() => {
        if (Object.keys(props.goal).length > 0) {
            getComments(props.goal.id)
        }
    }, [Object.keys(props.goal).length])

    function createComment(content) {
        //console.log(goalData)
        axiosHelper({
            token,
            data: { content, goal_id: props.goal.id },
            method: 'post',
            url: '/api/comment/create',
            successMethod: getComments
        })
    }
    console.log(props.goal.id)
    return (
        <div className='jam col-lg-4 col-md-6 col-sm-12 mb-5'>
            <div className="card-com text-center">
                <div className='text-center'>
                    name
                </div>
                <h4 className="card-title text-center pt-3"><b>{props.goal.title}</b></h4>
                <div className='row d-flex justify-content-center text-center mt-5'>
                    <div className='col-12'>

                        <Circle percent={(props.goal.progress / props.goal.total) * 100} strokeWidth="4" strokeColor="#236b23" className='mw-25 mb-5' />
                        <span><b>{((props.goal.progress / props.goal.total) * 100).toFixed(2)}% of the way there!</b></span>
                    </div>
                </div>
                <div className="card-body">

                    <p className="card-text">{props.goal.description}</p>
                </div>
                <span><h2>$<b>{props.goal.progress}</b> /</h2><h5> ${props.goal.total}</h5></span>
                <button type="button" className="btn btn-warning" data-bs-toggle='modal' data-bs-target={`#model-id-${props.goal.id}`}>
                    comments
                 </button>
            </div>

            <div className="modal fade " id={`model-id-${props.goal.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Rooting For You</h5>
                            <button type="button" className="btn-close" data-bs-dismiss='modal' aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <CommentList comments={comments} />
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div> */}
                        <hr />
                        <CommentAdd createComment={createComment} />
                    </div>
                </div>
            </div>
        </div>
    )
}
