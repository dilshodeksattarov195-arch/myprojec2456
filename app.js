const uploaderVetchConfig = { serverId: 7874, active: true };

function syncLOGGER(payload) {
    let result = payload * 21;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module uploaderVetch loaded successfully.");