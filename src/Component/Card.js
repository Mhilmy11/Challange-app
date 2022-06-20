import { AiOutlineDelete } from 'react-icons/ai';

export default function Card({isOpen, notes, deleteNote}) {
    
    return notes.map(note=>(

        <div className=" mt-5">
            <div className=" flex justify-between mt-4">
                <button onClick={() => isOpen(true)} className=" bg-white w-[590px] text-left rounded-md border-black border-2">
                    <div key={note.title} className=" m-2">
                        <h1 className=" text-xl font-bold">{note.title}</h1>
                        <h6>{note.body}</h6>
                    </div>
                </button>
                <button onClick={()=> deleteNote(note.title)} className=" bg-red-700 w-[60px] h-14 rounded-md border-black border-2 flex justify-center items-center">
                    <AiOutlineDelete className=' w-11 h-11'/>
                </button>
            </div>
        </div>

    ))

        
    
}