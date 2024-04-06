import Footer from "../../components/footer";
import Header from "../../components/header";
import Results from "../../components/results";
import SearchContainer from "../../components/SearchContainer";

export default function Home() {
    return (
        <div className="flex flex-col bg-slate-600 text-zinc-100">
            <Header />
            <SearchContainer />
            <Results />
            <Footer />
        </div>
    );
}
