$(document).ready(function () {
  let opcao1 = $("#celular");
  let opcao2 = $("#residencial");
  let radio = $(".radio");
  let mascara = "(00) 00000-0000";

  $("#telefone").mask(mascara, { placeholder: "(00) 00000-0000" });

  //CAROUSEL
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  //MENU HAMBURGUER TOGGLE
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  //MASK PLUGIN

  radio.click(function (e) {
    const idAlvoOpcao = e.target.id;
    if (!idAlvoOpcao) return;

    let mascara;
    let telefone = $("#telefone");

    telefone[0].value = "";
    telefone[0].disabled = false;

    if (idAlvoOpcao === "celular") {
      mascara = "(00) 00000-0000";
      $("#telefone").mask(mascara, { placeholder: "(00) 00000-0000" });
    } else if (idAlvoOpcao === "residencial") {
      telefone.value = "";
      mascara = "(00) 0000-0000";
      $("#telefone").mask(mascara, { placeholder: "(00) 0000-0000" });
    }
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (e, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos não preenchidos`);
      }
    },
  });

  //FUNÇÃO PARA FAZER A ROLAGEM SUAVA QUANDO CLICADO EM TENHO INTERESSE
  //TAMBEM PARA O PREENCHIMENTO DO VEICULO DE INTERESSE DE FORMA AUTOMATICA
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
