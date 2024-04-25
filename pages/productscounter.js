import { useDispatch } from "react-redux";

export default function productscounter() {
    function submitName() {
        useDispatch(SET_NAME(inputName.current.value));
    }
  return (
    <div>productscounter</div>
  )
}
