const protectAPI = (handler) => {
    return async (req, res) => {
        if(new URL(req.headers.referer).origin !== 'https://nextjs-n9lu7ozrj-moez552.vercel.app') {
            return res.status(403).json({success: false, message: `Forbidden`})
        }
        return handler(req, res)
    }
}

export default protectAPI;