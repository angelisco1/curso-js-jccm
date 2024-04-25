const { interval, filter, map, take } = rxjs

const getVideosPublicados = () => {
  return interval(1000)
    .pipe(
      filter(num => num % 2 !== 0),
      map(num => num * 3),
      take(6),
      map(num => `Video nº ${num} publicado. Ve a verlo.`)
    )
}

const videosPublicados$ = getVideosPublicados()

videosPublicados$
  .subscribe(console.log)




// Youtube
//   + Midudev
//   - Learn this
//     - Carlos Azaustre