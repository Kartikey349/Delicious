export const Contact = () => {
    return(
        <div className="text-center">
            <h1 className="m-4 p-4 font-bold text-xl">Contact Page</h1>


            <form className="flex flex-col items-center gap-3">
                <input className="border border-black p-2" type="text" placeholder="Name"/>

                <input className="border border-black p-2"  type="text" placeholder="Email"/>

                <button className="bg-green-600 text-white p-2 rounded-md">Submit</button>
            </form>
        </div>
    )
}