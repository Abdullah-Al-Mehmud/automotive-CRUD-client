import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {
  const loadedMyCart = useLoaderData();
  const [myCart, setMyCart] = useState(loadedMyCart);
  console.log(myCart);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {myCart.map((cart) => (
          <MyCartCard
            key={cart._id}
            myCart={myCart}
            setMyCart={setMyCart}
            cart={cart}></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
