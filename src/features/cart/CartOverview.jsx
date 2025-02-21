import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cartQuatity = useSelector(getCartQuantity);
  const cartTotalPrice = useSelector(getTotalCartPrice);

  if (cartQuatity === 0) return;

  return (
    <div className="items flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 md:text-base">
        <span>{cartQuatity} pizzas</span>
        <span>{formatCurrency(cartTotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
