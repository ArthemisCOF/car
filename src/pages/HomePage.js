import { useEffect, useState } from "react";
import CardDetail from "../component/CardDetail";
import axios from "axios";
import EditFormModal from "../component/Modal/EditFormModal";
import DeleteFormModal from "../component/Modal/DeleteFormModal";

const HomePage = () => {
  const [selectCar, setSelectCar] = useState({});
  const [carList, setCarList] = useState([]);

  const getCarList = () => {
    const url = "http://localhost:8080/api/cars";
    axios.get(url).then((res) => {
      try {
        setCarList(res?.data?.data || []);
      } catch (err) {
        console.log("err", err);
      }
    });  
  }
  useEffect(() => {
    getCarList()
  }, []);

  return (
    <div className="container">
      <div class="row gy-4">
        {carList.map((item, key) => (
          <div class="col-6 col-sm-3" key={key}>
            <CardDetail
              carData={item}
              handleSelect={() => setSelectCar(item)}
            />
          </div>
        ))}
      </div>
      <EditFormModal selectCar={selectCar} getCarList={getCarList} />
      <DeleteFormModal selectCar={selectCar} getCarList={getCarList} />
    </div>
  );
};

export default HomePage;
