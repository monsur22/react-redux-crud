import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {listPosts, deletePosts, createPosts} from '../actions/postsActions'

const List = () => {
    // const [data, setData] = useState([]);
    // let history = useHistory();
    const dispatch = useDispatch()
    // const data = useSelector((state) => state.data);

    const postList = useSelector(state => state.postList)      //postList comes form store
    const {error, posts} = postList

    const postDelete = useSelector(state => state.postDelete)      //postList comes form store
    const {success: successDelete} = postDelete

    const postreate = useSelector(state => state.postCreate)      //postList comes form store
    const {success: successCreate} = postreate
    // console.log(postList)
    useEffect( () => {
        dispatch(listPosts())
        }, [dispatch, successDelete]);
        // const data = [];

        // const getData = async () => {
        //     axios.get(`http://localhost:8000/api/model`)
        //         .then((getData) => {
        //             setData(getData.data);
        //         })
        // }

    const onDeleteHandler = async(id) => {
        // if (window.confirm('Are you sure')) {
            dispatch(deletePosts(id))
        //   }

    }
    const edit = (id) =>{
        console.log(id);
        // history.push("/edit/"+id);
    }


    return (
        <div>
            <h1 className="text-center">Redux</h1>

            <h4 className="text-center">List page</h4>
             <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {posts.map(item => <tr key={item._id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                            <img style={{width:100}} src={"http://localhost:8000/image/"+item.img}></img>
                        </td>

                        <td>
                            <Link className="edit-link" onClick={() => edit(item.id)}>Edit</Link>
                            <button size="sm" variant="danger" onClick={() => onDeleteHandler(item.id)}>Delete</button>

                        </td>
                    </tr>
                )}



                </tbody>
            </table>

        </div>
    )
}

export default List
