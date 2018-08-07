module.exports = {
	'dbUrl' : 'mongodb://biggo:biggo2909@ds161751.mlab.com:61751/bigprint',
	'secret' : 'thebigsecret',
	'facebookAuth' : {
        'clientID'      : '1924245961181674',
        'clientSecret'  : '984902a45019cf50debdba827aaea03a',
        'callbackURL'     : 'http://localhost:5000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'googleAuth' : {
        'clientID'         : '204328360333-e4rjf5p4dnucmitl50qmbjle53rvevdo.apps.googleusercontent.com',
        'clientSecret'     : 'rp7Rvwskg1yM18ZUzJYHGtJI',
        'callbackURL'      : 'http://localhost:5000/auth/google/callback'
    }
}