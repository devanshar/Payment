import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Headers"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"

export const Signin = () => {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] z-0">

    <div className=" h-screen flex justify-center">
      <div className="flex flex-col justify-center z-10 ">
        <div className="rounded-lg bg-black w-80 text-center p-2 h-max px-4 border-2 border-amber-100">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="dave@gmail.com" label={"Email"} />
          <InputBox placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
      </div>
    </div>
  )
}

