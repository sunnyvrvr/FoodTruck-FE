const user = JSON.parse(localStorage.getItem('userId'));
const userId = user?.social_id

export const isLoginSelector = selector({
    key: 'isLoginSelector',
    get:({get}) =>!!get(userId)
})