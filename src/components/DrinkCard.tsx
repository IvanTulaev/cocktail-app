import {observer} from "mobx-react-lite";
import {Flex, Table} from "antd";
import {Drink} from "../store/CocktailStore.ts";
import Image from "antd/es/image";
import {getRatio} from "../utils/utils.ts";

export const DrinkCard = observer((props: { drink: Drink }) => {

    const {
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strImageSource,
        ingredients

    } = props.drink

    const ratio = getRatio()

    const columns = [
        {
            title: 'Ingredient',
            dataIndex: 'ingredient',
            key: 'ingredient',
        },
        {
            title: 'Measure',
            dataIndex: 'measure',
            key: 'measure',
        }]

    return (
        <>
            <h2>{strDrink}</h2>
            <Flex gap={20} justify="space-evenly" style={{flexDirection: ratio <= 1 ? "column-reverse" : "row" }}>
                <Flex vertical style={{flexBasis: "50%", flexGrow: 2}} gap={5}>
                    <div>
                        <p>{strCategory}</p>
                        <p>{strAlcoholic}</p>
                        <p>{strGlass}</p>
                    </div>
                    <div>
                        <h3>Instructions</h3>
                        <p>{strInstructions}</p>
                    </div>
                    <Table dataSource={ingredients} columns={columns} pagination={false}/>
                </Flex>
                <Image
                    alt={`${strDrink} image`}
                    placeholder={true}
                    src={strDrinkThumb}
                    preview={{src: strImageSource}}
                    style={{flexGrow: 1}}
                />
            </Flex>
        </>
    )
});