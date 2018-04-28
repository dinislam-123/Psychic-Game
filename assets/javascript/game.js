document.onkeyup = function(event)
{
    var mwin = document.getElementById('win').value;
    var mloss = document.getElementById('loss').value;

    if(mwin == '3' || mloss == '3')
    {
        alert('Game is over Try again and Refresh it Thank you....');
        document.getElementById('win').value = '';
        document.getElementById('loss').value='';
        document.getElementById('guessletter').value ="";
        document.getElementById("guessleft").value = "";
    }
    else
    {
        var items = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var raNum = items[Math.floor(Math.random()*items.length)];   
        // var user_text = document.getElementById("guessletter");
    
        if ( event.key == raNum)
        {
           
             document.getElementById('win').value = parseInt(document.getElementById('win').value)+1;
             document.getElementById('guessletter').value ="";
             document.getElementById("guessleft").value = "9";
        }
     
        else if(parseInt(document.getElementById("guessleft").value) == 0)
            {
        
             document.getElementById("loss").value = parseInt(document.getElementById("loss").value) +1;
             document.getElementById('guessletter').value ="";
             document.getElementById("guessleft").value = "9";       
            }
            document.getElementById("guessleft").value = parseInt(document.getElementById("guessleft").value)-1;
    }
 }