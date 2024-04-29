$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoNovaImg = $('#endereco-nova-img').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link>
                <a href="${enderecoNovaImg}" target=blank title=Ver imagem tamanho real>
                Ver imagem tamanho real
                </a>
            </div>"
        `).appendTo();
        $(novoItem).appendTo('ul');

    })

})