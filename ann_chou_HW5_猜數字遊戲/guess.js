function createAnswer(n = 3){
  let answer = [];
  for (let i=0; i<10; i++) answer[i] = i;
  for (let i = answer.length-1; i>0; i--){
      let rand = parseInt(Math.random()*(i+1));
      [answer[i], answer[rand]] = [answer[rand], answer[i]];
  }    

  let ret = '';
  for (let i=0; i<n; i++){
      ret += answer[i];
  }
  
  return ret;
}
function checkAB(ans, gus){
  let a = 0, b = 0;
  for (let i=0; i<gus.length; i++){
      if (gus.charAt(i) == ans.charAt(i)){
          a++;
      }else if (ans.indexOf(gus.charAt(i)) >= 0){
          b++;
      }
  }
  return `${a}A${b}B`;
}