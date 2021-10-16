$('#sendData').click(function(){
    var formElementVod = $('#formNewVod');
    var data = new FormData(formElementVod[0]);
    addVod(data);
});
const addVod = async (data) =>{
    try {
        const res = await fetch('php/add_elements.php',{
            method: 'POST',
            body: data,
            headers: 'application/json'
        });
        const data = await res.json();
        console.log(data);
    }catch (error) {
        console.log(error);
    }
};