function Sidebar(){
    const clickHandler = 
    () => console.log("First Click!")

    const handleDoubleClick =
    () => console.log("Third Try!")

    function handleClick(){
        let randomNum = Math.floor(Math.random()*3) + 1;
        console.log(randomNum);
        let userInput = prompt("type number");
        alert(`computer number: ${randomNum}, Your guess: ${userInput}`);
    }

return(
    <div>
        <aside className="sideBarComponent">
            <h2>Side Bar Content!</h2>

        <button onClick = {clickHandler}>
            First Try
        </button>

        <button onMouseOver = {clickHandler}>
            Second Try
        </button>

        <button onDoubleClick = {handleDoubleClick}>
            Third Try
        </button>

        <button onClick={handleClick}>Guess the number between 1 & 3</button>

        </aside>

        </div>
        
        
    )
}

export default Sidebar;