
function checkifclicked()
{
    var checkboxs=document.getElementsByName("interests[]");
    var okay=false;
    var count = 0;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {

        count++;
        }
    }
    if(count > 1){
     okay=true;    
    }
    if(!okay){

        alert("Please check at least two checkbox");
        return false;
    }

}
