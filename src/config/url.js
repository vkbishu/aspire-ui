// dev api end point
const dev_url = {
    card_info: '/data/card_info.json',
    get_app_state: '/data/app_state.json'
};

// production api end point
const prod_url = {
    card_info: '/data/card_info.json',
    get_app_state: '/data/app_state.json'
};

let url;
if(process.env.NODE_ENV === 'development'){
    url = dev_url;
}else{
    url = prod_url;
}

export default url;