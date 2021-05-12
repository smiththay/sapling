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

    return (
        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5'>
            <div className="card-com text-center">

                    {props.goal.user.name}

                <h4 className="card-title text-center pt-1"><b>{props.goal.title}</b></h4>
                <div className='row d-flex justify-content-center text-center px-5 pt-3'>
                    <div className='col-12'>

                        <Circle percent={(props.goal.progress / props.goal.total) * 100} strokeWidth="4" strokeColor="#236b23" className='mw-25 mb-3' />
                        <span><b>{((props.goal.progress / props.goal.total) * 100).toFixed(2)}% </b></span>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.goal.description}</p>
                </div>
                        <h1>$<b>{props.goal.progress}</b><sub>/${props.goal.total}</sub> </h1>
                <button type="button" className="btn btn-warning mt-3" data-bs-toggle='modal' data-bs-target={`#model-id-${props.goal.id}`}>
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
                        <hr />
                        <CommentAdd createComment={createComment} />
                    </div>
                </div>
            </div>
        </div>


    )
}
