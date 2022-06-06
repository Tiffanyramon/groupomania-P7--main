import Headerun from'../components/headerun';


const Layoutun =({ children }) => {

    return(
        <>
             <Headerun />
        
             <main>
               {children}
             </main>

        </>
    )

}

export default Layoutun