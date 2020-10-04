module.exports = (config) => {
  config.addPassthroughCopy({ 'src/assets': 'assets' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
