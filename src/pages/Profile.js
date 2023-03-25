import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import profileSlice from "../redux/profileSlice";
import { useDispatch } from "react-redux";
import { fullNameSelector, dobSelector, emailSelector, phoneSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setfullName] = useState(useSelector(fullNameSelector));
  const [DoB, setDoB] = useState(useSelector(dobSelector));
  const [email, setEmail] = useState(useSelector(emailSelector));
  const [phone, setPhone] = useState(useSelector(phoneSelector));

  const handleInputFullName = (e) => {
    setfullName(e.target.value);
  };
  const handleInputDoB = (e) => {
    setDoB(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleUpdate = () => {
    if (!email.includes("@") || !email.includes(".")) {
      alert("Invalid email");
      return;
    }

    if (phone.length !== 10) {
      alert("Invalid phone number's length");
      return;
    }

    Array.from(phone).forEach((digit) => {
      if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(digit)) {
        alert("Invalid phone number includes character");
        return;
      }
    });

    dispatch(profileSlice.actions.fullNameChange(fullName));
    dispatch(profileSlice.actions.dobChange(DoB));
    dispatch(profileSlice.actions.emailChange(email));
    dispatch(profileSlice.actions.phoneChange(phone));

    navigate("/")
  };

  return (
    <div className="profile-form">
      <div className="title">Profile</div>

      <div className="input-group">
        <label htmlFor="fullname">Full name:</label>
        <input id="fullname" type="text" value={fullName} onChange={handleInputFullName} />
      </div>

      <div className="input-group">
        <label htmlFor="dob">Day of Birth:</label>
        <input id="dob" type="text" value={DoB} onChange={handleInputDoB} />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={handleInputEmail} />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="text" value={phone} onChange={handleInputPhone} />
      </div>

      <div className="profile-bottom">
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
        <Link className="cancel-btn" to={"/"}>
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default Profile;
