export const add = (numbers:(string|number)[])=>{
        let sum:number|string = 0
        for (let number of numbers){
            sum +=+number
        }
        return sum
}