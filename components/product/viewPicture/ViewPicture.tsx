import { Col, Container, Row } from "reactstrap";
import Image from 'next/image'

interface ImgProps{
    src: string
}
function ViewPicture({src}: ImgProps) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={src} alt="não localizou" width={250} height={150}/>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewPicture;