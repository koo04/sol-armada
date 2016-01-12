var googleDrive = require('google-drive');
// API KEY: AIzaSyB-Wui1LSLxVpUd2G58LYt9fKrVd-wHE3A

module.exports = {
    news: function (req, res) {
        var token = 'abc123456',
            fileId = 'def123456';
        
        googleDrive(token).files().get(callback);
        return res.view("news");
    }
}