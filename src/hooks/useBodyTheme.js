function useBodyTheme(theme) {
    const backgroundColor = theme ? "#212529" : "#ffffff"
    const textColor = theme ? "#ffffff" : "#333333"

    document.body.style.background = backgroundColor
    document.body.style.color = textColor
}

export default useBodyTheme