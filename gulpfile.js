var gulp = require('gulp');
var pug = require('gulp-pug');

// gulp.task('タスク名', 実行される処理)でタスク作成
gulp.task('default', () => {
  gulp.src(
    ['./pug/**/*.pug', '!./pug/**/_*.pug']
  )
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))

  // .pugファイルを取得
  return gulp.watch('./pug/**/*.pug', function(){
    // gulp.src('取得するファイル') タスクの対象となるファイルを取得
    return(
      gulp.src(
          ['./pug/**/*.pug', '!./pug/**/_*.pug']
      )
        // pipe() 1つ一つの処理をつなげる。
        .pipe(pug({
            pretty: true
        }))
        // gulp.dest('保存先フォルダー') 処理を行ったファイルを指定の場所に保存
        .pipe(gulp.dest('./dist'))
        // returnさせるとコールバック不要らしい
        // .cb()
    );
  })
});