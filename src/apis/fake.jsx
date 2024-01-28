import axios from 'axios'
import React from 'react'

const api = axios.create({
    baseURL: '/data'
  })

  
export function main(lat,lng,level){
    return api.get('/foodTruck.json')
  }

export function myPage(memberId, option){
    switch (option){
        case 'register':
            return api.get('/MyRegister.json')
        case 'like':
            return api.get('/MyLike.json')
        case 'review':
            return api.get('/MyReview.json')
        case 'location':
            return api.get('/MyLocation.json')
    }   
}

export function truckInfo(truckId){
    return api.get('/truckInfo.json')
}
