import * as assert from 'assert'
import env, {glob} from '../src'

describe('Utils: env', () => {
  it('should return env if defined', () => {
    process.env.ENV_TEST_ENV = '1'
    assert.equal(env('ENV_TEST_ENV'), '1')
  })

  it('should return undefined if not defined', () => {
    assert.equal(env('ANOTHER_TEST_ENV'), void 0)
  })

  it('should return default value if env is not defined', () => {
    assert.equal(env('ANOTHER_TEST_ENV', 2), 2)
  })

  describe('with converter', () => {
    it('should return env if defined', () => {
      process.env.ENV_TEST_ENV = '1'
      assert.equal(env('ENV_TEST_ENV', null, Number), 1)
    })

    it('should return expected value by converter if not defined', () => {
      assert.equal(env('ANOTHER_TEST_ENV', null, v => v ? v : 'expected'), 'expected')
    })

    it('should return default value if env is not defined', () => {
      assert.equal(env('ANOTHER_TEST_ENV', 2, String), '2')
    })
  })

  describe('method glob', () => {
    it('should return all matching env vars', () => {
      process.env.ENV_TEST_ENV_1 = '1'
      process.env.ENV_TEST_ENV_2 = '2'

      const envVars = glob('ENV_TEST_ENV_*')
      assert.equal(envVars.ENV_TEST_ENV_1, '1')
      assert.equal(envVars.ENV_TEST_ENV_2, '2')
    })
  })
})
