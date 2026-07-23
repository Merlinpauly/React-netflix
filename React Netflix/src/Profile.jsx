import "./Profile.css";
import { useState } from "react";
function Profile() {
    const user = JSON.parse(localStorage.getItem("netflixUser"));
    console.log(user);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user.name);
    const [fullname, setFullname] = useState(user.fullname);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [gender, setGender] = useState(user.gender);

    


    return (
        <div className="profile-page">

            <div className="profile-card">

                <div className="profile-image">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile"
                    />
                </div>

                <h1>Profile</h1>

                {
                    editMode ? (

                        <div className="profile-info">

                            <label>Name</label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>FullName</label>

                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                            <label>Email</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Phone</label>

                            <input
                                type="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            

                        </div>

                    ) : (

                        <div className="profile-info">

                            <p>
                                <strong>Name :</strong> {user.name}
                            </p>

                            <p>
                                <strong>Full Name :</strong> {user.fullname}
                            </p>

                            <p>
                                <strong>Email :</strong> {user.email}
                            </p>

                            <p>
                                <strong>Phone :</strong> {user.phone}
                            </p>

                            <p>
                                <strong>Gender :</strong> {user.gender}
                            </p>

                        </div>

                    )
                }

                <button onClick={() => setEditMode(true)}>
                    Edit Profile
                </button>

            </div>

        </div>
    );


}
export default Profile;
