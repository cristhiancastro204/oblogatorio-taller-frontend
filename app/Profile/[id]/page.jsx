
import  ProfilePage from "../../../components/ProfileInfo"
import { Navbar } from "../../../components/Reutilizables";


const profile =  async ({params}) => {
 
  const {id} = await params;
 
 
 
  return (  
  <div>
   
    
    <Navbar></Navbar>
    <ProfilePage />
    
  </div>);
}
export default profile;