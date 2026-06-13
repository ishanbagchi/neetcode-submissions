class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const result = strs.map(str => `${str.length}#${str}`).join('')
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []
        let i = 0

        while(i < str.length) {
            let j = i
            while (str[j] !== '#') j++
            const len = parseInt(str.slice(i, j))
            result.push(str.slice(j + 1, j + 1 + len))
            i = j + len + 1
        }

        return result
    }
}
