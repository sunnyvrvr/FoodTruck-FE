import axios from 'axios'
import React from 'react'

const api = axios.create({
  baseURL:'http://localhost:5000'
})

export function main(lat,lng,level){
  return api.get(`/calculate/${lat}/${lng}/${level}`)
}
