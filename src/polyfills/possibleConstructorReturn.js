export default function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }

  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}
