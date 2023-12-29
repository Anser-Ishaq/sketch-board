import {
  actionItemClicked,
  activeItemClicked,
} from "@/redux/menus/actions/menu.actions";
import { UseAppDispatch } from "@/hooks/redux.hook";
const MenuServices = () => {
  const dispatch = UseAppDispatch();

  const handleActiveItem = (itemName: string) => {
    dispatch(activeItemClicked(itemName));
    console.log("active item name", itemName);
  };

  const handleActionItem = (itemName: string) => {
    dispatch(actionItemClicked(itemName));
    console.log("action item name", itemName);

  };
  return { handleActiveItem, handleActionItem };
};

export default MenuServices;
