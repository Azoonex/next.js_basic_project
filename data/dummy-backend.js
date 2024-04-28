export const dataProduct = [
    { id: "p1", title: "labtop",description: "This is products 1" },
    { id: "p2", title: "phone", description: "This is products 2" },
    { id: "p3", title: "cool pad", description: "This is products 3" },
    { id: "p4", title: "notbook", description: "This is products 4" }
]

export function allDataPorducts() {
    return dataProduct
}  

export function getDataProductID(eventId) {
    return dataProduct.find(i => i.id === eventId)
}

export const navlink = [
    "home", "info", "link", "pages"
]

export function dataNavlink () {
    return {DATA : navlink}
}