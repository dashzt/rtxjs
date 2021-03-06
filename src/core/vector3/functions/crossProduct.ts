import { Vector3, vector3 } from 'core/vector3'

export const crossProduct = (vec1: Vector3, vec2: Vector3): Vector3 => {
  return vector3(
    vec1.y * vec2.z - vec1.z * vec2.y,
    vec1.z * vec2.x - vec1.x * vec2.z,
    vec1.x * vec2.y - vec1.y * vec2.x,
  )
}