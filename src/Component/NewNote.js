import Button from "./Button"

export default function NewNote(){
    return(
        <>
            <div className=' mt-10'>
                <div className=" flex justify-between">
                    <h2 className=' font-bold'>New Note</h2>
                    <Button Class={'w-32 bg-green-500'}>Add New Note</Button>
                </div>
                <div className=' mt-5'>
                    <div>Title</div>
                    <textarea className=' w-full border-2 border-black rounded-md'></textarea>
                </div>
                <div>
                    <div className=' mt-4'>Body</div>
                    <textarea typeof='text' cols="30" rows="10" className=' w-full border-2 border-black rounded-md'></textarea>
                </div>
            </div>
        </>
    )
}