import protectAPI from '../../middleware/protectAPI';

 function handler(req, res) {
    return res.json({'name':'moez'})
}

export default protectAPI(handler)
