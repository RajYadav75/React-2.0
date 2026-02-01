import PropTypes from 'prop-types';
function ProfileCard({name,age,isMember}) {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>Status: {isMember?"Active Member":"Not Active Member"}</h3>
    </div>
  )
}
 ProfileCard.PropTypes= {
    name : PropTypes.string,
    age : PropTypes.number,
    isMember : PropTypes.bool
 }
export default ProfileCard