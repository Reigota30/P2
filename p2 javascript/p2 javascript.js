function calcula_media(i)
    {
        var n1 = document.getElementById("n1_aluno_" + i).value;
        var n2 = document.getElementById("n2_aluno_" + i).value;
        var n3 = document.getElementById("n3_aluno_" + i).value;
        var media = document.getElementById("media_aluno_" + i);
        var resultado = document.getElementById("resultado_aluno_" + i);

        var calculo = (parseFloat(n1)  + parseFloat(n2) + parseFloat(n3)) / 3;

        if(calculo >= 5)
        {
            media.innerHTML = "<div class='text-success'>" + calculo + "</div>";
            resultado.innerHTML = "Aprovado";
        }
        else
        {
            media.innerHTML = "<div class='text-danger'>" + calculo + "</div>";
            resultado.innerHTML = "Exame";
        }
    }