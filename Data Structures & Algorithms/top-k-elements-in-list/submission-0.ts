class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()

        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1)
        }

        const bucket = Array.from({length: nums.length + 1}, () => [])
        for (let [num, freq] of map.entries()) {
            bucket[freq].push(num)
        }

        const result = []
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            result.push(...bucket[i])
        }

        return result
    }
}
