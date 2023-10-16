
const mystyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
}
const mystyle2 = {
    fontSize: "45px",
    padding: "10px",
    backgroundColor: 'rosybrown'
}
const NotFound = () => {
    return (
        <div style={mystyle}>
            <h1 style={mystyle2}>Error 404! Nothing Found</h1>
        </div>
    )
}
export default NotFound;