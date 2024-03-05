
interface ChildrenContainer {
    children: React.ReactNode
}

const Container = ({children}: ChildrenContainer) => {
    return(
        <div className="container">
            <h1>texto de container</h1>
            {children}
        </div>
    )
}

export default Container;