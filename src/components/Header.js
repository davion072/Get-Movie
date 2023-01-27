
import { useState } from 'react'

function Header({ onSearch }) {
    const [movieName, setMovieName] = useState('Kantara');
    const [year, setYear] = useState(2022);
    const [plot, setPlot] = useState('Full');



    const getValue = (e) => {
        e.preventDefault();

        if (!movieName) return alert('Please enter movie name')

        onSearch({
            movie: movieName,
            year: year,
            plot: plot
        })

        setMovieName('');
        setPlot('');
    }

    return (
        <div className="flex justify-center my-10">
            <form onSubmit={getValue} className="p-3 flex space-x-10">
                <input className="inputTexts" type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} placeholder='Movie Name' />
                <input className="inputTexts" type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="YYYY" min="1800" max="2030" />
                <button className="rounded-3xl shadow-xl bg-gray-700 px-10 py-3 text-gray-50 text-xl" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Header
