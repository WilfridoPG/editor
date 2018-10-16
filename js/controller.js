//Escucha la orientacion de la pantalla movil
window.addEventListener("orientationchange", function() {
	 // alert(window.orientation); 
	location.reload(true);
}, false);


$("#nuevo").on('click', function() {
    canvas.clear();
    //fbandera=0;
    //$("#editarfondo").prop('disabled', true);
	    	
// Funcion para descargar memes creado
});
/*

$("#editarfondo").prop('disabled', true);
  //descargar meme
  
  */
$('#descargar').on('click', function() {
  this.href = canvas.toDataURL({
    format: 'png',
    quality: 10
  });
  this.download = 'Meme.png';
});

var estado=0;
$('#colorf').on('click', function() {
     if(estado==0){
        canvas.setBackgroundColor('rgba(0, 0, 0, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
        console.log("estado:"+estado);
    }else if(estado==1){
        canvas.setBackgroundColor('rgba(71, 245, 73, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    
    }else if(estado==2){
        canvas.setBackgroundColor('rgba(71, 245, 235, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    }else if(estado==3){
        canvas.setBackgroundColor('rgba(249, 117, 243, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    }else if(estado==4){
        canvas.setBackgroundColor('rgba(249, 117, 117, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    }else if(estado==5){
        canvas.setBackgroundColor('rgba(239, 249, 117, 0.6)', canvas.renderAll.bind(canvas));
         estado=estado+1;
    console.log("estado2:"+estado);
   
        
    }
    else if(estado==6){
        canvas.setBackgroundColor('rgba(250, 16, 5, 0.6)', canvas.renderAll.bind(canvas));
         estado=estado+1;
    console.log("estado2:"+estado);
   
        
    }else if(estado==7){
        canvas.setBackgroundColor('rgba(255, 255, 0 , 0.6)', canvas.renderAll.bind(canvas));
         estado=estado+1;;
    console.log("estado2:"+estado);
   
        
    }else if(estado==8){
        canvas.setBackgroundColor('rgba(255, 128, 0, 0.6)', canvas.renderAll.bind(canvas));
         estado=estado+1;
    console.log("estado2:"+estado);
   
        
    }else if(estado==9){
        canvas.setBackgroundColor('rgba(255, 255, 255, 0.6)', canvas.renderAll.bind(canvas));
         estado=0;
    console.log("estado2:"+estado);
   
        
    }
   
        /*
    if(estado==0){
        canvas.setBackgroundColor('rgba(4, 151, 250, 0.6)', canvas.renderAll.bind(canvas));
        estado=estado+1;
        console.log("estado:"+estado);
    }if(estado==1){
        console.log("estado:"+estado);
       estado=estado+1;
        
    } if(estado==2){
        console.log("estado:"+estado);
        estado=estado+1;
        
    } if(estado==4){
        console.log("estado:"+estado);
        estado=estado+1;
        
    }if(estado==5){
        console.log("estado:"+estado);
        estado=0;
        
    }*/
    
    
    
});
/*

$.ajax({
   type: "POST",
   dataType: "json",
   async : false,
   url: "fondo.php",
  }).done(function( data, textStatus, jqXHR ) {
    cadena = "";
    $.each(data, function(i,filename) {
      cadena+="<li><a class='thumbnail'><img  style='width:100px;' src='"+ filename +"'  class='agregafondo' ></a></li>";  
    });
    $('#mostrarf').html(cadena);
    
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
    alert("La solicitud a fallado: " +  textStatus);
        console.log( "La solicitud a fallado: " +  textStatus);
    }
  });

$.ajax({
   type: "POST",
   dataType: "json",
   async : false,
   url: "personaje.php",
  }).done(function( data, textStatus, jqXHR ) {
    cadena = "";
    $.each(data, function(i,filename) {
      cadena+="<li><a class='thumbnail'><img src='"+ filename +"' class='agregapersonaje resize-image' ></a></li>";            
    });
    $('#mostrarp').html(cadena);  
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
    alert("La solicitud a fallado: " +  textStatus);
        console.log( "La solicitud a fallado: " +  textStatus);
    }
  });
$.ajax({
   type: "POST",
   dataType: "json",
   async : false,
   url: "globo.php",
  }).done(function( data, textStatus, jqXHR ) {
    cadena = "";
    $.each(data, function(i,filename) {
      cadena+="<li><a class='thumbnail'><img src='"+ filename +"' class='agregaglobo resize-image' ></a></li>";  
    });
    $('#mostrarg').html(cadena);
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
    alert("La solicitud a fallado: " +  textStatus);
        console.log( "La solicitud a fallado: " +  textStatus);
    }
  });
  
  */
	// cargar imagen de fondo 
	/*
document.getElementById('file-5').addEventListener("change", function (e) {
  var file = e.target.files[0];
	var reader = new FileReader();
 	reader.onload = function (event) {
    var img = new Image();
   	img.onload = function (){ 
	    var f_img = new fabric.Image(img,{left: 0,top: 0,width:canvas.width,height:canvas.height,/*angle: 30,opacity: 0.85});
      canvas.setBackgroundImage(f_img);
      canvas.renderAll();
   	}
   	img.src = event.target.result;
    GenerarMeme(img.src);
  }
	reader.readAsDataURL(file);
});

	// cargar imagen sobre el fondo 
document.getElementById('file-6').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result; 
   	fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({left: 10, top: 100, angle: 00,width:300, height:200,cornerStyle: 'circle',cornerSize: 20,}).scale(0.9);
      canvas.add(oImg).renderAll();
     	//canvas.setActiveObject(oImg);
     	//canvas.toDataURL({format: 'png', quality: 0.8});
   	});
    //GenerarMeme(data.src);
 	};
  reader.readAsDataURL(file);
});
*/
	//Agrupar elementos	
	
/*	
$("#agrupar").on('click', function() {
  if (canvas.getActiveGroup()) {
    var activegroup = canvas.getActiveGroup();
    var objectsInGroup = activegroup.getObjects();
    activegroup.clone(function(newgroup) {
      canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
		    canvas.remove(object);  
	    });
      canvas.add(newgroup);  
    });
  }else
    alert("Por favor seleccione dos o más elementos");
});
	// Desagrupar Elementos	
$("#desagrupar").click(function(){
  var activeObject = canvas.getActiveObject();
  if(canvas.getActiveObject() && activeObject.type=="group"){  	
    var items = activeObject._objects;
    activeObject._restoreObjectsState();
    canvas.remove(activeObject);
    for(var i = 0; i < items.length; i++) {
      canvas.add(items[i]);
      canvas.item(canvas.size()-1).hasControls = true;
    }
    canvas.renderAll();    
  }else
    alert("Por favor seleccione elemento agrupado");
});
	// Funcion para eliminar elementos 
	
	*/
$('#remove').click(function(){
  var activeObject = canvas.getActiveObject(),
  activeGroup = canvas.getActiveGroup();
  if (activeObject) {
    canvas.remove(activeObject);
  }
  else if (activeGroup) {
    var objectsInGroup = activeGroup.getObjects();
    canvas.discardActiveGroup();
    objectsInGroup.forEach(function(object) {
      canvas.remove(object);
    });               
  }else{
		M.toast({html: 'Seleccione un elemento para eliminar'});
	}
});

/*
var linkcreado=0; 
 //mandar imagen al servidor
var linkservidor=""; 
$(".compartir").click(function(){
    joomlaForm = document.getElementById('joomlaForm');
    joomlaForm.image.value = canvas.toDataURL();
    joomlaForm.submit();
});
$("#link").click(function(){
	window.plugins.socialsharing.share(null, null, null, linkservidor);
  //$("#link").hide();
});	
//$(window).trigger("orientationchange");
var canvas = new fabric.Canvas('canvas');
f = fabric.Image.filters;
/*canvas.setDimensions({
    width: $(".panel-body").width(),
    height:$(".panel-body").height(),
  });*/ 

var canvas = new fabric.Canvas('canvas');

  canvas.setDimensions({
    width: $("#contenedor").width(),
    height:$("#contenedor").height()
  }); 



//console.log("ancho: "+screen.width +" largo: "+screen.height);
////////////////////////////REVISION /////////////////////////////////////////////////////////////////////////////////////////////////////////
	//var canvas = new fabric.Canvas('canvas');
fabric.Object.prototype.transparentCorners = false;

var fondo, personaje, fbandera=0, pbandera=0;
var ContextoCanvas = canvas.getContext("2d");
	//Generar el meme
//fondos=document.getElementById("image").src; 
//GenerarMeme(fondos);
	//Volver los fondos a tamaño pequeño 
$(".agregafondo" ).on( "click", function() {
  fondos=document.getElementById("image").src=this.src;
  GenerarMeme(fondos); 
});
//agregrar personajes
$(".agregapersonaje" ).on( "click", function() {
	document.getElementById("image").src=this.src;
	var ObjetoImagen = new Image();
  ObjetoImagen.onload = function(){     
    var f_img = new fabric.Image(ObjetoImagen);
    canvas.add(f_img.set({ left:canvas.width/1.3, top:canvas.height/2, angle:0, cornerStyle: 'circle', cornerSize: 20, }).scale(0.35));
  }
  ObjetoImagen.src = document.getElementById("image").src;      
});
	//Volver los Globos a tamaño pequeño 
$(".agregaglobo" ).on( "click", function() {
	globos = document.getElementById("image").src=this.src;
	$("#modalglobo").modal();
});
	//Funcion para generar el meme de fondo
function GenerarMeme(fondos){
  $("#editarfondo").prop('disabled', false);
  fbandera=1;
	ObjetoImagen = new Image();
  //imgObj.src = url + '?' + new Date().getTime();
  ObjetoImagen.crossOrigin = 'anonymous';
	ObjetoImagen.src = fondos ; 
  ObjetoImagen.onerror = function() { console.log("cross-origin image load error"); }
  original.src=  ObjetoImagen.src; 
	filtro.src=  ObjetoImagen.src;
  filtro1.src=  ObjetoImagen.src;
  filtro2.src=  ObjetoImagen.src;
  filtro3.src=  ObjetoImagen.src;
        //filtro4.src=document.getElementById("image").src;
 	ObjetoImagen.onload = function(){
    var f_img = new fabric.Image.fromURL(ObjetoImagen.src, function( ObjetoImagen ){                
      ObjetoImagen.width = canvas.width;
      ObjetoImagen.height = canvas.height;
      canvas.setBackgroundImage(ObjetoImagen);
      canvas.renderAll();
      function removefilter(){
        ObjetoImagen.filters = []; 
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      }
      $('#original').click(function(){
        removefilter();
      });
      $('#filtro').click(function(){      
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Grayscale());
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#filtro1').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Invert());
       // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
      });
      $('#filtro2').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Sepia2());
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#filtro3').click(function(){
        removefilter();
        ObjetoImagen.filters.push(new fabric.Image.filters.Convolute({
        matrix:[ 1/9, 1/9, 1/9,
               1/9, 1/9, 1/9,
                1/9, 1/9, 1/9 ]
        }));
        // apply filters and re-render canvas when done
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('.brightness').on('click', function() {
          //var obj = canvas.getActiveObject();
        ObjetoImagen.filters[5] = new f.Brightness({brightness: parseInt($('#brightness-value').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#brightness-value').on('change', function() {
        //var obj = canvas.getActiveObject();
        ObjetoImagen.filters[5]['brightness'] = parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
      });                
      $('#gradient-transparency').on('click', function() {
        ObjetoImagen.filters[7] = new f.GradientTransparency({threshold: parseInt($('#gradient-transparency-value').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#gradient-transparency-value').on('change', function() {
        ObjetoImagen.filters[7]['threshold'] = parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas)); 
      }); 
      $('#pixelate').on('click', function() {
        ObjetoImagen.filters[8]= new f.Pixelate({ blocksize:parseInt($('#pixelate-value').val(),10)});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#pixelate-value').on('change', function() {
        ObjetoImagen.filters[8]['blocksize']=parseInt($(this).val(),10);
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });
      $('#tint').on('click', function() {
        ObjetoImagen.filters[12] = new f.Tint({opacity: parseFloat($('#tint-opacity').val())});
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));                   
       //ObjetoImagen.filters[7] = new f.Saturation({saturation: parseFloat($('#tint-opacity').val())});
        //ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));                    
      });
      $('#tint-opacity').on('change', function() {                  
        ObjetoImagen.filters[12]['opacity']=parseFloat($(this).val());
        //ObjetoImagen.filters[7]['saturation']=parseFloat($(this).val());
       //applyFilterValue(6, 'contrast', parseFloat(this.value));
        ObjetoImagen.applyFilters(canvas.renderAll.bind(canvas));
      });              
    });
	};
	fondo = ObjetoImagen.src;
		
};
	//Agregar Personaje
	//Agregar Globos
function AgregarGlobos(){	
  var textglobo = document.getElementById('textoglobo').value;
  var cantidad;
  if (textglobo) {
    var valor= $('input:radio[name=optradio]:checked').val();
    //console.log(valor);
    if (valor=="1") {
      cantidad=canvas.width-100;
         //alert(canvas.height);
    }else  
    cantidad=10;
		var ObjetoImagen = new Image();
		ObjetoImagen.onload = function(){	
		  var f_img = new fabric.Image(ObjetoImagen);
		  canvas.add(f_img.set({ left:cantidad, top:100, angle:0, cornerStyle: 'circle',cornerSize: 20, }).scale(0.15));  
		  var iText7 = new fabric.Text(textglobo, {
 		    padding: 7,
		    fontSize:f_img.getBoundingRectHeight() /8,
		    left:cantidad,
		    cornerStyle: 'circle',
        cornerSize: 20,
  		  top:100
		  });
		  canvas.add(iText7);
		};
		ObjetoImagen.src = document.getElementById("image").src; 
    //document.getElementById('text-cont').value=document.getElementById('textoglobo').value;
  }
  document.getElementById('textoglobo').value="";
}

	// Configuracion de texto
	/*
document.getElementById('font-family').onchange = function() {
  canvas.getActiveObject().setFontFamily(this.value);
  canvas.renderAll();
};      
        //console.log(JSON.stringify(canvas.toDatalessJSON()));
$('#izquierda').click(function(){
  canvas.getActiveObject().setTextAlign('left');
  canvas.renderAll();
});
$('#centrar').click(function(){
  canvas.getActiveObject().setTextAlign('center');
  canvas.renderAll();
});
$('#derecha').click(function(){
  canvas.getActiveObject().setTextAlign('right');
  canvas.renderAll();
});
*/

$('#colort').click(function(){
  if(estado==0){
        canvas.getActiveObject().setFill("#FF0000");
        canvas.renderAll();
        estado=estado+1;
        console.log("estado:"+estado);
    }else if(estado==1){
        canvas.getActiveObject().setFill("#F7FF00");
        canvas.renderAll();
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    
    }else if(estado==2){
        canvas.getActiveObject().setFill("#1FFF00");
        canvas.renderAll();
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    }else if(estado==3){
        canvas.getActiveObject().setFill("#00FFF7");
        canvas.renderAll();
        estado=estado+1;
    console.log("estado2:"+estado);
    
        
    }else if(estado==4){
        canvas.getActiveObject().setFill("#0008FF");
        canvas.renderAll();
        estado=estado+1;
    
    
        
    }else if(estado==5){
          canvas.getActiveObject().setFill("#D100FF");
          canvas.renderAll();
         estado=estado+1;
    
   
        
    }else if(estado==6){
          canvas.getActiveObject().setFill("#FF00B2");
          canvas.renderAll();
         estado=estado+1;
    
   
        
    }else if(estado==7){
          canvas.getActiveObject().setFill("#CF950E");
          canvas.renderAll();
          estado=estado+1;
    
   
        
    }else if(estado==8){
          canvas.getActiveObject().setFill("#FFFFFF");
          canvas.renderAll();
         estado=estado+1;
    
   
        
    }
    else if(estado==9){
          canvas.getActiveObject().setFill("#000000");
          canvas.renderAll();
         estado=0;
    
   
        
    }

  
}); 


/*         
$('.colorf').click(function(){
  canvas.getActiveObject().setTextBackgroundColor(this.value);
  canvas.renderAll();
});
	// Funcion para agregar texto
function activar(){
	$("#modaltext").modal();
}
function activareditar(){
  var obj = canvas.getActiveObject();
  if(canvas.getActiveObject())
  if(obj.get('type')=='text'){
    document.getElementById('text-cont').value=obj.getText();
    $("#modaleditar").modal();
  }else
    alert("Selecione un texto");
    else
      alert("Seleccione el texto");  
}
*/
function agregarTexto(){
		//colort = document.getElementById("colort").value;
		//colorf = document.getElementById('.colorf').value;
	var texto =$('.textomeme').val();
    console.log("hola texot:"+texto);
	//var family = document.getElementById('font-family').value;
  if (texto ) {
                //document.getElementById("tamaño").value;
		//textArriba=document.getElementById("txtTextoArriba").value;
		var Text = new fabric.Text(texto, {
		fontSize: 40,  
		left:canvas.width/3 ,
    //fontWeight: 'bold',
    //stroke: '#ff1318',
  //strokeWidth:1,
    stroke: '#c3bfbf',
    strokeWidth:0.5,
    //shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
  		top: 100,
		textAlign:'left',
    	//	backgroundColor:colorf,
    cornerStyle: 'circle',
    cornerSize: 20,
        //textBackgroundColor:
        //fontFamily: 'Impact',
  		//fontFamily: family,
		padding: 1,
  		
		});
	//iText.setColor(colort);
		canvas.add(Text);
  }
  $('.textomeme').val("");	
}
/*
	//eventos con el mouse al seleccionar personaje y texto
canvas.on({
  'mouse:down': function(e) {
    if (e.target) {
      e.target.opacity = 0.5;
      canvas.renderAll();
      // $("#mytexto").show();
    }
  },
  'mouse:up': function(e) {
  	if (e.target) {
     	e.target.opacity = 1;
     	canvas.renderAll();
      //$("#mytexto").hide();
 		}
 	},     
  'object:moved': function(e) {
  	e.target.opacity = 0.5;
  },
  'object:modified': function(e) {
  	e.target.opacity = 1;
  }
});

/*activar los div de los filtros */
/*
 $(".brightness").click(function () {
      activardiv("#myDIV", "#myDIV1","#myDIV2","#myDIV3");  
    } )  
 	 $("#gradient-transparency").click(function () {
    activardiv("#myDIV1","#myDIV","#myDIV2","#myDIV3");
	})
	 $("#pixelate").click(function () {
    activardiv("#myDIV2","#myDIV1","#myDIV","#myDIV3");
	})
	 $("#tint").click(function () {
    activardiv("#myDIV3","#myDIV2","#myDIV1","#myDIV");
     
	})
   function activardiv(div, div1,div2,div3){
      $(div).show();
      $(div1).hide();
      $(div2).hide();
      $(div3).hide();   
   }

	//cabios de los iconos
  $(document).ready(function () {
    $(".imagenI").attr('src', 'img/inicio-activo.png');
    $(".Inicio").css("color", "#ffbc00");

    $(".nuevof").click(function () {
      activardiv("#divinicio", "#divfondo","#divpersonaje","#divglobo","#divtexto","#diveditar"); 
      $(".nuevof").attr('src', 'img/nuevo.png');
      $(".imagenI").attr('src', 'img/inicio-activo.png');
      $(".editarf").attr('src', 'img/editar/editar-icon.png');
      fondos_personajes();
      texto_globo();
      coloresTexto(".Inicio",".Fondos",".Personajes",".Texto",".Globos",".editar");
    })
    $(".imagenI").click(function () {
       activardiv("#divinicio", "#divfondo","#divpersonaje","#divglobo","#divtexto","#diveditar"); 
      $(".imagenI").attr('src', 'img/inicio-activo.png');
      $(".editarf").attr('src', 'img/editar/editar-icon.png');
      fondos_personajes();
      texto_globo();
      coloresTexto(".Inicio",".Fondos",".Personajes",".Texto",".Globos",".editar");
    })
    $(".imagenf").click(function () {
      activardiv("#divfondo", "#divinicio","#divpersonaje","#divglobo","#divtexto","#diveditar"); 
      $(".imagenf").attr('src', 'img/fondos-icon-active.svg');
      $(".imagenp").attr('src', 'img/personajes-icon.svg');
      editar_inicio();
      texto_globo();
      coloresTexto(".Fondos",".Personajes",".Texto",".Globos",".editar",".Inicio");
    })
    $(".imagenp").click(function () {
       activardiv("#divpersonaje", "#divfondo","#divinicio","#divglobo","#divtexto","#diveditar");
      $(".imagenp").attr('src', 'img/personajes-icon-copy.svg');
      $(".imagenf").attr('src', 'img/fondos-icon.svg');
      editar_inicio();
      texto_globo();
      coloresTexto(".Personajes",".Texto",".Globos",".editar",".Inicio",".Fondos");
    })
   $(".imagent").click(function () {
      activardiv("#divtexto", "#divfondo","#divpersonaje","#divglobo","#divinicio","#diveditar");
      $(".imagent").attr('src', 'img/texto-icon-copy.svg');
      $(".imageng").attr('src', 'img/globos-icon.svg');
      editar_inicio();
      fondos_personajes();
      coloresTexto(".Texto",".Globos",".editar",".Inicio",".Fondos",".Personajes");
    })
    $(".imageng").click(function () {
       activardiv("#divglobo", "#divfondo","#divpersonaje","#divinicio","#divtexto","#diveditar");
      $(".imageng").attr('src', 'img/globos-icon-copy.svg');
      $(".imagent").attr('src', 'img/texto-icon.svg');
      editar_inicio();
      fondos_personajes();
      coloresTexto(".Globos",".editar",".Inicio",".Texto",".Fondos",".Personajes");
    })
    $(".editarf").click(function () {
      if (fbandera==1) {
        activardiv("#diveditar", "#divfondo","#divpersonaje","#divinicio","#divtexto","#divglobo");
      $(".editarf").attr('src', 'img/editar/editar-activo.png');
      $(".imagenI").attr('src', 'img/inicio.png');
      fondos_personajes();
      texto_globo();
      coloresTexto(".editar",".Inicio",".Texto",".Fondos",".Personajes",".Globos");
      //alert("verdadero");
    }
    else
      alert("Eliga un fondo para editar");
      
    })
    function editar_inicio(){
      $(".editarf").attr('src', 'img/editar/editar-icon.png');
      $(".imagenI").attr('src', 'img/inicio.png');
    }
    function texto_globo(){
      $(".imagent").attr('src', 'img/texto-icon.svg');
      $(".imageng").attr('src', 'img/globos-icon.svg');
    }
    function  fondos_personajes(){
      $(".imagenf").attr('src', 'img/fondos-icon.svg');
      $(".imagenp").attr('src', 'img/personajes-icon.svg');
    }
    function coloresTexto(activar,desactv,desactv1,desactv2,desactv3,desactv4){
    $(activar).css("color", "#ffbc00");
    $(desactv).css("color", "#b0b0b1");
    $(desactv1).css("color", "#b0b0b1");
    $(desactv2).css("color", "#b0b0b1");
    $(desactv3).css("color", "#b0b0b1");
    $(desactv4).css("color", "#b0b0b1");
    }
    function activardiv(div, div1,div2,div3,div4,div5){
      $(div).show();
      $(div1).hide();
      $(div2).hide();
      $(div3).hide();
      $(div4).hide();
      $(div5).hide();   
   }
  $(".Filtersf").click(function () {
    $("#divcombinar").hide();
    $("#divfilter").show(); 
    $(".Filtersf").attr('src', 'img/shape-26.svg');
    $(".Editsf").attr('src', 'img/shape-24.svg');

    $(".Filters").css("color", "#ffbc00");
    $(".Edits").css("color", "#b0b0b1");
  })
  $(".Editsf").click(function () {
    $("#divfilter").hide(); 
    $("#divcombinar").show();

    $(".Editsf").attr('src', 'img/combinar.png');
    $(".Filtersf").attr('src', 'img/shape-26-noact.png');
     $(".Brillof").attr('src', 'img/brillo-activo.png');

      $(".Pixelf").attr('src', 'img/pixel.png');
      $(".Transparenciaf").attr('src', 'img/transparencia.png');
      $(".Opacidadf").attr('src', 'img/opacidad.png');


    $(".Edits").css("color", "#ffbc00");
    $(".Brillo").css("color", "#ffbc00");
    $(".Filters").css("color", "#b0b0b1");
    $(".Transparencia").css("color", "#b0b0b1");
    $(".Pixel").css("color", "#b0b0b1");
    $(".Opacidad").css("color", "#b0b0b1");
  })
  $(".Brillof").click(function () {
     $(".Brillof").attr('src', 'img/brillo-activo.png');
    $(".Transparenciaf").attr('src', 'img/transparencia.png');
    $(".Pixelf").attr('src', 'img/pixel.png');
    $(".Opacidadf").attr('src', 'img/opacidad.png');

     coloresfiltro(".Brillo",".Transparencia",".Pixel",".Opacidad");
  })
  $(".Transparenciaf").click(function () {
      $(".Transparenciaf").attr('src', 'img/transparencia-activo.png');
      $(".Pixelf").attr('src', 'img/pixel.png');
      $(".Brillof").attr('src', 'img/brillo.png');
      $(".Opacidadf").attr('src', 'img/opacidad.png');
    coloresfiltro(".Transparencia",".Pixel",".Opacidad",".Brillo");
  })
  $(".Pixelf").click(function () {
     $(".Pixelf").attr('src', 'img/pixel-activo.png');
    $(".Transparenciaf").attr('src', 'img/transparencia.png');
    $(".Brillof").attr('src', 'img/brillo.png');
    $(".Opacidadf").attr('src', 'img/opacidad.png');
    coloresfiltro(".Pixel",".Opacidad",".Brillo",".Transparencia");
  })
  $(".Opacidadf").click(function () {
     $(".Opacidadf").attr('src', 'img/opacidad-activo.png');
    $(".Transparenciaf").attr('src', 'img/transparencia.png');
    $(".Brillof").attr('src', 'img/brillo.png');
    $(".Pixelf").attr('src', 'img/pixel.png');

    coloresfiltro(".Opacidad",".Brillo",".Transparencia",".Pixel");
  })
  function coloresfiltro(activar,desactv,desactv1,desactv2){
    $(activar).css("color", "#ffbc00");
    $(desactv).css("color", "#b0b0b1");
    $(desactv1).css("color", "#b0b0b1");
    $(desactv2).css("color", "#b0b0b1");
  }
  })
  $(document).ready(function(){
    $("#boton").click(function(){
      alert('El tamaño del div es: ' + $("#tab_default_1").width() + 'pixels');     
    }); 
  });
 document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:  /* Up arrow */
        /*
      if(canvas.getActiveObject()){
        canvas.getActiveObject().top -= 5;
        canvas.renderAll();
      }
    break;
    case 40:  /* Down arrow  */
        /*
      if(canvas.getActiveObject()){
        canvas.getActiveObject().top += 5;
        canvas.renderAll(); 
      }
    break;
    case 37:  /* Left arrow  */
        /*
      if(canvas.getActiveObject()){
        canvas.getActiveObject().left -= 5; 
        canvas.renderAll();
      }
    break;
    case 39:  /* Right arrow  */
        /*
      if(canvas.getActiveObject()){
        canvas.getActiveObject().left += 5; 
        canvas.renderAll();
      }
    break;
    case 46:  /* delete */
        /*
     activeGroup = canvas.getActiveGroup();
      if(canvas.getActiveObject()){
        canvas.getActiveObject().remove(); 
      }else
      if (activeGroup) {
        var objectsInGroup = activeGroup.getObjects();
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
        canvas.remove(object);
      });               
      }
    break;
    case 67: // Ctrl+C
      copy();
    break;
    case 86:
      paste();     
    break;
  }
}

var copiedObject,
copiedObjects = new Array();
function copy(){
  copiedObjects = new Array();
  if(canvas.getActiveGroup()){
    //console.log(canvas.getActiveGroup().getObjects());
    canvas.getActiveGroup().getObjects().forEach(function(o){
    var object = fabric.util.object.clone(o);
    copiedObjects.push(object);
    });             
  }
 else if(canvas.getActiveObject()){
    var object = fabric.util.object.clone(canvas.getActiveObject());
    copiedObject = object;
    copiedObjects = new Array();        
  }
}
function paste(){
  if(copiedObjects.length > 0){
   for(var i in copiedObjects){
      copiedObjects[i]=fabric.util.object.clone(copiedObjects[i]);     
      copiedObjects[i].set("top", copiedObjects[i].top+100);
      copiedObjects[i].set("left", copiedObjects[i].left+100);     
      canvas.add(copiedObjects[i]);
      canvas.item(canvas.size() - 1).hasControls = true;
    }                
  }
  else if(copiedObject){
    copiedObject= fabric.util.object.clone(copiedObject);
    copiedObject.set("top", 150);
    copiedObject.set("left", 150);
    canvas.add(copiedObject);
    canvas.item(canvas.size() - 1).hasControls = true;
  }
  canvas.renderAll();  
}
$('#text-cont').keyup(function() {
    valortext($(this).val());
});
function valortext(value) {
  var obj = canvas.getActiveObject();
  if (obj) {      
      obj.setText(value);
      canvas.renderAll();  
  }
}

/*

//fabric.Object.prototype.padding = 50;
 // fabric.Object.prototype.Color ='#333' ;
fabric.Object.prototype.transparentCorners = false;	
fabric.Image.fromURL('personaje1.png', function(img) {
	canvas.add(img);
	//tamano de lo cuadritos para agrandar
	//canvas.item(1)["centeredScaling"]=true;
	//canvas.item(1)["cornerSize"]=20;
	//canvas.item(0)["rotatingPointOffset"]=40;
	//canvas.item(0)["borderColor"]="#040404";
	//canvas.item(0)["cornerColor"]="#040404";
	//canvas.item(0)["hasControls"]=false;
	//canvas.item(0)["selectable"]=false;
      	
 	 });
 
*/

  var drawingModeEl = document.getElementById('drawing-mode'),
      drawingOptionsEl = document.getElementById('drawing-mode-options'),
      drawingColorEl = document.getElementById('drawing-color'),
      drawingLineWidthEl = document.getElementById('drawing-line-width'),
      drawingShadowWidth = document.getElementById('drawing-shadow-width');

  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

  canvas.on('path:created', function() {
    updateComplexity();
  });

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });

      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = '../assets/honey_im_subtle.png';

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
  }

  document.getElementById('drawing-mode-selector').addEventListener('change', function() {

    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'texture') {
      canvas.freeDrawingBrush = texturePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
  });

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadowBlur = 0;
  }

  document.getElementById('canvas-background-picker').addEventListener('change', function() {
    canvas.backgroundColor = this.value;
    canvas.renderAll();
  });
  
