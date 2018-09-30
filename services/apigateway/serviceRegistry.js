'use strict';

class ServiceRegistry {
    constructor(){
        this._services =[];
        this._timestamp = 30;
    }

    add(name,ip,port){
        const key = name+ip+port;
        if(!this._services[key]){
            this._services[key] = {};
            this._services[key].timestamp = Math.floor(new Date() /1000);
            this._services[key].ip = ip;
            this._services[key].name = name;
            this._services[key].port = port;
            this._cleanup();
            console.log(`Added service for  ${name} on ${ip}:${port}`);
            return;
        }
        this._services[key].timestamp = Math.floor(new Date() /1000);
        console.log(`Updated service for  ${name} on ${ip}:${port}`);
        this._cleanup();
    }

    remove(name,ip,port){
        const key = name+ip+port;
        delete this._services[key];
    }

    get(name){
        this._cleanup();
        for(let key in this._services){
            if(this._services[key].name == name)
                return this._services[key];
        }
    }

    _cleanup(){
        const now = Math.floor(new Date() / 1000);
        for(let key in this._services){
            if(this._services[key].timestamp+ this._timestamp < now){

                console.log(`Removed service for  ${this._services[key].name}`);
                delete this._services[key];

            }
        }
    }
}

module.exports = ServiceRegistry;