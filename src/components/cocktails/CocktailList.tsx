import { Menu } from "antd";
import { NavLink } from "react-router";

import { ReactNode, Key } from "react"

import { MenuProps } from "antd/es/menu";
import { observer } from 'mobx-react-lite'
import { useRootStore } from "../../store/RootStoreContext.ts";
import { useParams } from "react-router";


type MenuItem = Required<MenuProps>['items'][number];

export const CocktailList = observer(() => {

    const { cocktail } = useParams();

    const { cocktails, setActive } = useRootStore()

    const items = cocktails.map(item => getItem(item.name, item.name))

    function getItem(
        label: string,
        key: Key,
        icon?: ReactNode,
    ): MenuItem {
        console.log('collapsed', label.charAt(0))
        return {
            key,
            icon,
            label: <NavLink to={`cocktails/${label}`}>{label}</NavLink>,
        } as MenuItem;
    }

    const selectHandler = (cocktailName: string) => {
        setActive(cocktailName)
    }

    return (
        <Menu theme="dark"
              defaultSelectedKeys={[cocktail ?? ""]}
              mode="inline"
              items={items}
              onSelect={(item)=> {selectHandler(item.key)}}
        />
    );
});
