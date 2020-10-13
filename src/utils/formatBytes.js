function formatBytes(megaBytes) {
    let result = megaBytes / 1000;
    if (result < 1) {
        return `${megaBytes}MB`
    } else if (result < 1000 && result >= 1) {
        if (result == 1) { return `${result}GB` }
        let decimal = Math.round((result % 1) * 1000);
        return `${Math.floor(result)}GB ${decimal}MB`
    } else {
        let sol = result / 1000;
        if (result == 1000) {
            return `${sol}TB`
        }
        let giga = Math.floor((sol % 1) * 1000);
        let mega = Math.round((result % 1) * 1000);
        return `${Math.floor(sol)}TB ${giga}GB ${mega}MB`
    }


}
module.exports = formatBytes;