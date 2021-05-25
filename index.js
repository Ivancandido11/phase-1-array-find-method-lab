
const findMatchingYear = (element) => element['result'] === 'W'
    function superbowlWin(records){
        const year = records.find(findMatchingYear)
        if (year !== undefined){
            return year['year']
    }
}