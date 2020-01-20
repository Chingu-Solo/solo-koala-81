let requestURL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDwTcS4Tdzrk_sNAn21EiBmiWGitIbZLkI&sort=popularity';
let value = "Default text to be displayed";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Load in the Google Fonts
request.onload = function () {
    const fontJSON = request.response;
    let font_families = [];
    let css = "";
    const fonts = fontJSON.items;
    //add fonts to font list array
    for (i = 0; i < fonts.length; i++) {
        var font_family = {
            "family": fonts[i].family,
            "variants": fonts[i].variants,
            "files": fonts[i].files
        };
        font_families.push(font_family);
        //console.log(font_family);
    }
    //create styles in index.html
    for (j = 0; j < font_families.length; j++) {
        let single_font = font_families[j];
        for (var k = 0; k, k < single_font.variants.length; k++) {
            let font_style = "normal";
            let weight = "400";
            //console.log(single_font.variants[k]);
            if (single_font.variants[k] == "regular") {
                font_style = "normal";
            } else if (single_font.variants[k].length == 3) {
                switch (single_font.variants[k]) {
                    case "100":
                        weight = "100";
                        break;
                    case "200":
                        weight = "200";
                        break;
                    case "300":
                        weight = "300";
                        break;
                    case "400":
                        weight = "400";
                        break;
                    case "500":
                        weight = "500";
                        break;
                    case "600":
                        weight = "600";
                        break;
                    case "700":
                        weight = "700";
                        break;
                    case "800":
                        weight = "800";
                        break;
                    default:
                        weight = "500";
                    }
                } else if (single_font.variants[k] == "italic") {
                    font_style = "italic";
                } else if (single_font.variants[k] != null) {
                        var split = [];
                        split = single_font.variants[k].split("00");
                        font_style = split[1];
                        weight = split[0] + "00";
                    }
                
            font_face_css = "@font-face { font-family: ";
            font_face_css += single_font.family;
            font_face_css += "; font-weight: ";
            font_face_css += weight;
            font_face_css += "; font-style: ";
            font_face_css += font_style;
            font_face_css += "; src: url(";
            font_face_css += single_font.files[single_font.variants[k]];
            font_face_css += ");} "
            //(font_face_css);
            css += font_face_css;
        }
            }
            $('<style>').append(css).appendTo(document.head);    
    //Append Font Cards to Body HTML with styling
            for (x = 0; x < 11; x++) {
                let font_card = '<div class="card border-0" title="'
                font_card += font_families[x].family;
                font_card += '"><div class="card-body border-top"><h5 class="card-title">';
                font_card += font_families[x].family;
                font_card += '</h5> <i class="fas fa-plus"></i>';
                font_card += '<p class="card-text" style="font-family: '
                font_card += font_families[x].family;
                font_card += '"'
                font_card += '>The quick brown fox jumps over the lazy dog.</p></div></div>';

                $('.font-card-container').append(font_card);
            }      
                  
            $('#search').hideseek({
                attribute: 'title'
            });   
    //Change Card text to what the user types
        //console.log(value);
    $( "#type_something" ).keyup(function() {
    value = $( this ).val();
    if (value != "") {
        $( ".card-text" ).text( value );
    } else {
        $( ".card-text" ).text('The quick brown fox jumps over the lazy dog.'
            )    }
    }).keypress();
    
    //Clear text input 
    // $( "#clear" ).click(function() {
    //     value = " ";
    //     console.log(value);
    //     $( ".card-text" ).text( value );
    //     $( "#type_something" ).val( 'type something');
    //   });

    // Change the font when input changes
    $( "#font-size" ).change(function() {
        var font_size = $(this).val();
        //console.log(font_size);
        var x = 'font-size'; 
        $("p").css(x, font_size);
    })

    //Back to top button

    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

        }







