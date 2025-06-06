function Intro1(props) {
        return (
            <div className="blog-post-intro">
                <h2>{props.firstName}I've become a React developer!</h2>
                <div>
                    <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer! {props.accolades}</p>
                    <p className="link">Read more...</p>
                </div>
            </div>
        );
    };
    
    export default Intro1;