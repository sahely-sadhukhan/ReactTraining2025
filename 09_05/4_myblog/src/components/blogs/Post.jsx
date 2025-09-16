import { useParams } from 'react-router-dom';

function Post () {

    const { blogId } = useParams();

    let postDetails = {
        101: ["Content of post one under blog 101", "Content of post two under blog 101", "Content of post three under blog 101", "Content of post four under blog 101"],
        102: ["Content of post one under blog 102", "Content of post two under blog 102", "Content of post three under blog 102", "Content of post four under blog 102"],
        103: ["Content of post one under blog 103", "Content of post two under blog 103", "Content of post three under blog 103", "Content of post four under blog 103"],
        104: ["Content of post one under blog 104", "Content of post two under blog 104", "Content of post three under blog 104", "Content of post four under blog 104"]
    };

    let post = postDetails[blogId].map( (content, index) => 
    <tr key={index}>
        <td>{index+1}</td>
        <td>{content}</td>
    </tr>
    );

    return (
        <div>
            <h3>Post Details for {post.id}</h3>
            <hr/>
            <div>
                <h2>{post.title}</h2>  <br/>
                <p>{post.content}</p> <br/>
            </div>
            <hr/>
        </div>
    );
}
export default Post;