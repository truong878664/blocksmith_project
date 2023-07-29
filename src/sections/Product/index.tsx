import Describe from "../../partials/sections/Product/Describe";
import ItemProducts from "./ItemProducts";
import DetailPrice from "../../partials/sections/Product/DetailPrice";

function Product() {
  return (
    <section>
      <Describe />
      <ItemProducts />
      <DetailPrice/>
    </section>
  );
}

export default Product;
