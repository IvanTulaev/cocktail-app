export const COCKTAILS = {
    MARGARITA: "margarita",
    MOJITO: "mojito",
    A1: "a1",
    KIR: "kir"
}

export const getRatio = () => {
    const {innerWidth, innerHeight} = window
    return innerWidth / innerHeight
}