import { FaBeer } from 'react-icons/fa';

export default function Card({isOpen}) {
    
    return (

        <div className=" mt-7">
            <h2 className=' font-bold'>Note OF You</h2>
            <div className=" flex justify-between mt-4">
                <button onClick={() => isOpen(true)} className=" bg-white w-[590px] text-left rounded-md border-black border-2">
                    <div className=" m-2">
                        <h1 className=" text-xl font-bold">Title</h1>
                        <h6>Body</h6>
                    </div>
                </button>
                <button className=" bg-red-700 w-[60px] h-14 rounded-md border-black border-2">
                    
                </button>
            </div>
        </div>
        
    )
}