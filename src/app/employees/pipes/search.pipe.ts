import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    try{ 
      const resultPosts:string[] = [];
   if(value!=undefined)
   {
     var chars:any={
       "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
       "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
       "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
       "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
     var expr=/[áàéèíìóòúùñ]/ig;
     var res=arg.replace(expr,function(e:string){return chars[e]});
     for(const post of value){
     if(post.name.toLowerCase().indexOf(res.toLowerCase()) > -1 
      ||  post.last_name.toLowerCase().indexOf(res.toLowerCase()) > -1  ){
        resultPosts.push(post);
     };
   };
   }
   
   return resultPosts;
   }catch(e){
     console.log("",e)
   }
  }

}
