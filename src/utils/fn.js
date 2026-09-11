export default function Distance(vecA, vecB){
    return Math.sqrt(vecA.reduce((sum, val, idx) => sum + Math.pow(val - vecB[idx], 2), 0))
}