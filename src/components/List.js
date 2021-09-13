import React, { useEffect, useState  } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//   import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux'
import {listPosts} from '../actions/postsActions'

const List = () => {
    // const [data, setData] = useState([]);
    // let history = useHistory();
    const dispatch = useDispatch()
    // const data = useSelector((state) => state.data);

    const postList = useSelector(state => state.postList)      //postList comes form store
    const {error, data} = postList
    // console.log(postList)
    useEffect(() => {
        // await axios.get("http://localhost:8000/api/model")
        // .then(function(response) {
        //     console.log(response.data);
        //     setData(response.data);

        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
        dispatch(listPosts())
        }, [dispatch]);
        // const data = [];

        // const getData = async () => {
        //     axios.get(`http://localhost:8000/api/model`)
        //         .then((getData) => {
        //             setData(getData.data);
        //         })
        // }

    //     const onDeleteHandler = async(id) => {
    //         await axios.delete(`http://localhost:8000/api/model/delete/${id}`)
    //         .then((response) => {
    //             console.log(response);
    //             getData();

    //     })
    // }
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
                {data && data.map(item => <tr key={item._id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>
                            <img style={{width:100}} src={"http://localhost:8000/image/"+item.img}>
                                </img></td>

                        <td>
                            <Link className="edit-link" onClick={() => edit(item.id)}>Edit</Link>
                        </td>
                    </tr>
                )}



                </tbody>
            </table>
            {/* <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            /> */}
        </div>
    )
}

export default List
