function arraySameness(array1, array2) {
  if (array1.length !== array2.length) return false

  array1.forEach((letter) => {
    if (!array2.includes(letter)) return false
  })

  return true
}

export default arraySameness;