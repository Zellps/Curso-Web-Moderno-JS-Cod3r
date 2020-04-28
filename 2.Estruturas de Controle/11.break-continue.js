const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}
console.log("fim")

for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
  // evitar usar essa forma de código
  for (b in nums) {
    if ((a == 2) & (b == 3)) break externo //esse break vai deixar de agir no for b para agir no for a por causa do externo
    console.log(`par = ${a}, ${b}`)
  }
}

console.log("fim 2")
