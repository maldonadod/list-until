const DisplayerUntilList = (list, { max = 2 }) => {
    return {
        display(output) {
            if (list.length === 0) {
                return output.empty();
            }
            if (list.length > max) {
                const until = max - 1
                return output.show(list.slice(0, until), list.slice(until))
            } else {
                return output.show(list, [])
            }
        }
    }
}

module.exports = DisplayerUntilList;