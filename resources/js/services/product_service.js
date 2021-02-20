import {http, httpfile} from './http_service'
export function createProduct(data) {
    return httpfile().post('/products');
}
