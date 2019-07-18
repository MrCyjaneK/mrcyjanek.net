console.log(`Okey, I don't know what are you doing in here. But github.com/mrcyjanek/mrcyjanek.net is probably what are you looking for. I allow you to do whatever you want here, or with this code, no need to mention me.`);
function cool_redirect(url) {
	itemloop = []
	array = [1,2,3,4,5,6,7,8,9,10,11];
	array.forEach( item => {
	item=document.getElementById(item)
	i=0
	itemloop[item.id]=setInterval(() => {
		item.innerText = item.innerText.substr(0,item.innerText.length-1)
		if (item.innerText=="") {
			i++;
			console.log(i)
			clearInterval(itemloop[item.id])
	    }
	},Number(1200/item.innerText.length).toFixed(0))
	setInterval(() => {
		if (i == 11) {
			setTimeout(() => {window.location.href=url;},200);
			document.body.innerHTML = '<link rel="stylesheet" href="style.css">'
	    }
	},42)
	})
}