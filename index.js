function updateObjectWithKeyAndValue(object, key, value) {
Object.assing({}, object, { [key]: value})
return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}
function deleteFromObjectByKey(object, key) {

}
function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key]
return object
}
