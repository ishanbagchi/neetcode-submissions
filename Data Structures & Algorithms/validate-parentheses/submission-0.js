class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const char of s) {
            if (['(', '{', '['].includes(char)) {
                stack.push(char)
            } else if (stack.length === 0 || stack.pop() !== map[char]) {
                return false
            }
        }

        return stack.length === 0
    }
}
