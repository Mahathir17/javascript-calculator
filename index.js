const resultField = $("#result");
insertNum = (num) => {
    let existingNumbers = resultField.val();
    resultField.val(existingNumbers + num);
}

clearResult = () => {
    resultField.val('');
}
calculate = () => {
    const result = eval(resultField.val())
    resultField.val(result)
}
deletNum = () => {
    const presentValue = resultField.val()
    if(presentValue != ''){
        resultField.val(presentValue.slice(0, -1));
    }
}