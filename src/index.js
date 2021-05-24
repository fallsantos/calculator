import React, {useState} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import Display from './components/Display'
import Button from './components/Button'
import Money from './components/Money'

export default () => {

  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operator, setOperator] = useState(null)
  const [values, setValues] = useState([0,0])
  const [current, setCurrent] = useState(0)

  addDigit = n => {
    const _clearDisplay = displayValue === '0' || clearDisplay 

    if(n === '.' && !clearDisplay && displayValue.includes('.')) { 
      return 
    }

    const _currentValue = _clearDisplay ? '' :  displayValue
    const _displayValue = _currentValue + n
    setDisplayValue(_displayValue)
    setClearDisplay(false)

    if(n !== '.'){
      const newValue = parseFloat(_displayValue)
      const _values = [...values]

      _values[current] = newValue

      setValues(_values)
    }
  }

  clearMemory = () => {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperator(null)
    setValues([0,0])
    setCurrent(0)
  }

  setOperation = op => {
    if(current === 0){
      setOperator(op)
      setCurrent(1)
      setClearDisplay(true)
    }else{
      const equals = op === '='
      const _values = [...values]
      try {
        _values[0] = eval(`${_values[0]} ${operator} ${_values[1]}`)
      } catch (error) {
        _values[0] = values[0]
      }

      values[1] = 0
      setDisplayValue(`${_values[0]}`)
      setOperator(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(_values)
    }
  }

  return (
   <View style={styles.container}>  
     <Display value={displayValue}/>
     <View style={styles.buttons}>
       <Button label="AC" tp onClick={this.clearMemory}/>
       <Button label="/" op onClick={() => this.setOperation('/')}/>
       <Button label="7" onClick={this.addDigit}/>
       <Button label="8" onClick={this.addDigit}/>
       <Button label="9" onClick={this.addDigit}/>
       <Button label="*" op onClick={() => this.setOperation('*')}/>
       <Button label="4" onClick={this.addDigit}/>
       <Button label="5" onClick={this.addDigit}/>
       <Button label="6" onClick={this.addDigit}/>
       <Button label="-" op onClick={() => this.setOperation('-')}/>
       <Button label="1" onClick={this.addDigit}/>
       <Button label="2" onClick={addDigit}/>
       <Button label="3" onClick={this.addDigit}/>
       <Button label="+" op onClick={() => this.setOperation('+')}/>
       <Button label="0" db onClick={this.addDigit}/>
       <Button label="." onClick={this.addDigit}/>
       <Button label="=" op onClick={() => this.setOperation('=')}/>
     </View> 
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

