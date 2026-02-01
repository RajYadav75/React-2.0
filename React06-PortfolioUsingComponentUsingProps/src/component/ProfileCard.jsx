function ProfileCard(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
        <img src={props.image} alt="Photo" style={{border:"1px solid black",height:"100px",width:"100px",borderRadius:"50%"}}/>
    </div>
  )
}

export default ProfileCard;