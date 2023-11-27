import {
  actionItemClicked,
  activeItemClicked,
} from "@/redux/actions/menu.actions";
  import { useAppDispatch } from "@/hooks/redux.hook";
const MenuServices = () => {
  const dispatch = useAppDispatch();

  const handleActiveItem = (itemName: string) => {
      dispatch(activeItemClicked(itemName));
    console.log("item name", itemName);
  };
  return { handleActiveItem };
};

export default MenuServices;
