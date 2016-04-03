//δ��½
function noLogin(req,res,next) {
	if(!req.session.user){
		console.log('抱歉，您还没有登陆');
		return res.redirect('/login');
	}
	next();
}
exports.noLogin=noLogin;