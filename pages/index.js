
// make a home page function
function Home() {
  return (
    <div>
        <form action="/action_page.php">
            <div className="container">
                <h1>Home</h1>
                <hr/>
                <label for="POD_Name"><b>Pod Name</b></label>
                <input type="text" placeholder="Enter POD Name" name="pod_name" required class="input"/>
                <div className="clearfix">
                    <input type="submit" class="btn" value="Get Logs" />
                </div>
                <label for="Container_link"><b>Container Link</b></label>
                <input type="text" placeholder="Enter Container Link" name="pod_name" required class="input"/>
                <div className="clearfix"><input type="submit" class="btn" value="Run container" /></div>
                <input type="submit" class="btn" value="Add Node" />

            </div>
        </form>
    </div>
  );
}

export default Home;