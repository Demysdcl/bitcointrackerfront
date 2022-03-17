export const changeTheme = () => {
  const currentTheme = localStorage.getItem('theme')
  if (currentTheme === 'dark') {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark')
  }
  applyTheme()
}

export const applyTheme = () => {
  const theme = getTheme()
  const classList = document.documentElement.classList

  if (theme === 'dark') {
    classList.remove('dark')
  } else {
    classList.add('dark')
  }
}

export const getTheme = () => {
  let theme = localStorage.getItem('theme')
  if (!theme) {
    localStorage.setItem('theme', 'light')
    theme = 'light'
  }
  return theme
}
