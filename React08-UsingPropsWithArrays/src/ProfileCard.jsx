import PropTypes from 'prop-types';
function ProfileCard({ name, age, isMember, hobbies })
{
  return (
    <div>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>Status: {isMember ? "Active Member" : "Not Active Member"}</h3>
      <h3>Hobbies: </h3>
      <ul>
        {
          hobbies.map((hobby, index) =>
          {
            return <li key={index}>{hobby}</li>
          })
        }
      </ul>
    </div>
  )
}
ProfileCard.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}
export default ProfileCard