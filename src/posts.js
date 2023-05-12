import { VscGlobe } from 'react-icons/vsc';

const Posts = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        <VscGlobe/>
       Traer Datos
    </button>
}

export default Posts;