const axios = require("axios")
const qs = require("qs")

const client_id = "7c6098b3-7a6f-431e-b4df-5a3faa2f712a"
const client_secret = "NbRWbyLPlhvi6OineMZDR2N0QtEIRuLh"

const instance = axios.create({
  baseURL: "https://services.sentinel-hub.com"
})

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}

const body = qs.stringify({
  client_id,
  client_secret,
  grant_type: "client_credentials"
})

const gettoken = ()=>{

    instance.post("/auth/realms/main/protocol/openid-connect/token", body, config).then(resp => {
  Object.assign(instance.defaults, {headers: {authorization: `Bearer ${resp.data.access_token}`}})
  process.env.SENTINEL_TOKEN = resp.data.access_token
})
}
module.exports = gettoken