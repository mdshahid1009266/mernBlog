import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


const products=[...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.animals(),
    inStock:faker.helpers.arrayElements([0,3,5,6,7]),
    fastDaly:faker.datatype.boolean(),
    rating:faker.helpers.arrayElements([0,2,3,4,5]),
}))
export default products;