document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('note').addEventListener('keypress' , addNote);

  function addNote (event) {
    if(event.keyCode ===13) {
      var ul = document.getElementById('list'),
        li = document.createElement('li'),
        a = document.createElement('a');

      a.href='#';
      a.text='Delete';
      a.addEventListener('click',deleteNote);

      a.setAttribute('class','delete');
      li.setAttribute('data-id',1);

      li.innerHTML = this.value;
      li.appendChild(a);
      ul.appendChild(li);

      this.value = '';

    }
  }

  function deleteNote (event) {
    var li = this.parentNode;
    li.parentNode.removeChild(li);
  }

});
