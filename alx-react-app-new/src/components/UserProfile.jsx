/* Create a User Profile Card Using Props
mandatory
Objective: Create a UserProfile component that receives and displays user information through props.

Instructions:

Create UserProfile Component:

In the src/components file, create a new file named UserProfile.jsx.
Define a functional component UserProfile that takes props.
The component should display a user’s name, age, and a short bio. Structure it to include these in JSX elements like <h2> for the name, <p> for age, and another <p> for the bio.
Define the Props Structure:

The props for UserProfile should include name, age, and bio.
Example of the component JSX structure:
 const UserProfile = (props) => {
   return (
     <div>
       <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };
Use UserProfile in App.jsx:

Import UserProfile into your App.jsx file.
Use the component with props. For example: <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
Run the Application:

Start your application and ensure the UserProfile component displays the information correctly.*/

const UserProfile = (props) => {
    return(
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
        <p>
          Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
        </p>
        <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
    );
}

export default UserProfile;