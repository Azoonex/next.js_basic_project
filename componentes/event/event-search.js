import Button from "../ui/button"


export default function EventSearch() {
    const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Months", "Calendar"]
    const handleFind = (e)=>{
        e.preventDefault()
        console.log("mmade");
    }
    return (
        <form>
            <div>
                <div>
                    <label htmlFor="year">Year</label>
                    <select id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <select id="month">
                        {
                            allMonth.map((item,index) =>(
                                <option key={index} value={index + 1}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <Button onclick={handleFind}></Button>
            </div>
        </form>
    )
}
