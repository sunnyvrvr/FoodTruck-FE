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
            break;
        case 'like':
            return api.get('/MyLike.json')
            break;
        case 'review':
            return api.get('/MyReview.json')
            break;
        case 'location':
            return api.get('/MyLocation.json')
            break;
    }
    
}
