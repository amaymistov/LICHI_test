import axios from "axios";

export default async function getData(limit = 12, page = 1) {
    const url = 'https://api.lichi.com/category/get_category_product_list'
    const response = await axios.get(url, {
        params: {
            category: 'clothes',
            lang: 1,
            shop: 1,
            limit,
            page
        }
    })
    return response.data
}