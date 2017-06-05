import * as assert from 'assert'
import env from '../src'

describe('Utils: env', () => {
  it('should return env if defined', () => {
    process.env.ENV_TEST_ENV = 1
    assert.equal(env('ENV_TEST_ENV'), '1')
  })

  it('should return undefined if not defined', () => {
    assert.equal(env('ANOTHER_TEST_ENV'), void 0)
  })

  it('should return default value if env is not defined', () => {
    assert.equal(env('ANOTHER_TEST_ENV', 2), 2)
  })
})
