//Data-objec

let d = new Date(); // Retorna o orario padrão de acordo a região de forma automatica;
d = d.toString();
d = new Date(2023, 0, 22, 12, 30, 0); //Aplicação manual de data;
d = new Date("Novembro, 22, 2023, 20:30:50"); // Aplicação de data em argumrnto como String;
d = new Date("11, 22, 2023, 20:30:50");

// Metodos da propriedade da Date
d = Date.now(); // Retorna o valor inteiro da hora pecorida desde 1 de janeiro de 1970
d = new Date("11, 22, 2023, 20:30:50");
d = d.getTime(); // Retorna o milesegindos da, hora actual
d = new Date("11, 22, 2023, 20:30:50");
d = d.getDate()




console.log(d);