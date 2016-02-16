var array = [99,35,17,221,19,993,998,891,1,4,2,9,8,9,9]

function weird_sort(array){
  var max_length = 0;
  var final_array =[];
  for (var i = 0; i < array.length; i ++){
    var j = array[i].toString().length;
    if (j > max_length){
      max_length = j;
    }
  }
  var r = 0;
  while (r < 3){
    var temp_obj = {0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]};

    for (var i = 0; i < array.length; i ++){
      var j = array[i].toString().length-1;
      // console.log(j);
      if ((j-r) >= 0){
        // console.log(Math.floor(array[i]/Math.pow(10,(r)))%10);
        //99
        temp_obj[Math.floor(array[i]/Math.pow(10,(r)))%10].push(array[i]);

      }
      else{
        temp_obj[Math.floor(array[i]/Math.pow(10,j))].push(array[i]);
      }
    }
    // console.log(temp_obj);
    array = [];
    for (var k = 9; k >=0; k --){
      // console.log(temp_obj);
      for (var l = 0; l < temp_obj[k].length; l ++){
        array.push(temp_obj[k][l]);
      }
    }
    // console.log("here", array);
    r ++;
  }




}

weird_sort(array);
console.log(array);
console.log('hello');
