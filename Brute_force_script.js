function start()
{


var lenght = document.getElementById("password").value;


var i,j,k,m;

        for ( i = 32; i <= 126; i++) {

            for ( j = 32; j <= 126; j++) {

                for ( k = 32; k <= 126; k++) {

                    for ( m = 32; m <= 126; m++) {

                        result = String.fromCharCode(i,j,k,m);

                        var n = String.fromCharCode(i.charCodeAt(0),j.charCodeAt(0),k.charCodeAt(0),m.charCodeAt(0));

                            alert(result);


                        if (lenght.equals(result)) {
                            succesfull = true;
                            document.getElementById("text").innerText = result;
                        }
                        if (succesfull) {
                            break;
                        }

                    }
                    if (succesfull) {
                        break;
                    }

                }
                if (succesfull) {
                    break;
                }

            }
            if (succesfull) {
                break;
            }

        }

}

