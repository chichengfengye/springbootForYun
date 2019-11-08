function toPage(url){
    window.location.href = generateUrl(url);
}

function generateUrl(url){
    return getParentDirPath() + url;
}

function getParentDirPath(){
    var currentUrl = window.location.href;
    return currentUrl.substring(0,currentUrl.lastIndexOf("/"));
}/**
 * Created by jf on 2018/4/1.
 */
