const addTrack = document.querySelector('.add_track')

var track_form_1 = document.querySelector('.track_1_form')
var track_form_2 = document.querySelector('.track_2_form')
var track_form_3 = document.querySelector('.track_3_form')
var track_form_4 = document.querySelector('.track_4_form')
var track_form_5 = document.querySelector('.track_5_form')


var track_form_6 = document.querySelector('.track_6_form')
var track_form_7 = document.querySelector('.track_7_form')
var track_form_8 = document.querySelector('.track_8_form')
var track_form_9 = document.querySelector('.track_9_form')
var track_form_10 = document.querySelector('.track_10_form')


var track_form_11 = document.querySelector('.track_11_form')
var track_form_12 = document.querySelector('.track_12_form')
var track_form_13 = document.querySelector('.track_13_form')
var track_form_14 = document.querySelector('.track_14_form')
var track_form_15 = document.querySelector('.track_15_form')


var track_form_16 = document.querySelector('.track_16_form')
var track_form_17 = document.querySelector('.track_17_form')
var track_form_18 = document.querySelector('.track_18_form')
var track_form_19 = document.querySelector('.track_19_form')
var track_form_20 = document.querySelector('.track_20_form')




var track_form_21 = document.querySelector('.track_21_form')
var track_form_22 = document.querySelector('.track_22_form')
var track_form_23 = document.querySelector('.track_23_form')
var track_form_24 = document.querySelector('.track_24_form')
var track_form_25 = document.querySelector('.track_25_form')
























const track_name_1 = document.querySelector('.track_name_1')
const track_name_2 = document.querySelector('.track_name_2')
const track_name_3 = document.querySelector('.track_name_3')
const track_name_4 = document.querySelector('.track_name_4')
const track_name_5 = document.querySelector('.track_name_5')


const track_name_6 = document.querySelector('.track_name_6')
const track_name_7 = document.querySelector('.track_name_7')
const track_name_8 = document.querySelector('.track_name_8')
const track_name_9 = document.querySelector('.track_name_9')
const track_name_10 = document.querySelector('.track_name_10')



const track_name_11 = document.querySelector('.track_name_11')
const track_name_12 = document.querySelector('.track_name_12')
const track_name_13 = document.querySelector('.track_name_13')
const track_name_14 = document.querySelector('.track_name_14')
const track_name_15 = document.querySelector('.track_name_15')


const track_name_16 = document.querySelector('.track_name_16')
const track_name_17 = document.querySelector('.track_name_17')
const track_name_18 = document.querySelector('.track_name_18')
const track_name_19 = document.querySelector('.track_name_19')
const track_name_20 = document.querySelector('.track_name_20')



const track_name_21 = document.querySelector('.track_name_21')
const track_name_22 = document.querySelector('.track_name_22')
const track_name_23 = document.querySelector('.track_name_23')
const track_name_24 = document.querySelector('.track_name_24')
const track_name_25 = document.querySelector('.track_name_25')






















const track_file_1 = document.querySelector('.track_file_1')
const track_file_2 = document.querySelector('.track_file_2')
const track_file_3 = document.querySelector('.track_file_3')
const track_file_4 = document.querySelector('.track_file_4')
const track_file_5 = document.querySelector('.track_file_5')



const track_file_6 = document.querySelector('.track_file_6')
const track_file_7 = document.querySelector('.track_file_7')
const track_file_8 = document.querySelector('.track_file_8')
const track_file_9 = document.querySelector('.track_file_9')
const track_file_10 = document.querySelector('.track_file_10')



const track_file_11 = document.querySelector('.track_file_11')
const track_file_12 = document.querySelector('.track_file_12')
const track_file_13 = document.querySelector('.track_file_13')
const track_file_14 = document.querySelector('.track_file_14')
const track_file_15 = document.querySelector('.track_file_15')



const track_file_16 = document.querySelector('.track_file_16')
const track_file_17 = document.querySelector('.track_file_17')
const track_file_18 = document.querySelector('.track_file_18')
const track_file_19 = document.querySelector('.track_file_19')
const track_file_20 = document.querySelector('.track_file_20')



const track_file_21 = document.querySelector('.track_file_21')
const track_file_22 = document.querySelector('.track_file_22')
const track_file_23 = document.querySelector('.track_file_23')
const track_file_24 = document.querySelector('.track_file_24')
const track_file_25 = document.querySelector('.track_file_25')






















const track_remove_1 = document.querySelector('.track_1_remove')
const track_remove_2 = document.querySelector('.track_2_remove')
const track_remove_3 = document.querySelector('.track_3_remove')
const track_remove_4 = document.querySelector('.track_4_remove')
const track_remove_5 = document.querySelector('.track_5_remove')



