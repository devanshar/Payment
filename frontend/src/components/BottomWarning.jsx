import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className=" text-white py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className=" text-blue-500 pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}
  