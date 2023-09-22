// ready() means use js only when whole HTMl doc is ready
$(document).ready(
    function () {
        $("#button").click(
            function () {
                var toAdd = $('#data').val()
                if (toAdd !== "") {
                    $('ul').append('<li>'+toAdd+'</li>');// jqApped
                    $('#data').val('')
                }
            }
        );

        $(document).on('click', 'li', function () {
            // $(this).toggleClass('cross');
            $(this).toggleClass('cross'); // jqClassToggle
        });
        $(document).on('dblclick', 'li', function () {
            $(this).remove();
        });
    }
);








/*ar addButton = document.getElementById("button");
var input = document.getElementById("data");
var u = document.getElementById("ul")
addButton.addEventListener("click", addItem);

function addItem() {
    if (input.value !== "") {
        // make an li element
        var li = document.createElement("li");
        // alert(input.value);
        // put the imput text as the text of the element
        li.innerHTML = counter + "-" + input.value;
        // add li element to the list
        u.appendChild(li);

        li.addEventListener("click", function () {
            li.classList.toggle("cross");
        });
        li.addEventListener("dblclick", function () {
            this.remove();
        });
    }
    input.value = "";
}*/