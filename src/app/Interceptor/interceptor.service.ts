import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class InterceptorService  implements HttpInterceptor{

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = sessionStorage.getItem("Token")
    if (token){
      const authReq = req.clone({
       headers: req.headers.set(
         'Authorization', `Token token=${token}`
       )
       })
     return next.handle(authReq)
     }
    return next.handle(req)
  } 
}  

/* intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
  const httpReq = req.clone({
    url: req.url.replace("http://", "https://")
  });
  return next.handle(httpReq);
}
}  */
