exports.getImageById = function (req, res, next) {
    res.sendFile(req.params.id,{"root":'./oxbuild_images'});
};
