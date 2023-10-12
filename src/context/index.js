import React from 'react'

const ReactContext = React.createContext({
  darkMode: '',
  toggleDarkMode: () => {},
  selectedOption: '',
  updateSelectedOptions: () => {},
  savedVideos: [],
  updateSavedVideos: () => {},
})

export default ReactContext
