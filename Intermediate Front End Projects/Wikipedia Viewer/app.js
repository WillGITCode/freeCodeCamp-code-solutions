$(function() {

    $('#magIcon').click(function() {
        $('#magIcon').hide();
        $('.hidden').show();
    });

    document.getElementById('searchField').onkeydown = function(s) {
        if (s.keyCode == 13) {
            var searchField = $('#searchField').val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchField + "&format=json&callback=?";
            $.ajax({
                url: url,
                type: "GET",
                async: false,
                dataType: "json",
                success: function(data, status, JQXHR) {
                    for (var i = 0; i < data[1].length; i++) {
                        $('#return').prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");

                        //block below makes all the return hyper links open in a new window

                        $('a').each(function() {
                            var a = new RegExp('/' + window.location.host + '/');
                            if (!a.test(this.href)) {
                                $(this).click(function(event) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    window.open(this.href, '_blank');
                                });
                            }
                        });
                    }
                }
            })
        }
    }
});
