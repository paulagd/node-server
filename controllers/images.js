//allow to get an image from the client side
exports.getImageOxfordById = function (req, res, next) {
    res.sendFile(req.params.id,{"root":'./oxbuild_images'});
};
exports.getImageParisById = function (req, res, next) {
    res.sendFile(req.params.id,{"root":'./paris'});
};
exports.getImageInstreById = function (req, res, next) {
    res.sendFile(req.query.path,{"root":'./instre'});
};
