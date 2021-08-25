function attendance(actualAttendance, targetGroup, month) {
    let expectedAttendance = 70
    let result = {
        remark: '',
        category: '',
        program: '',
        actualAttendance: actualAttendance,
        expectedAttendance: expectedAttendance,
        targetGroup: targetGroup,
        month: month
    }
    const remark = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good']
    const category = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5']
    const program = ['Youth Program', 'Men Program', 'Women Program']
    if ( actualAttendance < expectedAttendance ) {
        result['remark'] = remark[0]
        result['category'] = category[0]
        
        if (month == 3 && (targetGroup == 'youth' || targetGroup == 'Youth')) {
            result['program'] = program[0]
        }
            
        if (month == 3 && (targetGroup == 'men' || targetGroup == 'Men')){
            result['program'] = program[1]
        }
        
        if (month == 3 && (targetGroup == 'women' || targetGroup == 'Women')) {
            result['program'] = program[2]
        }
    } else if (actualAttendance == expectedAttendance) {

        if (month == 1) {
            result['expectedAttendance'] = 2 * expectedAttendance
            result['remark'] = remark[1]
            result['category'] = category[1]
            result['program'] = program[0]
        }

        else if(month == 2) {
            result['expectedAttendance'] = expectedAttendance + expectedAttendance * 0.5
            result['remark'] = remark[1]
            result['category'] = category[1]
            result['program'] = program[0]
        }

        else if (month == 3) {
            result['expectedAttendance'] = expectedAttendance + expectedAttendance * 0.75
            result['remark'] = remark[1]
            result['category'] = category[1]
            if (targetGroup == 'youth' || targetGroup == 'Youth') {
                result['program'] = program[0]
            }
            
            if (targetGroup == 'men' || targetGroup == 'Men') {
                result['program'] = program[1]
            }

            if (targetGroup == 'women' || targetGroup == 'Women') {
                result['program'] = program[2]
            }
        }

        else if (month >= 4) {
            result['expectedAttendance'] = expectedAttendance
            result['remark'] = remark[1]
            result['category'] = category[1]
            result['program'] = program[0]
        }
    } else if((actualAttendance > expectedAttendance) && (actualAttendance < (expectedAttendance + expectedAttendance * 0.5))) {  
        result['remark'] = remark[1]
        result['category'] = category[1]
        if (month == 3 && (targetGroup == 'youth' || targetGroup == 'Youth')) {
            result['program'] = program[0]
        }
            
        if (month == 3 && (targetGroup == 'men' || targetGroup == 'Men')) {
            result['program'] = program[1]
        }
        
        if (month == 3 && (targetGroup == 'women' || targetGroup == 'Women')) {
            result['program'] = program[2]
        }
    } else if(actualAttendance == (expectedAttendance + expectedAttendance * 0.5)) {

        result['remark'] = remark[2]
        result['category'] = category[2]
        if (month == 3 && (targetGroup == 'youth' || targetGroup == 'Youth')) {
            result['program'] = program[0]
        }
            
        if (month == 3 && (targetGroup == 'men' || targetGroup == 'Men')) {
            result['program'] = program[1]
        }
        
        if (month == 3 && (targetGroup == 'women' || targetGroup == 'Women')) {
            result['program'] = program[2]
        }
    } else if((actualAttendance > (expectedAttendance + expectedAttendance * 0.5)) && (actualAttendance < (expectedAttendance * 2))) {
        
        result['remark'] = remark[3]
        result['category'] = category[3]
        if (month == 3 && (targetGroup == 'youth' || targetGroup == 'Youth')) {
            result['program'] = program[0]
        }
            
        if (month == 3 && (targetGroup == 'men' || targetGroup == 'Men')) {
            result['program'] = program[1]
        }
        
        if (month == 3 && (targetGroup == 'women' || targetGroup == 'Women')) {
            result['program'] = program[2]
        }
    } else if (actualAttendance >= (expectedAttendance * 2)) {

            result['remark'] = remark[4]
            result['category'] = category[4]
        if (month == 3 && (targetGroup == 'youth' || targetGroup == 'Youth')) {
            result['program'] = program[0]
            }
                
        if (month == 3 && (targetGroup == 'men' || targetGroup == 'Men')) {
            result['program'] = program[1]
            }
            
        if (month == 3 && (targetGroup == 'women' || targetGroup == 'Women')) {
            result['program'] = program[2]
            }
        }
        console.log(result)
    return result

    
  }
  
  export default attendance
  