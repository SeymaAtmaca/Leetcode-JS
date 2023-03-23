/**
 * @param {number[]} nums
 * @return {number}
 */
// result değişkeni, dizideki her bir elemanla XOR işlemine tabi tutulur. Döngü bittiğinde elde edilen result değişkeni sonucu, tekrarlanmayan sayıdır.
var singleNumber = function(nums) {
    let result = 0
    for(let i = 0; i<nums.length; i++){
        result ^= nums[i]
    }
    return result
};