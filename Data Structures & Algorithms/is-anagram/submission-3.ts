class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const map = new Map<string, number>()

        for (let c of s) {
            map.set(c, (map.get(c) ?? 0) + 1)
        }

        for (let c of t) {
            const count = map.get(c) ?? 0;
            if (count === 0) return false;
            map.set(c, count - 1);
        }

        return true
    }
}
