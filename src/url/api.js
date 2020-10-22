import axios from "axios"

export const parkList = (params) => { return axios.post("park/park/list/page", params) } //查询公园分页列表
    // export const peripheryList = (params) => { return axios.post("park/periphery/list/page", params) } //查询公园周边分页列表
export const tourist = (params) => { return axios.post("park/tourist/list/page", params) } //查询景点分页列表
export const getMessage = (params) => { return axios.post("park/Message/getMessage", params) } //获取资讯
export const getTraffic = (params) => { return axios.post("park/Message/getTraffic", params) } //获取交通介绍
export const facilitiesList = (params) => { return axios.post("park/v1.0/app/park/select/assets", params) } //公园内设施列表
export const peripheryList = (params) => { return axios.post("park/v1.0/app/periphery/list", params) } //查询公园周边列表
export const toTenementAD = (params) => { return axios.post('/park/park/banner/list', params) } //轮播图列表
export const recommendassetsList = (params) => { return axios.post('/park/v1.0/app/park/recommend/assets', params) } //公园内设施推荐列表
export const facilitiesInfo = (params) => { return axios.post('/park/v1.0/app/facilities/info/' + params.id) } //查询公园智能设施详情信息
export const touristInfo = (params) => { return axios.post('/park/v1.0/app/tourist/info/' + params.id) } //查询公园景点详情信息
export const peripheryInfo = (params) => { return axios.post('/park/v1.0/app/periphery/info/{id}' + params.id) } //查询公园周边详情信息