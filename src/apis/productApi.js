import axiosClient from "./axiosClient"

const productApi = {
    async getAll() {
        const res = await axiosClient.get("listProduct/")
        return res
    },
    async getItem(item) {
        const res = await axiosClient.get(`listProduct/${item}`)
        return res
    },
    async addItem(item) {
        const res = await axiosClient.post(`listProduct/`,item)
        return res
    },

}
export default productApi