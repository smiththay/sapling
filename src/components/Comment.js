import React from 'react'

export default function Comment() {
    return (

    
        <div className="row d-flex justify-content-center">
            <div className="col-lg-9 col-md-5 col-sm-5">
                <form
                //onSubmit={handleSubmit}
                >
                    <div className="form-floating">
                        <input name='comment' type="text" className="form-control"
                        //onChange={handleChange}
                        //value={formData.comment || ''}
                        />
                        <label htmlFor="floatingInput">Rooting For You...</label>
                    </div>
                </form>
            </div>
            <div className='col-lg-3'>
                <button className=" btn btn-success" type="submit" >
                    Add Comment
                </button>
            </div>
        </div>

    )
}
