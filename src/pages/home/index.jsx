import {useState} from 'react';
import Footer from "../../components/footer";
import Header from "../../components/header";
import Results from "../../components/results";
import SearchContainer from "../../components/SearchContainer";

export default function Home() {

    const [searchParams, setSearchParams] = useState({
        title: '',
        releaseYear: '',
        type: '',
    });
    const [results, setResults] = useState([]);
    
    return (
        <div className="flex flex-col h-screen justify-between bg-slate-600 text-zinc-100">
            <Header />
            <SearchContainer searchParams={searchParams} setSearchParams={setSearchParams} setResults={setResults}/>
            <Results results={results}/>
            <Footer />
        </div>
    );
}
