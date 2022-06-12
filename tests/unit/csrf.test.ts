import 'isomorphic-fetch'
import { Header, Param, Token } from '../../src/lib/csrf'

describe(Header, () => {
  describe('.set', () => {
    it('sets CSRF header', () => {
      const token = 'abcdef'
      const header = new Header
      const headers = header.set({csrfToken: token})

      expect(headers.get(Header.key())).toBe(token)
    })
  })
})

describe(Param, () => {
  describe('.set', () => {
    it('sets CSRF param', () => {
      const token = 'abcdef'
      const param = new Param
      const params = param.set({csrfToken: token})

      expect(params[Param.key()]).toBe(token)
    })
  })
})

describe(Token, () => {
  describe('.verify', () => {
    it('verifies token', () => {
      const token = 'abcdef'

      expect(new Token(token).verify(token)).toBe(true)
      expect(new Token(token).verify('wrong-token')).toBe(false)
    })
  })
})
