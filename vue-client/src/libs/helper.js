import localforage from 'localforage'

localforage.config({
  name: 'NideAdmin'
})

const helper = {}

helper.setStorage = async (key, value) => {
  const result = await localforage.setItem(key, value)
  return result
}

helper.getStorage = async (key) => {
  const result = await localforage.getItem(key)
  return result
}

helper.removeStorage = async (key) => {
  const result = await localforage.removeItem(key)
  return result
}

helper.clearStorage = async () => {
  const result = await localforage.clear()
  return result
}

export default helper
