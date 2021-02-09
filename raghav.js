function isTouching(no1,no2){
    if (no1.x - no2.x === no1.width/2+ no2.width/2||no2.x - no1.x === no1.width/2+ no2.width/2||no1.y - no2.y === no1.height/2+ no2.height/2||no2.y - no1.y === no1.height/2+ no2.height/2){
    return true
    }else{return false}
  }