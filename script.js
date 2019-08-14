console.log(`Okey, I don't know what are you doing in here. But github.com/mrcyjanek/mrcyjanek.net is probably what are you looking for. I allow you to do whatever you want here, or with this code, no need to mention me.`);
function cool_redirect(url) {
	itemloop = []
	array = [1,2,3,4,5,6,7,8,9,10,11,12];
	array.forEach( item => {
	item=document.getElementById(item)
	i=0
	itemloop[item.id] = setInterval(() => {
		item.innerText = item.innerText.substr(0,item.innerText.length-1)
		if (item.innerText=="") {
			i++;
			clearInterval(itemloop[item.id])
	    }
	},Number(1200/item.innerText.length).toFixed(0))
	y = 'n';
	g = setInterval(() => {
		if (y == 'n') {
			setTimeout(() => {window.location.href=url;},200);
			document.body.innerHTML = '<link rel="stylesheet" href="style.css">'
			y = 'y'
			clearInterval(g);
		}
	},1400)
	})
}
function cool_show(what,where,href = '#') {
	item = document.getElementById(where)
	begin = item.innerText
	target = what
	i = 0
	y = setInterval(() => {
		item.innerText = target.substr(0,i-1)+begin.substr(i)
		i++;
		if (item.innerText == target) {
			clearInterval(y)
			item.href = href
		}
	},Number(2048/target.length).toFixed(0))
}
