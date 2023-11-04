import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AdminHomePage() {

    const [blogs, setblogs] = useState([])

    const getAllBlogs = async () => {

        try {

            const { data } = await axios.get('http://localhost:8081/blog/allBlogs')

            console.log(data)
            setblogs(data);
            // console.log()

            // getAllBlogs();

        } catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {

        getAllBlogs();

    }, [])


    return (
        <>
            <div className="container my-5 bg-warning-subtle border rounded-3 p-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1>Admin Panel | Blogs</h1>
                        <Link to="/admin/add-blog" className='btn btn-primary'>Create New Blog</Link>
                    </div>
                        <div className="col-12">
                            <hr />
                        </div>
                    <div className="col-12 mt-4">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Category</th>
                                    <th scope="col" className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {blogs.map((element) => {
                                    return (
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className='fw-bold fs-5'>{element.title}</td>
                                            <td>{element.author}</td>
                                            <td>{element.category}</td>
                                            <td className='d-flex justify-content-center gap-2'>
                                                <Link to className='btn btn-info'>Edit</Link>
                                                <Link to className='btn btn-danger'>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}