const track_remove_6 = document.querySelector('.track_6_remove')
const track_remove_7 = document.querySelector('.track_7_remove')
const track_remove_8 = document.querySelector('.track_8_remove')
const track_remove_9 = document.querySelector('.track_9_remove')
const track_remove_10 = document.querySelector('.track_10_remove')


const track_remove_11 = document.querySelector('.track_11_remove')
const track_remove_12 = document.querySelector('.track_12_remove')
const track_remove_13 = document.querySelector('.track_13_remove')
const track_remove_14 = document.querySelector('.track_14_remove')
const track_remove_15 = document.querySelector('.track_15_remove')



const track_remove_16 = document.querySelector('.track_16_remove')
const track_remove_17 = document.querySelector('.track_17_remove')
const track_remove_18 = document.querySelector('.track_18_remove')
const track_remove_19 = document.querySelector('.track_19_remove')
const track_remove_20 = document.querySelector('.track_20_remove')



const track_remove_21 = document.querySelector('.track_21_remove')
const track_remove_22 = document.querySelector('.track_22_remove')
const track_remove_23 = document.querySelector('.track_23_remove')
const track_remove_24 = document.querySelector('.track_24_remove')
const track_remove_25 = document.querySelector('.track_25_remove')







addTrack.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('clicked add track')
    if(track_form_2.classList.contains('hide')){
        track_form_2.classList.remove('hide')
        track_form_2.classList.add('visible')
        track_remove_2.classList.remove('hide')
    }else if(track_form_2.classList.contains('visible') && track_form_3.classList.contains('hide')){
        track_form_3.classList.remove('hide')
        track_form_3.classList.add('visible')
        track_remove_2.classList.add('hide')
        track_remove_3.classList.remove('hide')
    }else if(track_form_3.classList.contains('visible') && track_form_4.classList.contains('hide')){
        track_form_4.classList.remove('hide')
        track_form_4.classList.add('visible')
        track_remove_3.classList.add('hide')
        track_remove_4.classList.remove('hide')
    }else if(track_form_4.classList.contains('visible') && track_form_5.classList.contains('hide')){
        track_form_5.classList.remove('hide')
        track_form_5.classList.add('visible')
        track_remove_4.classList.add('hide')
        track_remove_5.classList.remove('hide')
    }else if(track_form_5.classList.contains('visible') && track_form_6.classList.contains('hide')){
        track_form_6.classList.remove('hide')
        track_form_6.classList.add('visible')
        track_remove_5.classList.add('hide')
        track_remove_6.classList.remove('hide')
    }else if(track_form_6.classList.contains('visible') && track_form_7.classList.contains('hide')){
        track_form_7.classList.remove('hide')
        track_form_7.classList.add('visible')
        track_remove_6.classList.add('hide')
        track_remove_7.classList.remove('hide')
    }else if(track_form_7.classList.contains('visible') && track_form_8.classList.contains('hide')){
        track_form_8.classList.remove('hide')
        track_form_8.classList.add('visible')
        track_remove_7.classList.add('hide')
        track_remove_8.classList.remove('hide')
    }else if(track_form_8.classList.contains('visible') && track_form_9.classList.contains('hide')){
        track_form_9.classList.remove('hide')
        track_form_9.classList.add('visible')
        track_remove_8.classList.add('hide')
        track_remove_9.classList.remove('hide')
    }else if(track_form_9.classList.contains('visible') && track_form_10.classList.contains('hide')){
        track_form_10.classList.remove('hide')
        track_form_10.classList.add('visible')
        track_remove_9.classList.add('hide')
        track_remove_10.classList.remove('hide')
    }else if(track_form_10.classList.contains('visible') && track_form_11.classList.contains('hide')){
        track_form_11.classList.remove('hide')
        track_form_11.classList.add('visible')
        track_remove_10.classList.add('hide')
        track_remove_11.classList.remove('hide')
    }else if(track_form_11.classList.contains('visible') && track_form_12.classList.contains('hide')){
        track_form_12.classList.remove('hide')
        track_form_12.classList.add('visible')
        track_remove_11.classList.add('hide')
        track_remove_12.classList.remove('hide')
    }else if(track_form_12.classList.contains('visible') && track_form_13.classList.contains('hide')){
        track_form_13.classList.remove('hide')
        track_form_13.classList.add('visible')
        track_remove_12.classList.add('hide')
        track_remove_13.classList.remove('hide')
    }else if(track_form_13.classList.contains('visible') && track_form_14.classList.contains('hide')){
        track_form_14.classList.remove('hide')
        track_form_14.classList.add('visible')
        track_remove_13.classList.add('hide')
        track_remove_14.classList.remove('hide')
    }else if(track_form_14.classList.contains('visible') && track_form_15.classList.contains('hide')){
        track_form_15.classList.remove('hide')
        track_form_15.classList.add('visible')
        track_remove_14.classList.add('hide')
        track_remove_15.classList.remove('hide')
    }else if(track_form_15.classList.contains('visible') && track_form_16.classList.contains('hide')){
        track_form_16.classList.remove('hide')
        track_form_16.classList.add('visible')
        track_remove_15.classList.add('hide')
        track_remove_16.classList.remove('hide')
    }else if(track_form_16.classList.contains('visible') && track_form_17.classList.contains('hide')){
        track_form_17.classList.remove('hide')
        track_form_17.classList.add('visible')
        track_remove_16.classList.add('hide')
        track_remove_17.classList.remove('hide')
    }else if(track_form_17.classList.contains('visible') && track_form_18.classList.contains('hide')){
        track_form_18.classList.remove('hide')
        track_form_18.classList.add('visible')
        track_remove_17.classList.add('hide')
        track_remove_18.classList.remove('hide')
    }else if(track_form_18.classList.contains('visible') && track_form_19.classList.contains('hide')){
        track_form_19.classList.remove('hide')
        track_form_19.classList.add('visible')
        track_remove_18.classList.add('hide')
        track_remove_19.classList.remove('hide')
    }else if(track_form_19.classList.contains('visible') && track_form_20.classList.contains('hide')){
        track_form_20.classList.remove('hide')
        track_form_20.classList.add('visible')
        track_remove_19.classList.add('hide')
        track_remove_20.classList.remove('hide')
    }else if(track_form_20.classList.contains('visible') && track_form_21.classList.contains('hide')){
        track_form_21.classList.remove('hide')
        track_form_21.classList.add('visible')
        track_remove_20.classList.add('hide')
        track_remove_21.classList.remove('hide')
    }else if(track_form_21.classList.contains('visible') && track_form_22.classList.contains('hide')){
        track_form_22.classList.remove('hide')
        track_form_22.classList.add('visible')
        track_remove_21.classList.add('hide')
        track_remove_22.classList.remove('hide')
    }else if(track_form_22.classList.contains('visible') && track_form_23.classList.contains('hide')){
        track_form_23.classList.remove('hide')
        track_form_23.classList.add('visible')
        track_remove_22.classList.add('hide')
        track_remove_23.classList.remove('hide')
    }else if(track_form_23.classList.contains('visible') && track_form_24.classList.contains('hide')){
        track_form_24.classList.remove('hide')
        track_form_24.classList.add('visible')
        track_remove_23.classList.add('hide')
        track_remove_24.classList.remove('hide')
    }else if(track_form_24.classList.contains('visible') && track_form_25.classList.contains('hide')){
        track_form_25.classList.remove('hide')
        track_form_25.classList.add('visible')
        track_remove_24.classList.add('hide')
        track_remove_25.classList.remove('hide')
    }
})



