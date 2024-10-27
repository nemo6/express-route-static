const path    = require("path")
const fs      = require("fs")
const express = require("express")
const app     = express()
const router  = express.Router()

Static = (a,b) => {

	router["get"]( a, (req,res) => {

		router.use( express.static( b ) )
		res.sendFile( path.join( __dirname, b, "index.html" ) ) // i assume there's an "index.html" file in the folder

	})
}

Static( "/calendar", "jsCalendar_folder" )
Static( "/toggle_selection", "toggle_selection_folder" )

serverEx()

function serverEx(x,n){

	const PORT = 8080

	app.use( router )

	/*app.get( "/", function (req, res) {

		res.render( "index.html", { render:x } )

	})*/

	app.listen(PORT)

	console.log(`Running at port ${PORT}`)

}
