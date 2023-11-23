function Pesquisar()
    {
        var pesquisa = document.getElementById('barraPesquisa').value;
        pesquisa = pesquisa.toLowerCase();
        const produto = document.getElementsByClassName('produto');
        for(i = 0; i < produto.length; i++ )
        {
            if(!produto[i].innerHTML.toLowerCase().includes(pesquisa))
            {
                produto[i].style.display = "none";
            }
            else
            {
                produto[i].style.display = "grid";
            }
        }

    }