track_remove_2.addEventListener("click", (e) => {
    if(track_form_2.classList.contains('visible') && track_form_3.classList.contains('hide')){
    track_form_2.classList.add('hide')
    track_form_2.classList.remove('visible')
    track_name_2.value = ""
    track_file_2.value = ""
    }else{
        //nothings
    }
})






track_remove_3.addEventListener("click", (e) => {
    if(track_form_3.classList.contains('visible') && track_form_4.classList.contains('hide')){
    track_form_3.classList.add('hide')
    track_form_3.classList.remove('visible')
    track_remove_2.classList.remove('hide')
    track_name_3.value = ""
    track_file_3.value = ""
    }else{
        //nothings
    }
})


track_remove_4.addEventListener("click", (e) => {
    if(track_form_4.classList.contains('visible') && track_form_5.classList.contains('hide')){
    track_form_4.classList.add('hide')
    track_form_4.classList.remove('visible')
    track_remove_3.classList.remove('hide')
    track_name_4.value = ""
    track_file_4.value = ""
    }else{
        //nothings
    }
})

track_remove_5.addEventListener("click", (e) => {
    if(track_form_5.classList.contains('visible')){
    track_form_5.classList.add('hide')
    track_form_5.classList.remove('visible')
    track_remove_4.classList.remove('hide')
    track_name_5.value = ""
    track_file_5.value = ""
    }else{
        //nothings
    }
})