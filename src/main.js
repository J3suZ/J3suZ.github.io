$(document).click(function () {if ($(this)[0].activeElement.tagName == "BODY" ||$(this)[0].activeElement.id == "btnCloseMenu" ||$(this)[0].activeElement.tagName == "A"){$("#btnMenu").removeClass("active");}else if($(this)[0].activeElement.id == "btnMenu") $("#btnMenu").toggleClass("active")});
$(document).ready(function () {$("#loaderSpinner").animate({ opacity: 0 }, 500, function () {  $(this).remove();});$("#loaderText").animate({ opacity: 0 }, 500, function () {  $(this).remove();});$("#container").attr({"data-show": "true",}); $('#footer').attr("data-show", "")});
let saveScroll = 0; let header = $("#header");
$(window).scroll(function () {let nowScroll = $(this).scrollTop(); if (nowScroll >= saveScroll && saveScroll < nowScroll) {  $(header).attr("data-scrolled", "true");  saveScroll = nowScroll;} else if (nowScroll == 0) {  $(header).removeAttr("data-scrolled");} else {  $(header).attr("data-scrolled", "false");  saveScroll = nowScroll;}});
let vod = document.getElementById('presentationVod')
$('#btnVod').click(function (){$('#posterVod').hide(1000);$(this).remove(); vod.paused ? vod.play() : vod.pause();})
$('#addVod').click(function(){$('#modal').attr("data-hidden", "false")}); $('.btn_close_modal').click(function(){$('#modal').attr("data-hidden", "true")})
$('.btn_scroll_menu').click(function(e){e.preventDefault();if($(e.target)[0].id == 'menu_inicio'){window.scroll({top:0, behavior: 'smooth'})}else if($(e.target)[0].id == 'menu_vods'){window.scroll({top: $('#videos').position().top - 200, behavior: 'smooth'})}else if($(e.target)[0].id == 'menu_servicios'){   window.scroll({top: $('#servicios').position().top - 100, behavior: 'smooth'})}else if($(e.target)[0].id == 'menu_reco'){   window.scroll({top: $('#recomendaciones').position().top - 30, behavior: 'smooth'})}else if($(e.target)[0].id == 'menu_contacto'){   window.scroll({top: $('#contacto').position().top, behavior: 'smooth'})}})
$('#openVodsSeccion').click(function(){$('#containerVods').addClass('appear');$('#containerVods').removeClass('desappear'); $('body').css({height: '100vh', overflow: 'hidden'})}); $('#btnCloseVodsSeccion').click(function(){$('#containerVods').addClass('desappear'); $('#containerVods').removeClass('appear');$('body').css({height: '100%', overflow: 'auto'})});
$('.btn_modal_open-info-contact').click(function(){$('#modalInfoContact').attr('data-hidden', 'false')});$('.btn_close_modal-info-contact').click(function(){$('#modalInfoContact').attr('data-hidden', 'true')})