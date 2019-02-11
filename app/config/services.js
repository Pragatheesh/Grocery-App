import ServiceManager from "./ServiceManager";
import ApiService from "../service/ApiService";
import GroceryService from "../service/GroceryService";
import {BASE_URL} from "./index";

let serviceManagerInstance;

export const register = (serviceManager = new ServiceManager()) => {
    serviceManager.register('ApiService', () => {
        console.log("API_BASE_REGISTERED", BASE_URL);
        return new ApiService(BASE_URL);
    });

    serviceManager.register('GroceryService', (serviceManager) => {
        let api = serviceManager.get('ApiService');
        return new GroceryService(api);
    });

    serviceManagerInstance = serviceManager;
    return serviceManagerInstance;
};