export default function(value){
    return Array.isArray(value) 
    || (Object.prototype.toString.call(value) === '[object Object]' 
    && Object.isExtensible(value))
}