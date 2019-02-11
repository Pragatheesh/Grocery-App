export default class GroceryService {
    apiEndpoint = '/grocery';

    /**
     * @param {ApiService} apiService
     */
    constructor(apiService) {
        this.api = apiService;
    }

    getGroceryList() {
        return this.api.get(this.apiEndpoint);
    }

    saveGroceryItem(item) {
        return this.api.post(this.apiEndpoint, item);
    }
}