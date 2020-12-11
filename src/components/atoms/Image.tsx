import React, { Component } from 'react'

interface Props {
  fileName: string
  size: number
}
class Image extends Component<Props> {
  fileName: string
  size: string
  constructor(props: Props) {
    super(props)
    this.fileName = '/public' + props.fileName
    this.size = props.size + 'px'
  }

  render(): JSX.Element {
    return <img width={this.size} src={this.fileName} />
  }
}
export default Image
