const { fromEvent, map, startWith, scan } = rxjs


const like$ = fromEvent(document.getElementById('btnLike'), 'click')
  .pipe(
    map(() => 1),
    startWith(0),
    scan((acc, num) => acc + num, 0)
  )


like$
  .subscribe((num) => {
    console.log(num)
    document.getElementById('numLikes').innerText = num
  })
