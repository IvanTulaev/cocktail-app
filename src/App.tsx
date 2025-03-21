import {useEffect, useState} from 'react'
import Sider from "antd/es/layout/Sider";
import Layout, {Content} from "antd/es/layout/layout";
import theme from "antd/es/theme";
import {CocktailList} from "./components/cocktails/CocktailList.tsx";
import {CocktailDetails} from "./components/cocktails/CocktailDetails.tsx";
import {useRootStore} from "./store/RootStoreContext.ts";
import {Navigate, useLocation, useParams} from "react-router";
import {getRatio} from "./utils/utils.ts";

function App() {
    const ratio = getRatio()
    const [collapsed, setCollapsed] = useState(false);
    const {cocktail} = useParams();
    const {setActive, active} = useRootStore()

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation();

    const shouldRedirect = location.pathname === "/";


    useEffect(() => {

        try {
            setActive(cocktail ?? "")
        } catch(error) {
            console.log(error);
        }

    }, [cocktail, setActive])

  return (
      shouldRedirect ? <Navigate to={`/cocktails/${active?.name}`}/> :
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                width={ratio <= 1 ? "70vw" : "20vw"}
                onCollapse={(value) => setCollapsed(value)} >
                <CocktailList />
            </Sider>
            <Layout>
                <Content style={{ margin: '16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <CocktailDetails/>
                    </div>
                </Content>
            </Layout>
        </Layout>
  )
}

export default App