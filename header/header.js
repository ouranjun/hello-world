let wrap_item = document.querySelectorAll('.wrap_item')
let banner_item = document.querySelectorAll('.banner_item')
let i = 0;
let x = 0
// slider切换函数
//console.time('test');
function slider (item) {
  // 如果当前存在active，则删除active，下一个item 添加 active
  if (item[i].className.indexOf('active') !== -1) {
    item[i].classList.remove('active')
      if (i < item.length) {
        if(i == item.length -1) {
          item[0].classList.add('active')
        } else {
          item[i+1].classList.add('active')
        }
      }
    }
    i++;
    if ( i > item.length -1 ) {
      i = 0;
    }
}
// banner图每隔3秒切换一次
function autoPlay() { 
  timer = setInterval('slider(wrap_item)', 3000);
} /* 自动播放 */
autoPlay()

// banner 切换函数
function nxct() { 
  if (x < banner_item.length - 1 ) {
      banner_item[x].style = 'opacity: 0;'
      banner_item[x+1].style = 'opacity: 1;'
      x++
 } else if(x == banner_item.length - 1) {
      banner_item[x].style = 'opacity: 0;'
      banner_item[0].style = 'opacity: 1;'
      x = 0;
 }

}

// banner图每隔5秒切换一次
 setInterval(nxct, 5000);