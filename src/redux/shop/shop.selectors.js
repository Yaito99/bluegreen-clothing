import { createSelector } from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectColllectionPreview = createSelector(
    [selectCollections],
    collection => Object.keys(collection).map(key => collection[key])
)

export const selectCollection = collectionId =>
    createSelector(
        [selectCollections],
        collection => collection[collectionId]
        )
