var script=document.createElement('script');script.setAttribute('src','https://cdn.jsdelivr.net/npm/sweetalert2@11'),document.head.appendChild(script),script.onload=function(){document.getElementById('form-submit').addEventListener('click',(function(){Swal.fire({title:'Thank you!',text:'Thank you for reviewing!',icon:'success',allowOutsideClick:!1,allowEscapeKey:!1,confirmButtonText:'OK'}).then((t=>{if(t.isConfirmed){var e=window.location.href,n=e.substring(0,e.lastIndexOf('/'))+'/index.html';window.location.href=n}}))}))};
