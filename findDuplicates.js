function findDuplicate(chunk) {
  let result;
  let chunkString = chunk.toString();
  chunkString = chunkString.slice(chunkString.indexOf(';') + 1);
  let chunkArray = chunkString.split(',')

  chunkArray.map((char, index) => {
    chunkArray.map((charInner, indexInner) => {
      if (char === charInner && index !== indexInner)
        result = char
    })
  })
  console.log(result)
}


findDuplicate(['5;0,1,2,3,0'])
findDuplicate(['20;0,1,2,3,4,5,6,7,8,9,10,11,12,13,4,14,15,16,17,18'])