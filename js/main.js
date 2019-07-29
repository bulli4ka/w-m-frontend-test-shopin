window.addEventListener("DOMContentLoaded", function() {
    // RANGE SLIDER START
    var slider = document.getElementById("myRange");

    document.getElementById("rainbow_line").style.width = (slider.value-slider.value/77) + "%";
    slider.oninput = function() {
        document.getElementById("rainbow_line").style.width = (slider.value-slider.value/77) + "%";
    }
    // RANGE SLIDER END

    inputChange("form_name");
    inputChange("form_country");
    inputChange("form_skype");
    inputChange("form_email");

    function inputChange(e){
        document.getElementById(e).oninput = function(){
            inputChange(e);
        };
        if(document.getElementById(e).value.length > 1) {
            document.getElementById(e+"_label").classList.add("not_empty");
        } else {
            document.getElementById(e+"_label").classList.remove("not_empty");
        }
    }
   
    // text inputs labels end

    // adaptive menu
    document.querySelector(".mobile_menu_button").onclick = function() {
        document.querySelector(".nav_menu").classList.toggle("active");
    };
    // adaptive menu end

    // CUSTOM SELECT START
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    
    function closeAllSelect(elmnt) {
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    document.addEventListener("click", closeAllSelect);
    // CUSTOM SELECT END
});