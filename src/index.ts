import globToRegexp = require('glob-to-regexp')

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
 *
 * @export default
 * @param {String} envVarString The string of the env var to fetch
 * @param {*} [defaultValue] A default value that will be returned if env var is undefined
 * @returns {*}
 */
export default function (envVarString: string, defaultValue?: any): any {
  return process.env[envVarString] || defaultValue
}
