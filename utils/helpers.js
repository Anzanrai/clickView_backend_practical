const getNewId = (dataArray) => {
    idArray = dataArray.map(data => {
        return data.id
    })
    console.log(idArray, idArray.length);
    console.log(Math.max.apply(Math, idArray));
    return Math.max.apply(Math, idArray)+1;
}

const getRequiredData = (dataArray, requiredDataID) => {
    return dataArray.find( data => data.id === requiredDataID);
}

const sanitisePlaylistData = (providedData) => {
    if(!providedData.description){
        providedData.description = ""
    }
    if(!providedData.videos){
        providedData.videos = []
    }
    return providedData;
}
module.exports = {getNewId, getRequiredData, sanitisePlaylistData};