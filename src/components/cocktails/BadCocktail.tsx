import {Flex} from "antd";
import Image from "antd/es/image";
import BadImage from "../../public/notFound.png"

export const BadCocktail = ()=> {
    return (
        <Flex justify="center">
            <Image
                alt={"Not found image"}
                placeholder={true}
                src={BadImage}
                style={{width: "25vw", aspectRatio: "auto"}}
                preview={false}
            ></Image>
        </Flex>
    )
}