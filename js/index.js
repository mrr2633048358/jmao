window.onload=function(){
	/*let hearig=document.getElementsByClassName('header-main-right')[0];
	let healis=hearig.getElementsByClassName('cc');
	let heazz=document.getElementsByClassName('heaZz');
	let daozz=document.querySelectorAll('.daozz');
	console.log(healis.length,heazz.length);
	for(let i=0;i<healis.length;i++){
		healis[i].onmouseover=function(){
			heazz[i].style.display='block';
			daozz[i].style.display='block';
			healis[i].className='cc bb';
		}
		healis[i].onmouseout=function(){
			heazz[i].style.display='none';
			daozz[i].style.display='none';
			healis[i].className='cc';
		}
	}*/
	// $('.cc').on('mouseenter',function () {
	// 	$(this).addClass('bb').find('.heaZz').attr('style','display:block;').end().find('.daozz').attr('style','display:block;');
 //    })
 //    $('.cc').on('mouseleave',function () {
 //        $(this).removeClass('bb').end().find('.heaZz').removeAttr('style').end().find('.daozz').removeAttr('style');
 //    })
    $('.cc').hover(function(){
		$(this).addClass('bb').find('.heaZz').attr('style','display:block;').find('.daozz').attr('style','display:block;');
    },function(){
        $(this).removeClass('bb').find('.heaZz').removeAttr('style').find('.daozz').removeAttr('style');
    })




	// banner
	let ban=document.getElementsByClassName('banner-pic')[0];
	let bans=ban.getElementsByTagName('li');
	let banback=document.querySelector('.banback');
	let bancolor=['#D93D41','#2D2D35','#264693','#D93D41','#EEEFF3','#007ECB','#E4E4E4'];
	let list=document.getElementsByClassName('bth-list')[0];
	let lists=list.getElementsByTagName('li');
	console.log(bans);
	let t;
	let num=0;
	t=setInterval(fn,2000);
	/*banback.onmouseover=function(){
		clearInterval(t);
	}
	banback.onmouseout=function(){
		t=setInterval(fn,2000);
	}*/
	$('.banback').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(fn,2000);
	})
	function fn(){
		num++;
		if(num==bans.length){
			num=0;
		}

        $('.banner-pic li').css({opacity: "0", zIndex: "-1"})
        $('.bth-list li').css({backgroundColor: "#666"})

        $('.banner-pic li').eq(num).css({opacity: "1", zIndex: "0"})
        $('.bth-list li').eq(num).css({backgroundColor: "white"})
		$('.banback').css({background:bancolor[num]});
		/*console.log($('.banner-pic li').get(num));
		$('.banner-pic li').removeClass('ban').end().get(num).addClass('ban');
		$('.bth-list li').removeClass('btnli').end().get(num).addClass('btnli');
		$('.banback').css('background',bancolor[num]);*/
		/*for(let j=0;j<bans.length;j++){
			bans[j].className='';
			lists[j].className='';
			banback.style.background='';
		}
		bans[num].className='ban';
		lists[num].className='btnli';
		banback.style.background=bancolor[num];
*/
	}
	// for(let i=0;i<lists.length;i++){
		$('.bth-list li').on('mouseover',function(){
	        $('.banner-pic li').css({opacity: "0", zIndex: "-1"})
	        $('.bth-list li').css({backgroundColor: "#666"})
        	var index = $('.bth-list li').index($(this))
	        $('.banner-pic li').eq(index).css({opacity: "1", zIndex: "0"})
	        $('.bth-list li').eq(index).css({backgroundColor: "white"})
			$('.banback').css({background:bancolor[num]});
			// bans[num].className='';
			// lists[num].className='';
			// banback.style.background=bancolor[i];
			// bans[i].className='ban';
			// lists[i].className='btnli';
			num=index;
		})
	// }

	let banxxk=document.getElementsByClassName('banner-list')[0];
	let xxkli=banxxk.getElementsByTagName('li');
	let tmxxk=document.getElementsByClassName('tm-xxk');
	/*for(let i=0;i<xxkli.length;i++){
		xxkli[i].onmouseover=function(){
			tmxxk[i].style.display='block';
		}
		xxkli[i].onmouseout=function(){
			tmxxk[i].style.display='none';
		}
	}*/
	$('.banner-list li').hover(function() {
		// console.log($('this').find('.tm-xxk'));
		$('.tm-xxk').eq($(this).index()).attr('style','display:block');
	}, function() {
		$('.tm-xxk').eq($(this).index()).attr('style','display:none');
	});


	  /*$('.list2 li').hover(function(){
        $('.itam').eq($(this).index()).addClass('chuxian');
    },function(){
        $('.itam').eq($(this).index()).removeClass('chuxian');
    })*/




	let chao=document.getElementsByClassName('chaoshi-main1-pic');
	let chtop=document.getElementsByClassName('chaoshi-mian-top');
	let cht;
	let chnum=0;
	cht=setInterval(chfn,3000);
	chtop.onmouseover=function(){
		clearInterval(t);
	}
	chtop.onmouseout=function(){
		cht=setInterval(chfn,3000);
	}
	function chfn(){
		chnum++;
		if(chnum==chao.length){
			chnum=0;
		}


        $('.chaoshi-main1-pic').css({opacity: "0", zIndex: "-1"})
        $('.chaoshi-mian-top').css({backgroundColor: "#f1f1f1",color:"000"})

        $('.chaoshi-main1-pic').eq(chnum).css({opacity: "1", zIndex: "0"})
        $('.chaoshi-mian-top').eq(chnum).css({backgroundColor: "00b262",color:"#fff"})
		/*
		for(let i=0;i<chao.length;i++){
			chao[i].className="chaoshi-main1-pic";
			chtop[i].className='chaoshi-mian-top';
		}
		chao[chnum].className='chaoshi-main1-pic feng';
		chtop[chnum].className='chaoshi-mian-top top1';*/
	}



    // 返回
    // let jdback=document.querySelector('.jdTop');
    let leftback=document.querySelector('.jddw-dingbu');
    // jdback.style.transtion='1s';
    // console.dir(jdback);
    /*jdback.onclick=function(){
        animate(document.body,{scrollTop:0},5000);
        animate(document.documentElement,{scrollTop:0},5000);
    }*/
   /* leftback.onclick=function(){
        animate(document.body,{scrollTop:0},500);
        animate(document.documentElement,{scrollTop:0},500);
    }*/
    $('leftback').on('click',function(){
    	animate({scrollTop:0},500);
    })


    // 楼层跳转
	// top
    let jtop=document.querySelector('.jddw-top');
    let jheight=document.querySelector('.pinp-box').offsetTop;
    let boxli=document.querySelectorAll('.chaoshi-box');
    let jdleft=document.querySelector('.jddw-left');
    let navli=document.querySelectorAll('.jddw-left-main>a');
    console.log(navli.length);
    let navbg=['#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036'];
    // console.log(navbg[1]);
    let curron=0;
    window.onscroll=function(){
        let obj=document.body.scrollTop?document.body:document.documentElement;
        if(obj.scrollTop>=jheight){
            console.log(obj.scrollTop);
            jtop.style.height=50+'px';
            jdleft.style.display='block';
        }else{
            jtop.style.height=0;
            jdleft.style.display='none';
        }
        boxli.forEach(function(val,index){
//            console.log(val.scrollTop);
            if(obj.scrollTop>=val.offsetTop-400){
                navli.forEach(function(val,index){
                    val.style.background='';
                })
                navli[index].style.background=navbg[index];
                curron=index;
            }
        })
    }
    navli.forEach(function(val,index){
        val.onclick=function(){
            console.log(boxli[index].offsetTop);
            animate(document.body,{scrollTop:boxli[index].offsetTop},1000);
            animate(document.documentElement,{scrollTop:boxli[index].offsetTop},1000);
            curron=index;
        }
        val.onmousemove=function(){
            val.style.background=navbg[index];
        }
        val.onmouseout=function(){
            if(index!=curron){
                val.style.background='';
            }
        }
    })

/*
	// top
    let jtop=document.querySelector('.jddw-top');
    let jheight=document.querySelector('.pinp-box').offsetTop;
    // console.log(jdtop);
    window.onscroll=function(){
        let obj=document.body.scrollTop?document.body:document.documentElement;
       // console.log(obj.scrollTop);
        if(obj.scrollTop>=jheight){
            console.log(obj.scrollTop);
            jtop.style.height=50+'px';
        }else{
            jtop.style.height=0;
        }
    }
    console.log(jtop.offsetHeight);*/
}