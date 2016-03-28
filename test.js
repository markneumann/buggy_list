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

//sore_finger sore_counter
var finger_id = Math.floor(Math.random()*5+1);
var finger_times = Math.floor(Math.random()*100);

function finger_counter(finger_id, finger_times){
  var type;
  if (finger_id == 1){
    console.log("type 0");
    type = 0;
  }
  else if (finger_id == 5){
    type = 2;
  }
  else{
    type = 1;
  }
  if (finger_times == 0){
    return finger_id-1;
  }
  var count;
  var functions = [function(){return (((finger_times-1)*8)+1);}, function(){return (Math.ceil((finger_times-1)/2)*6 + Math.floor((finger_times-1)/2)*2 + finger_id);}, function(){return ((finger_times-1)*8 +5);} ];
  console.log(finger_times);
  console.log(type);
  count = functions[type]();
  return count;
  // your solution goes forwards -- you
}
console.log(finger_counter(1,0));
