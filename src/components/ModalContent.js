import React from 'react'

const ModalContent = ({movie, open}) => {
  return (
    <div className="fixed inset-0 z-10">
        <div className="flex h-screen justify-center items-center">
            <div className=" md:w-1/2 p-3 border-black border-4 bg-white rounded-xl text-zinc-600 text-lg">
                {movie.Plot}
                <div className="text-center mt-5">
                    <button onClick={open} className="bg-red-500 rounded-xl w-1/6 text-white p-2">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalContent
