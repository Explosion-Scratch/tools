function i(e,r){return e()?Promise.resolve(e()):new Promise(t=>{let n=setInterval(()=>{e()&&(clearInterval(n),t(e()))},r)})}export{i as u};
