import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Headers"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return   <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] z-0">
    <div className=" h-screen flex justify-center z-10">
    <div className="flex flex-col justify-center z-10 ">
      <div className="rounded-lg bg-black w-80 text-center p-2 h-max px-4 border-2 border-amber-100">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="Ved" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Arin" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="dev@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
  </div>
}