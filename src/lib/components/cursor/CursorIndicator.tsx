import React, { Component } from 'react'
import { StyleSheet, Animated, Platform, View } from 'react-native'
import { CursorIndicatorProps } from './utils/types'

class CursorIndicator extends Component<CursorIndicatorProps> {
  static defaultProps = {
    borderColor: '#FFF',
    backgroundColor: '#F4B700',
  }

  indicator = React.createRef<View>()

  shouldComponentUpdate() {
    return false
  }

  setNativeProps = (nativeProps: Object) => {
    if (this.indicator.current != null) {
      this.indicator.current.setNativeProps(nativeProps)
    }
  }

  render() {
    const { cursorRadius, borderColor, backgroundColor } = this.props
    const cursorStyle = {
      width: 3 * 2,
      height: 3 * 2,
      borderRadius: 4,
      borderColor,
      backgroundColor
      
    }
    return (
      <Animated.View
        ref={this.indicator}
        style={[styles.cursor, cursorStyle]}
      />
    )
  }
}

const styles = StyleSheet.create({
  cursor: {
    marginTop:7,
    marginLeft: 9,
    position: 'absolute',
    borderWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
})

export default CursorIndicator
