import { PulseLoader } from "react-spinners"
export const Loading = ({loading}) => {
  return (
    <div className="loader w-full flex flex-row justify-center">
        <PulseLoader color="#e11d48" loading={loading} size={15}/>
    </div>
  )
}
