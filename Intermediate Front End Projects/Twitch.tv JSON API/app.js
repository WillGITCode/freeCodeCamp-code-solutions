//Client ID 'make sure to get one at twitch.tv'

$(function() {
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "comster404", "freecodecamp", "storbeck", "habathcx", "dansgaming", "noobs2ninjas", "brunofin"]

    for (var i = 0; i < streamers.length; i++) {
        var status = "Offline";

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/' + streamers[i],
            headers: {
                'Client-ID': 'make sure to get one at twitch.tv'
            },
            success: function(data) {
                $.getJSON('https://api.twitch.tv/kraken/streams/' + data.name + '?client_id=make sure to get one at twitch.tv').done(function(streamData) {
                    var name = data.display_name;
                    var game = data.game.slice(0, 18);
                    if (streamData.stream !== null) {
                        status = "Online";
                    } else { status = "Offline" }
                    //console.log(status);
                    $('#hChannel').append('<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>');
                    $('#hStatus').append(status + '<br>');
                    $('#hGame').append(game + '<br>');

                });
            },
            error: function(error) {
                var channelName = error.responseJSON.message.split("'")
                var errorGame = error.responseJSON.error;
                status = "doesnt exist";

                $('#hChannel').append(channelName[1] + '<br>');
                $('#hStatus').append(status + '<br>');
                $('#hGame').append(errorGame + '<br>');
                //console.log(status);
            }

        }); //end of ajax
    } //end of for loop
});
