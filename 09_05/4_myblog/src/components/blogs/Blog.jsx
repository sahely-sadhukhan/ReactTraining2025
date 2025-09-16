import { Link } from 'react-router-dom';

function Blog() {

    let blogs = [
        { id: 1, title: "Blog One", category: "Tech", content: "This is the content of Blog One." },
        { id: 2, title: "Blog Two", category: "Life Cycle", content: "This is the content of Blog Two." },
        { id: 3, title: "Blog Three", category: "Tech", content: "This is the content of Blog Three." },
        { id: 4, title: "Blog Four", category: "Life Cycle", content: "This is the content of Blog Four." }
    ];

    var blogRows = blogs.map( (blog, index) => 
        <tr key={index}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.category}</td>
            <td>{blog.content}</td>
            <td align="center"><Link to={"post/"+blog.id}>View Posts</Link></td>
        </tr>
    );

    return (
        <div>
            <h3>All Blogs</h3>
            <hr/>
            <table border={1} width="100%" cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr style={{backgroundColor: "lime"}}>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {blogRows}
                </tbody>
            </table>
            <hr/>
        </div>
    );
}
export default Blog;