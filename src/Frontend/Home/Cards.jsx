
import { Card } from 'antd';
import house1 from '../../assets/house1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const { Meta } = Card;
const Cards = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={house1} />}
  >
    <Meta title="abc Kriyaputri" description="Koteshwor,Kathmandu" />
    <div className="flex justify-end">

      <div><FontAwesomeIcon icon={faArrowRight} /></div>
    </div>
  </Card>
);
export default Cards;