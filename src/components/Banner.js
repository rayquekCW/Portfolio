import {Col, Container, Row} from "react-bootstrap";
import{useState,useEffect} from "react" ;
import profile from "../assets/img/profile.png"

export const Banner =() =>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate =["Full Stack Development","UI/UX Design"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText == ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row >
                    <Col xs={12} md={6} xl={7} className="my-auto">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Ray Quek `}<br></br><span className="wrap">{text}</span></h1>
                        <p className="intro">I am a sophomore at Singapore Management University (SMU) studying Information Systems with a major in Digital Cloud Solutions. </p>
                    </Col>
                    <Col className="text-center d-none d-lg-block">
                        <img className="w-75 rounded-circle" src={profile}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}