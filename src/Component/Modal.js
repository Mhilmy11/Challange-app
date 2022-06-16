import Button from "./Button"
export default function Modal({open, onClose, Class}){ 
    if (!open) return null
    return(
        <div className=" relative">
            <div className=" absolute w-full">
                <div className=" flex h-screen justify-center items-center">
                    <div className=" bg-black h-screen w-full opacity-25">
                    </div>
                </div>
            </div>
            <div className=" relative">
                <div className=" absolute w-full">
                    <div className="flex h-screen justify-center items-center">
                        <div className="bg-white rounded-lg h-[500px] w-[500px]"></div>
                    </div>
                </div>
                <div className=" absolute w-full">
                    <div className=" flex h-screen justify-center items-center">
                        <div>
                            <h1 className=" flex justify-center font-bold">Update Your Note Today</h1>
                            <div className=" mt-3">
                                <h2>Title</h2>
                                <textarea className="border-2 border-black rounded-md w-[450px]"></textarea>
                            </div>
                            <div>
                                <h2>Body</h2>
                                <textarea className="border-2 border-black rounded-md w-[450px]" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <Button>Update</Button>
                            <Button Class={' bg-red-600 mt-2'}  onClose={onClose}>Close</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}