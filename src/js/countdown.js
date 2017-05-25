const targetDate = new Date( "Jun 12, 2017 18:00:00" ).getTime( )
const id = thing => document.getElementById( thing )

const update = f => setInterval( f => {
		let now = new Date().getTime()
		let distance = targetDate - now

		let days 		= 	Math.floor( distance / ( 1000 * 60 * 60 * 24 ) )
		let hours 		= Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / (1000 * 60 * 60 ) )
		let minutes 	= Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
		let seconds 	= Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 )

		id( 'countdown' ).innerHTML = `${days} dagen - ${hours} uur, ${minutes} minuten & ${seconds} seconden`

		if (distance < 0) {
		    clearInterval( update )
		    document.getElementById( "COUNTDOWN" ).innerHTML = "Winnaar is bekend!"
		 }

	}, 1000 )

export default update