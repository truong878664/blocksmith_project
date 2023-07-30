import ItemProduct from "../../components/Product/ItemProduct";
import dataProducts from "../../data/dataProducts";
function ItemProducts() {
  return (
    <div className="">
      {dataProducts.map((item, index) => (
        <ItemProduct key={index} img={item.img} logo={item.logo} describe={item.describe} />
      ))}
    </div>
  );
}

export default ItemProducts;
