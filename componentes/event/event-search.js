import { allMonths } from "@/dummy-data";
import Button from "../ui/button"
import { useRef } from "react";
import classes from "./evnet-seleted.module.css"

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
        <form onSubmit={submitHandler} >
            <div style={{display: "flex",justifyContent: "space-around",alignItems: "center",gap: '19px'}}>
                <div style={{display:"flex",gap: "10px"}}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef} className={classes.selectedItem}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={mothInputRef} className={classes.selectedItem}>
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