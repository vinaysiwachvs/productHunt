'use strict'
const specialCharactersArray =  [',','$','!','@','#','$','%','^','&','*'];

const isValidName = (name) => {
    if(!isNaN(name)) return false;
    if(!name || name.length==0 || name.length > 100) return false;
    for(let i=0;i<name.length;i++)
    {
        if(specialCharactersArray.includes(name[i])) {
            return false;
        }
    }
    return true;
}

const isValidLongDesp = (desp) => {
    if(!isNaN(desp)) return false;
    if(desp.length > 500) return false;
    for(let i=0;i<desp.length;i++)
    {
        if(specialCharactersArray.includes(desp[i])) {
            return false;
        }
    }
    return true;
}
const isValidShortDesp = (desp) => {
    if(desp.length > 100) return false;
    for(let i=0;i<desp.length;i++)
    {
        if(specialCharactersArray.includes(desp[i])) {
            return false;
        }
    }
    return true;
}

const isValidURL = (url) => {
    if(!isNaN(url)) return false;
    if(desp.length > 100) return false;
    const newUrl = new URL(url);
    if(newUrl.protocol=='http:' || newUrl.protocol=='https:') {
        return true;
    } 
    else return false;
}


const isValidKeys= (productInput) =>{
    const keys=["name","visit_url","icon_url","long_desp","short_desp","created_by","updated_by","comments","upvote","tags"] //required keys
    let inputKeys = Object.keys(productInput);
    for(let i=0;i<inputKeys.length;i++)
    {
        if(!keys.includes(inputKeys[i])) return false;
    }
    return true;
}



const isValidInputProduct=(productInput)=>{
    if(isExtraData(productInput)) 
    {
        return {err:"Extra fields in the body"};
    }
    else if(!isValidName(productInput["name"])) 
    {
        return {err: "Inavlid name field"};
    }
    else if(!isValidShortDesp(productInput["short_desp"]))
    {
        return {err: "Inavlid short description"};
    }
    else if(!isValidLongDesp(productInput["long_desp"]))
    {
        return {err: "Inavlid long description"};
    } 
    else if(!isValidURL(productInput["icon_url"]))
    {
        return {err: "Inavlid Url"};
    }
    else if(!isValidURL(productInput["visit_url"]))
    {
        return {err: "Inavlid Url"};
    }
    return;

}

module.exports = {isValidInputProduct};