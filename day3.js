function checkinrange(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 10 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(checkinrange(62, 89));
console.log(checkinrange(16, 99));
