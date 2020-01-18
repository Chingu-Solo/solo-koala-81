let requestURL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDwTcS4Tdzrk_sNAn21EiBmiWGitIbZLkI';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    const fontJSON = request.response;
    let font_families = [];
    let css = "";
    const fonts = fontJSON.items;
    for (i = 0; i < fonts.length; i++) {
        var font_family = {
            "family": fonts[i].family,
            "variants": fonts[i].variants,
            "files": fonts[i].files
        };
        font_families.push(font_family);
        //console.log(font_family);
    }
    for (var j = 0; j < font_families.length; j++) {
        //console.log("This is a loop");
    }

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
            console.log(font_face_css);
            css += font_face_css;
        }
            }
            $('<style>').append(css).appendTo(document.head);    
        }







