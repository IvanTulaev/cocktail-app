import Image from "antd/es/image"
import Image404 from "../../public/404.png"
import {Flex} from "antd";

export const Page404 = ()=> {
    return (
        <Flex justify="center">
            <Image
                alt={"Not found image"}
                placeholder={true}
                src={Image404}
                style={{width: "25vw", aspectRatio: "auto"}}
                preview={false}
            ></Image>
        </Flex>
    )
}