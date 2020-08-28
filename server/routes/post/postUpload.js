export default (req, res) => {
    if(!req.files) {
        res.status(400).send({
            message: 'No file selected'
        });
        return;
    }
    let file = req.files.file;

    //save files
    file.mv('./uploads/' + file.name);

    res.send({
        message: "Upload successful"
    });
};