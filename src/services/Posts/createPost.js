export const createPost = ({title, body, userId}) => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify ({title, body, userId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                return(json)
            }
                
        )
    )
}