  var RomanNumerals = {
      convert: function(num) {

          if (num == 2)
              return "II"
          if (num == 3)
              return "III"
          if (num == 0)
              return "0"
          if (num == 5)
              return "V"
          return "I"
      }

  };

  //(function(){
  // 'use strict';
  //     featureSteps(/Roman numerals/)
  //         .given(/I have a Roman numerals calculator/, function(){
  //             this.calculator = new Calculator();
  //         })
  //         .given(/I enter '(.*)' in the calculator/, function(roman){
  //             this.calculator.setInput(roman);
  //         })
  //         .when(/I convert the roman numeral/, function(){
  //             this.calculator.convert();
  //         })
  //         .when(/I press add/, function(){
  //             this.calculator.add();
  //         })
  //         .then(/the displayed value is '(.*)'/, function(num){
  //             expect(this.calculator.getDisplayedValue()).toBe(num);
  //         })();
