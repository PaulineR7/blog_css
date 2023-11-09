function ProfileMenu() {
    const profile = {
      firstname: "Pauline",
      lastname: "Rémi",
    };
  
    return (
      <li>
        {profile.firstname} {profile.lastname}
      </li>
    );
  }
  
  export default ProfileMenu;