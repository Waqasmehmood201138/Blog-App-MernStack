import axios from 'axios'
import {React , useState } from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function UpdateBlogForm() {

    const navigate = useNavigate();
    const location = useLocation();

    const [id , setId] = useState(location.state._id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const [description, setDescription] = useState(location.state.description)
    const [category, setCategory] = useState(location.state.category)

    const handleChange = (e) => {

        if (e.target.name === "title") {
            setTitle(e.target.value)
            console.log("title changed..")
        }
        else if (e.target.name === "author") {
            setAuthor(e.target.value)
            console.log("author...")
        }
        else if (e.target.name === "desc") {
            setDescription(e.target.value)
            console.log("description..")
        }
        else if (e.target.name === "category") {
            setCategory(e.target.value)
            console.log("category..")
        }
    }

    const handleBlogUpdate = async(e) => {

        try {
            e.preventDefault();

            const updateBlogData = {
                title : title,
                author : author,
                description : description,
                category : category
    
            }
    
            const updateBlogResponse = await axios.put(`http://localhost:8081/blog/update-blog/${id}` , updateBlogData)
    
            if(updateBlogResponse.status === 200){
                toast.success(updateBlogResponse.data.message)
                navigate('/admin')
            }
        } catch (error) {
            
            if(error.response && error.response.status === 404){

                toast.error(error.response.data.message)
            }
            else if(error.response && error.response.status === 400){
                toast.error(error.response.data.message)
            }
        }

    }

  return (
    <>
            <div className="container my-5 bg-warning-subtle border rounded-3 p-3">
            <div className="row">
                <div className="col-12">
                    <h1>Update Blog Here</h1>
                    <hr />
                </div>
                <form action="" onSubmit={handleBlogUpdate} className='d-flex flex-wrap'>
                    <div className="col-12 col-md-8 my-2 pe-2">
                        <input value={title} onChange={e => handleChange(e)} type="text" name='title' placeholder='Update Blog title' className='form-control' required />
                    </div>
                    <div className="col-12 col-md-4 my-2">
                        <input value={author} onChange={e => handleChange(e)} type="text" name='author' placeholder='Update Blog author' className='form-control' required />
                    </div>
                    <div className="col-12 my-2">
                        <textarea value={description} onChange={e => handleChange(e)} type="text" rows={3} name='desc' placeholder='Update Blog description' className='form-control' required />
                    </div>
                    <div className="col-12 my-2">
                        <select value={category} className='form-select' onChange={e => handleChange(e)} name='category' required>
                            <option >Select Category</option>
                            <option value='general'>General</option>
                            <option value='html&css'>HTML & CSS</option>
                            <option value='javascript'>Javascript</option>
                            <option value='ai'>AI</option>
                            <option value='python'>Python</option>
                            <option value='java'>Java</option>
                            <option value='wordpress'>WordPress</option>
                            <option value='php'>PHP</option>
                        </select>
                    </div>
                    <div className="col-3 my-3">
                        <input type="submit" value="Update Blog" className='btn bg-success-subtle col-12'/>
                    </div>
                    <div className="col-3 my-3">
                        <Link to="/admin" className='btn btn-danger col-12 ms-2'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
