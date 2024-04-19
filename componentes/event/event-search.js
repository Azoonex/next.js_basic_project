import { allMonths } from "@/dummy-data";
import Button from "../ui/button"
import { useRef } from "react";


export default function EventSearch(props) {
    const allMonth = allMonths()

    const yearInputRef=  useRef()
    const mothInputRef=  useRef()

    const submitHandler = (e)=>{
        e.preventDefault()
        
        const selectedYear = yearInputRef.current.value;
        const selectedMoth = mothInputRef.current.value;

        props.onSreach(selectedYear,selectedMoth)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={mothInputRef}>
                        {
                            allMonth.map((item,index) =>(
                                <option key={index} value={index + 1}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <Button typeBtn="submit">Search</Button>
            </div>
        </form>
    )
}
