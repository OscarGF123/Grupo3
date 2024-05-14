const $submit = document.getElementById("submit"),
        $password = document.getElementById("Password"),
        $username = document.getElementById("Username"),
        $visible = document.getElementById("visble");

        document.addEventListener("change"), (e) => {
            if (e.target === $visible) {
                if ($visible.checked === false) $password.type = "password";
                else $password.type = "text";
            }
        }

document.write("Modificacion de Oscar");