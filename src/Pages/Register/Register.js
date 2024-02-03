import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import RegisterInfo from "../../Components/RegisterInfo/RegisterInfo";
import classes from "./Register.module.css";
const Register = () => {
  const navigate = useNavigate();

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
  const [error, setError] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
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

  const validEmail = (email) => {
    const pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
  };
  const validPassword = (password) => {
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return pattern.test(password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      setError("First Name cannot be empty");
      return;
    }
    if (lastName.trim() === "") {
      setError("Last Name cannot be empty");
      return;
    }
    if (!validEmail(email)) {
      setError("Invalid Email");
      return;
    }
    if (!validPassword(password)) {
      setError(
        "Password must contain at least 1 upper case letter, 1 lower case letter, 1 digit, 1 special character, and must be of length 8 to 15"
      );
      return;
    }
    if (address.trim() === "") {
      setError("Address cannot be empty");
      return;
    }
    if (city.trim() === "") {
      setError("City cannot be empty");
      return;
    }
    if (country.trim() === "") {
      setError("Country cannot be empty");
      return;
    }
    if (isNaN(pinCode.trim()) || pinCode.trim().length !== 6) {
      setError("Invalid pincode");
      return;
    }
    if (isNaN(contactNo.trim()) || contactNo.trim().length !== 10) {
      setError("Invalid Contact No.");
      return;
    }
    if (jobTitle.trim() === "") {
      setError("Job Title cannot be empty");
      return;
    }
    if (companyName.trim() === "") {
      setError("Company Name cannot be empty");
      return;
    }
    if (localStorage.getItem(email.trim())) {
      setError("Account already exsists");
      return;
    } else {
      console.log(
        firstName,
        lastName,
        email,
        password,
        address,
        city,
        country,
        pinCode,
        contactNo,
        dob,
        jobTitle,
        companyName
      );
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
      navigate("/");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.border} style={{ top: "0" }} />
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Register Now!</h1>
        <InputBox
          type={"text"}
          label={"First Name"}
          required={true}
          onChange={firstNameHandler}
          value={firstName}
        />
        <InputBox
          type={"text"}
          label={"Last Name"}
          required={true}
          onChange={lastNameHandler}
          value={lastName}
        />
        <InputBox
          type={"email"}
          label={"Email"}
          required={true}
          onChange={emailHandler}
          value={email}
        />
        <InputBox
          type={"password"}
          label={"Password"}
          required={true}
          minLength={8}
          autoComplete={"true"}
          onChange={passwordHandler}
          value={password}
        />
        <InputBox
          type={"text"}
          label={"Address"}
          required={true}
          onChange={addressHandler}
          value={address}
        />
        <InputBox
          type={"text"}
          label={"City"}
          required={true}
          onChange={cityHandler}
          value={city}
        />
        <InputBox
          type={"text"}
          label={"Country"}
          required={true}
          onChange={countryHandler}
          value={country}
        />
        <InputBox
          type={"tel"}
          label={"Pin Code"}
          required={true}
          minLength={6}
          maxLength={6}
          onChange={pinCodeHandler}
          value={pinCode}
        />
        <InputBox
          type={"tel"}
          label={"Contact No."}
          required={true}
          minLength={10}
          maxLength={10}
          onChange={contactNoHandler}
          value={contactNo}
        />
        <InputBox
          type={"date"}
          label={"dob"}
          required={true}
          onChange={dobHandler}
          value={dob}
        />
        <InputBox
          type={"text"}
          label={"Job Title"}
          required={true}
          onChange={jobTitleHandler}
          value={jobTitle}
        />
        <InputBox
          type={"text"}
          label={"Company Name"}
          required={true}
          onChange={companyNameHandler}
          value={companyName}
        />
        <p className={classes.error}>{error ? "* " + error : ""}</p>
        <button className={classes.registerBtn} onClick={submitHandler}>
          Register
        </button>
        <div className={classes.border} style={{ bottom: "0" }} />
      </form>
      <RegisterInfo showButton={false} />
    </div>
  );
};

export default Register;
