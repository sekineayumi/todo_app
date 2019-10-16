import React from 'react';

import PropTypes from 'prop-types'
/**
 * ボタンのコンポ
 */
class Button extends React.Component {

    render() {

        return (
            <button>
                {/* JSXのコメント */}
                {this.props.label}
            </button>
        )
    }
}

//propsの型を指定
Button.propTypes = {
    // isRequired 必須項目
    label: PropTypes.string.isRequired
}

export default Button;