import "../styles/Dashboard.css";
import { useState } from "react";
import Logo from "../components/Logo"
// "./pages/Password"
function Profile() {
    const user = JSON.parse(
        localStorage.getItem("loggedInUser")
    );
    console.log(user);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user.name);
    const [fullname, setFullname] = useState(user.fullname);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [phone, setPhone] = useState(user.phone);
    const [gender, setGender] = useState(user.gender);
    const [showToast, setShowToast] = useState(false);

    function handleSave() {

        const updatedUser = {
            name,
            fullname,
            email,
            password,
            phone,
            gender
        };

        // Update logged-in user
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(updatedUser)
        );

          // Get all users
        const users = JSON.parse(
            localStorage.getItem("netflixUsers")
        ) || [];

          // Replace only the edited user
        const updatedUsers = users.map((user) => {

            if (user.email === updatedUser.email) {
                return updatedUser;
            }

            return user;

        });

        // Save updated users
        localStorage.setItem(
            "netflixUsers",
            JSON.stringify(updatedUsers)
        );

        setEditMode(false);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }





    return (
        <div className="profile-page">



            <div className="profile-card">
                <Logo />



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

                            <div className="form-row">

                                <div className="input-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="input-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>



                            </div>

                            <div className="form-row">



                                <div className="input-group">
                                    <label>Gender</label>

                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>

                                </div>

                            </div>

                            <button onClick={handleSave}>Save Changes</button>

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
                            <button onClick={() => setEditMode(true)}>
                                Edit Profile
                            </button>

                        </div>


                    )
                }



            </div>
            {
                showToast && (
                    <div className="toast">
                        ✅ Profile Updated Successfully
                        <button className="close-button" onClick={() => setShowToast(false)}>X</button>
                    </div>
                )
            }

        </div>
    );


}
export default Profile;
