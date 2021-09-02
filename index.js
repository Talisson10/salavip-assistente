const env = require('d:/ProjetosTelegram/assistente-ratocego/.env')
const Telegraf = require ('d:/ProjetosTelegram/assistente-ratocego/node_modules/telegraf/telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

//var express = require('express');

//var app = express();

/*app.set('port', (process.env.PORT || 5000));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
    }).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
    });*/

//CÓDIGO DOS TECLADOS E INICIALIZAÇÃO DO BOT
const tecladoAssistente = Markup.keyboard([
    ['🔒 Sala VIP', '🐭 Rato Bot'],
    ['💎 Garantia', '🔴 Grupo gratuito'],
    ['🔠 Menu principal']
]).resize().extra()

const tecladoAssistenteSalaVip = Markup.keyboard([
    ['💰 1. Valores dos planos', '✅ 2. Métodos de pagamento'],
    ['🟢 3. Link de pagamento', '🆘 4. Comprei e agora?'],
    ['🔠 5. Menu principal']
]).resize().extra()

const tecladoAssistenteRatobot = Markup.keyboard([
    ['🤑 1. Valor do Rato Bot', '🟢 2. Métodos de pagamento'],
    ['✅ 3. Link de pagamento','🔴 4. Comprei e agora?'],
    ['🔠 5. Menu principal']
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name} ✌`)
    await ctx.reply(`Escolha no menu do seu teclado sobre o que você deseja obter informações:`, tecladoAssistente)  
})
//CÓDIGO DOS TECLADOS E INICIALIZAÇÃO DO BOT

//SALA VIP - MENU PRINCIPAL
bot.hears(['🔒 Sala VIP'], async ctx => {
    await ctx.reply(`Bom, eu vou te enviar agora um áudio curtinho explicando tudo sobre o nosso método:`)
    await ctx.replyWithVoice({source: `${__dirname}/explicandovip.ogg`})
    await ctx.reply('Quer saber os valores dos nossos planos? Clique abaixo em VALORES DOS PLANOS:', tecladoAssistenteSalaVip)
})

bot.hears(['💰 1. Valores dos planos'], async ctx => {
    await ctx.replyWithPhoto({source: `${__dirname}/explicandovalores.jpg`})
    await ctx.reply('Analisou os planos? Agora clique em MÉTODOS DE PAGAMENTO e veja as nossas opções:', tecladoAssistenteSalaVip)
})

bot.hears(['✅ 2. Métodos de pagamento'], async ctx => {
    //await ctx.reply('Agora que você já escolheu os planos, veja nossas opções de pagamento:') 
    await ctx.reply('Utilizamos a plataforma CHATPAY, através dela aceitamos PIX, Boleto bancário ou Cartão de crédito.')
    await ctx.reply('É possível parcelar alguns planos , em até 3x (trimestral), em até 6x (semestral), em até 12x (vitalício).') 
    await ctx.reply('O que achou? Vamos fechar? Assim que realizar o pagamento você receberá automaticamente o link do grupo VIP e já irá operar com a gente! Clique na opção LINK DE PAGAMENTO para realizar a sua compra:', tecladoAssistenteSalaVip)
})

bot.hears(['🟢 3. Link de pagamento'], async ctx => {
    await ctx.reply('Clique nesse link abaixo que você será direcionado a nossa loja virtual 👇') 
    await ctx.replyWithHTML(href="https://site.chatpay.com.br/metodoratocego")
})

bot.hears(['🆘 4. Comprei e agora?'], async ctx => {
    await ctx.reply('Se você pagou por boleto, é necessário aguardar até o mesmo ser compensado.') 
    await ctx.reply('Se você pagou por PIX ou cartão, em até 15 minutos receberá o link do nosso grupo VIP no seu whatsapp e e-mail.') 
    await ctx.reply('Se você recebeu o link mas não consegue entrar, é necessário adicionar o contato da CHATPAY na sua agenda, ai você poderá clicar no link.') 
    await ctx.reply('Deixe uma mensagem no @rcsuporte dizendo "comprei a sala VIP", que assim que possível iremos te enviar o nosso material.') 
})

bot.hears(['🔠 5. Menu principal'], async ctx => {
    await ctx.reply('Menu Principal:', tecladoAssistente)
})
//FINAL DO SALA VIP - MENU PRINCIPAL

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//RATO BOT - MENU PRINCIPAL
bot.hears(['🐭 Rato Bot'], async ctx => {
    await ctx.reply(`Bom, eu vou te enviar agora um áudio curtinho explicando tudo sobre o nosso robô Rato Bot:`)
    await ctx.replyWithVoice({source: `${__dirname}/explicandoobot.ogg`})
    await ctx.reply('Quer saber o valor do nosso BOT? Clique abaixo em VALOR DO RATO BOT:', tecladoAssistenteRatobot)
})

bot.hears(['🤑 1. Valor do Rato Bot'], async ctx => {
    await ctx.replyWithPhoto({source: `${__dirname}/explicandovalores2.jpg`})
    await ctx.reply('Agora clique em MÉTODOS DE PAGAMENTO e veja as nossas opções:', tecladoAssistenteRatobot)
})

bot.hears(['🟢 2. Métodos de pagamento'], async ctx => {
    //await ctx.reply('Agora que você já escolheu os planos, veja nossas opções de pagamento:') 
    await ctx.reply('Utilizamos a plataforma CHATPAY, através dela aceitamos PIX, Boleto bancário ou Cartão de crédito.')
    await ctx.reply('É possível parcelar em até 12x o Rato Bot.') 
    await ctx.reply('O que achou? Vamos fechar? Assim que realizar o pagamento você receberá automaticamente o link do grupo do BOT e já irá operar com a gente! Clique na opção LINK DE PAGAMENTO para realizar a sua compra:', tecladoAssistenteRatobot)
})

bot.hears(['✅ 3. Link de pagamento'], async ctx => {
    await ctx.reply('Clique nesse link abaixo que você será direcionado a nossa loja virtual 👇') 
    await ctx.replyWithHTML(href="https://site.chatpay.com.br/metodoratocego")
})

bot.hears(['🔴 4. Comprei e agora?'], async ctx => {
    await ctx.reply('Se você pagou por boleto, é necessário aguardar até o mesmo ser compensado.') 
    await ctx.reply('Se você pagou por PIX ou cartão, em até 15 minutos receberá o link do nosso grupo do BOT no seu whatsapp e e-mail.') 
    await ctx.reply('Se você recebeu o link mas não consegue entrar, é necessário adicionar o contato da CHATPAY na sua agenda, ai você poderá clicar no link.') 
    await ctx.reply('Na descrição do grupo do BOT tem alguns passos, você precisa segui-los e repassar as informações necessárias para o @rcsuporte.') 
})
//FINAL DO RATO BOT - MENU PRINCIPAL

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//GARANTIA - MENU PRINCIPAL
bot.hears(['💎 Garantia'], async ctx => {
    await ctx.reply(`Em QUALQUER PLANO do nosso método você esta assegurado por uma garantia de 7 dias pela plataforma CHATPAY.`)
    await ctx.reply(`Caso você não se sinta satisfeito, é só solicitar o reembolso que será aprovado na hora e você receberá todo seu dinheiro de volta.`, tecladoAssistente)
})
//FINAL DA GARANTIA - MENU PRINCIPAL

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//GRUPO GRATUITO - MENU PRINCIPAL
bot.hears(['🔴 Grupo gratuito'], async ctx => {
    await ctx.reply(`Se você ainda não tem interesse em ser um MEMBRO VIP do método rato cego, temos aqui um grupo 100% gratuito onde você pode avaliar nosso trabalho.`)
    await ctx.reply(`Entre aqui no nosso grupo gratuito e repasse para os amigos 👇`) 
    await ctx.replyWithHTML(href="https://t.me/metodoratocego")
})
//FINAL DO GRUPO GRATUITO - MENU PRINCIPAL 
bot.hears([])

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//MENU PRINCIPAL - MENU PRINCIPAL
bot.hears(['🔠 5. Menu principal'], async ctx => {
    await ctx.reply('Menu Principal:', tecladoAssistente)
})
//FIM DO MENU PRINCIPAL

bot.startPolling()