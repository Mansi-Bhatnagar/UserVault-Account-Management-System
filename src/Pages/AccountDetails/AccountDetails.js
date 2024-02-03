import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logoSymbol.png";
import pencil from "../../Assets/wand-sparkle.svg";
import classes from "./AccountDetails.module.css";
import InputBox from "../../Components/InputBox/InputBox";
const AccountDetails = () => {
  const navigate = useNavigate();

  //States for all the fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dob, setDob] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [successMessage, setSuccesMessage] = useState("");

  //Handlers
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
  };
  const pinCodeHandler = (e) => {
    setPinCode(e.target.value);
  };
  const contactNoHandler = (e) => {
    setContactNo(e.target.value);
  };
  const dobHandler = (e) => {
    setDob(e.target.value);
  };
  const jobTitleHandler = (e) => {
    setJobTitle(e.target.value);
  };
  const companyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };

  //Getting all the values from Local Storage
  useEffect(() => {
    handleResetValues();
  }, []);

  //Logout Handler
  const logoutHandler = () => {
    navigate("/");
  };

  //For Editing Fields
  const handleEdit = (field) => {
    const elem = document.querySelector(`input[name=${field}]`);
    if (elem) {
      elem.focus();
    }
  };

  //For Resetting Values
  const handleResetValues = (e) => {
    e?.preventDefault();
    const userEmail = localStorage.getItem("email");
    const information = JSON.parse(localStorage.getItem(userEmail));
    setFirstName(information.firstName);
    setLastName(information.lastName);
    setEmail(information.email);
    setPassword(information.password);
    setAddress(information.address);
    setCity(information.city);
    setCountry(information.country);
    setPinCode(information.pinCode);
    setContactNo(information.contactNo);
    setDob(information.dob);
    setJobTitle(information.jobTitle);
    setCompanyName(information.companyName);
  };

  //For Saving Changed Values
  const handleSaveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem(
      email,
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
        city: city,
        country: country,
        pinCode: pinCode,
        contactNo: contactNo,
        dob: dob,
        jobTitle: jobTitle,
        companyName: companyName,
      })
    );

    //Setting Success Message
    setSuccesMessage("Changes Successfully Saved!");
    setTimeout(() => {
      setSuccesMessage("");
    }, 3000);
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div>
          <img src={logo} className={classes.logo} alt="logo" />
          <h3>User Vault</h3>
        </div>
        <button className={classes.logoutBtn} onClick={logoutHandler}>
          Logout
        </button>
      </header>
      <h1>
        Welcome <span>{firstName}!</span>
      </h1>
      <h4>Account Details</h4>
      <div className={classes.accountDetails}>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"First Name"}
            style={{ width: "300px" }}
            value={firstName}
            name="first_name"
            onChange={firstNameHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("first_name")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"Last Name"}
            style={{ width: "300px" }}
            value={lastName}
            name="last_name"
            onChange={lastNameHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("last_name")}
          />
        </div>
        <div
          className={classes.inputBoxContainer}
          style={{ marginRight: "20px" }}
        >
          <InputBox
            type={"email"}
            required={true}
            label={"Email"}
            style={{ width: "300px" }}
            value={email}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"password"}
            required={true}
            label={"Password"}
            style={{ width: "300px" }}
            value={password}
            name="password"
            onChange={passwordHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("password")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"date"}
            required={true}
            label={"dob"}
            style={{ width: "300px" }}
            value={dob}
            name="dob"
            onChange={dobHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("dob")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"tel"}
            required={true}
            label={"Contact No."}
            style={{ width: "300px" }}
            value={contactNo}
            name="contact_no"
            onChange={contactNoHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("contact_no")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"Address"}
            style={{ width: "300px" }}
            value={address}
            name="address"
            onChange={addressHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("address")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"City"}
            style={{ width: "300px" }}
            value={city}
            name="city"
            onChange={cityHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("city")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"Country"}
            style={{ width: "300px" }}
            value={country}
            name="country"
            onChange={countryHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("country")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={true}
            label={"Pin Code"}
            style={{ width: "300px" }}
            value={pinCode}
            name="pin_code"
            onChange={pinCodeHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("pin_code")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={false}
            label={"Job Title"}
            style={{ width: "300px" }}
            value={jobTitle}
            name="job_title"
            onChange={jobTitleHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("job_title")}
          />
        </div>
        <div className={classes.inputBoxContainer}>
          <InputBox
            type={"text"}
            required={false}
            label={"Company Name"}
            style={{ width: "300px" }}
            value={companyName}
            name="company_name"
            onChange={companyNameHandler}
          />
          <img
            src={pencil}
            alt="edit"
            className={classes.pencil}
            onClick={() => handleEdit("company_name")}
          />
        </div>
      </div>
      <span className={classes.success}>
        {successMessage ? successMessage : ""}
      </span>
      <div className={classes.buttonContainer}>
        <button className={classes.btn} onClick={handleSaveChanges}>
          Save
        </button>
        <button className={classes.btn} onClick={handleResetValues}>
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
