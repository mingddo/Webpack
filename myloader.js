module.exports = function myloader(content){
    console.log("myloader가 동작함")
    return content.replace("console.log(", "alert(") // console.log => alert로 치환
}