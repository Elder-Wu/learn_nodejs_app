function isDevMode() {
    return process.env.NODE_ENV !== "production"
}

module.exports = {
    isDevMode: isDevMode,
}