const calculateSalary = () => {
    const currentDolar = parseFloat(document.getElementById('dolar').value) || 5.00;
    const hourValue = parseFloat(document.getElementById('payment_per_hour').value) || 30;
    const workHours = parseInt(document.getElementById('hours_per_week').value) || 40;

    const convertedHourValueToBrl = currentDolar * hourValue;
    const day   = (workHours/5) * convertedHourValueToBrl;
    const week  = workHours * convertedHourValueToBrl;
    const month = week * 4;
    const year  = month * 12;

    set_value('valor_dia', day.toFixed(2));
    set_value('valor_semana', week.toFixed(2));
    set_value('valor_mes', month.toFixed(2));
    set_value('valor_ano', year.toFixed(2));
}

const set_value = (id, value) => {
    document.getElementById(id).innerText = `R$ ${value}`;
}

const getDolarValue = () => {
    const response = fetch('https://freecurrencyapi.net/api/v2/latest?apikey=74c0bb60-876d-11ec-8f3e-5516d6ebad2d')
    .then(resp   => resp.json())
    .then((body) => body.data['BRL'])
    .then((brl)  => brl.toFixed(2))
    .then(brl    => document.getElementById('dolar').value = brl);
}