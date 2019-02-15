import globToRegexp = require('glob-to-regexp')
import isfunction = require('lodash.isfunction')

/**
 * A utility to get multiple env vars for matching env var string.
 * e.g.: DB_*, NODE_*, *_URL, FRONTEND_*_VAR
 *
 * @export glob
 * @param {string} envVarString
 * @returns {({ [key: string]: string | any })}
 */
export function glob (envVarString: string): { [key: string]: string | any } {
  const re = globToRegexp(envVarString)
  const obj = {}
  Object.keys(process.env).forEach(envKey => {
    if (re.test(envKey)) obj[envKey] = process.env[envKey]
  })
  return obj
}

/**
 * A utility to get an env var or if undefined the default value if given.
 * An optional converter function can be passed to convert the returned value.
 *
 * @export default
 * @param {String} envVarString The string of the env var to fetch
 * @param {*} [defaultValue] A default value that will be returned if env var is undefined
 * @param {Function} [converter] A optional converter function to convert the returned value
 * @returns {*}
 */
export default function (envVarString: string, defaultValue?: any, converter?: Function): any {
  let value = process.env[envVarString] || defaultValue
  if (converter && isfunction(converter)) {
    value = converter.apply(null, [value])
  }
  return value
}
