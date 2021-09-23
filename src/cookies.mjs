export const cookies = {
  create: function (name, value) {
    setTimeout(() => {
      // Run in a different thread so exceptions are reported but
      // don't interrupt flow.
      document.cookie = name + "=" + value + "; path=/"
    }, 0)
  },
  read:   function (name) {
    const nameEQ = name + "="
    let ca
    try {
      ca = document.cookie.split(';')
    } catch (e) {
      return null
    }

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length)
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length)
      }
    }
    return null
  },
}
