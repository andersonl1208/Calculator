/**
 * Class representing a token list, containing properties holding the head and the tail and a function to
 * add a new token. Each token in the list must have previous and next properties.
 */
class TokenList {
  /**
     * Inititializes the head and tail properties to null.
     */
  constructor () {
    this.head = null
    this.tail = null
  }

  /**
     * Adds a token to the end of the TokenList.
     *
     * @param {*} token A token to add to the end of the list. Must contain properties next and previous.
     */
  add (token) {
    if (this.head == null) {
      this.head = token
    } else {
      this.tail.next = token
      token.previous = this.tail
    }
    this.tail = token
  }
}

export default TokenList
