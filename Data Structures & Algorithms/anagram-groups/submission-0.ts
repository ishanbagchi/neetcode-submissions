class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram (str1: string, str2: string): boolean {
        if (str1.length !== str2.length) return false

        const map = new Map<string, number>()

        for (let c of str1) {
            map.set(c, (map.get(c) ?? 0) + 1)
        }

        for (let c of str2) {
            const count = map.get(c) ?? 0
            if (count === 0) return false
            map.set(c, count - 1)
        }

        return true
    }

    groupAnagrams(strs: string[]): string[][] {
        const result = []
        for(let i = 0; i < strs.length; i++) {
            if (typeof strs[i] === 'undefined') continue
            const inner = [strs[i]]
            for(let j = i + 1; j < strs.length; j++) {
                if (typeof strs[j] === 'undefined') continue
                if (this.isAnagram(strs[i], strs[j])) {
                    inner.push(strs[j])
                    strs[j] = undefined
                }   
            }
            result.push(inner)
        }

        return result
    }
}
