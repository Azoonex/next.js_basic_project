function UserProfile (props) {
    const {userName} = props;

    return <h2>{userName}</h2>
}

export default UserProfile

export async function getServerSideProps (context) {
    const {parmas,res,req} = context;

    return {
        props :{
            userName : 'amirabas'
        }
    }
}