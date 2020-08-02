(() => {
    var audioCtx = new AudioContext()
    var sourceSelect

    function getDataSelect() {
        sourceSelect = audioCtx.createBufferSource()
        var request = new XMLHttpRequest()
        request.open('GET', soundSelect, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            var audioData = request.response
            audioCtx.decodeAudioData(audioData, function(buffer) {
                sourceSelect.buffer
                sourceSelect.buffer = buffer
                sourceSelect.connect(audioCtx.destination)
                sourceSelect.loop = false
            },
            function(e){ console.log('Error with decoding audio data' + e.err) })
        }
        request.send()
    }

    var soundSelect = '/static/sound/select.mp3'
        
    var lien = window.document.getElementsByClassName('css3button')
    var i = lien.length
    i--
    while (i >= 0) {
        lien[i].addEventListener('click', playSelect, true)
        i--
    }
    

    $(document).ready(function() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href') // Page cible
            var speed = 750 // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top -60 }, speed ) // Go
            return false
        })
    })


    lien[0].onclick = () => {
        //window.scroll(0,0)
        $('#intro').removeClass('css3button')
        $('#intro').addClass('css3buttonRed')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#admin').removeClass('css3buttonRed')
        $('#admin').addClass('css3button')
        /*$('#INDEX').slideDown()
        $('#CV').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    }
    lien[1].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3button')
        $('#resume').addClass('css3buttonRed')
        $('#admin').removeClass('css3buttonRed')
        $('#admin').addClass('css3button')
        /*$('#CV').slideDown()
        $('#INDEX').slideUp()
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#JOUST').slideUp()
        $('#ADM1N').slideUp()*/
    }
    lien[2].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#admin').removeClass('css3button')
        $('#admin').addClass('css3buttonRed')
        /*$('#JOUST').slideDown()
        $('#ADM1N').slideUp()
        $('#joust').removeClass('css3button')
        $('#joust').addClass('css3buttonRed')
        $('#INDEX').slideUp()
        $('#CV').slideUp()*/
    }
    /*
    lien[3].onclick = () => {
        $('#intro').removeClass('css3buttonRed')
        $('#intro').addClass('css3button')
        $('#resume').removeClass('css3buttonRed')
        $('#resume').addClass('css3button')
        $('#joust').removeClass('css3buttonRed')
        $('#joust').addClass('css3button')
        $('#admin').removeClass('css3button')
        $('#admin').addClass('css3buttonRed')
        $('#ADM1N').slideDown()
        $('#INDEX').slideUp()
        $('#CV').slideUp()
        $('#JOUST').slideUp()
    }
    */
    function playSelect() {
        getDataSelect()
        sourceSelect.start(0)
    }
        
    window.addEventListener('DOMContentLoaded', () => {
        function FormattedDate(props) {
            return <h1 className="myclock">{props.date.toLocaleTimeString()}</h1>
        }
        class Clock extends React.Component {
            constructor(props) {
                super(props)
                this.state = {date: new Date()}
            }
            componentDidMount() {
                this.timerID = setInterval(
                    () => this.tick(),
                    1000
                )
            }
            componentWillUnmount() {
                clearInterval(this.timerID)
            }
            tick() {
                this.setState({
                    date: new Date()
                })
            }
            render() {
                return (
                    <FormattedDate date={this.state.date} />
                )
            }
        }
        function App() {
            return (
                <Clock />
            )
        }
        ReactDOM.render(<App />, document.getElementById('myclock'))
    })
})()