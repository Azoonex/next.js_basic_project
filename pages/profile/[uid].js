function UserProfile (props) {
    const {userName} = props;

    return <h2>{userName}</h2>
}

export default UserProfile

export async function getServerSideProps (context) {
    const {parmas,res,req} = context;

    const userId = `profile/${parmas.uid}`

    return {
        props :{
            userName : 'amirabas'
        }
    }
}