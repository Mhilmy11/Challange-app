

export default function Card({isOpen}) {
    
    return (

        <div className=" flex justify-between mt-4">
            <button onClick={() => isOpen(true)} className=" bg-white w-[590px] text-left h-14 rounded-md border-black border-2">
                <h1 className=" ml-2">okokok</h1>
            </button>
            <button className=" bg-red-700 w-[60px] h-14 rounded-md border-black border-2"></button>
        </div>
        
    )
}