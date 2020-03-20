import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  id: Number;
  obj: any;
  idHab: Number;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<Customer>('http://localhost:3000/api/create-customer', customer, this.httpOptions)
      .pipe(
        catchError(this.handleError<Customer>('Add Customer'))
      );
  }

  getCustomer(id): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/get-customer/' + id)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${id}`)),
        catchError(this.handleError<Customer[]>(`Get Customer id=${id}`))
      );
  }

  getCustomerFind(param): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/find/' + param)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${param}`)),
        catchError(this.handleError<Customer[]>(`Get Customer id=${param}`))
      );
  }

<<<<<<< HEAD
  getHabFind(param): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/Habfind/' + param)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${param}`)),
        catchError(this.handleError<Customer[]>(`Get Customer id=${param}`))
      );
  }

  getCustomerHab(param): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/aggregate/' + param)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${param}`)),
        catchError(this.handleError<Customer[]>(`Get Customer id=${param}`))
      );
  }

  getHabPrice(param,param2): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/findPrice/' + param + '/'+ param2)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${param}`)),
        catchError(this.handleError<Customer[]>(`Get Customer id=${param}`))
      );
  }

=======
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
  getCustomerFindOne(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/findOne/')
      .pipe(
        tap(_ => console.log(`_idMAxGET`)),
        catchError(this.handleError<Customer[]>(`Get`))
      );
  }

  getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api')
      .pipe(
        tap(customer => console.log('Customer fetched!')),
        catchError(this.handleError<Customer[]>('Get Customer', []))
      );
  }

<<<<<<< HEAD
  getCustomerListHab(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/api/perfil')
      .pipe(
        tap(customer => console.log('Customer fetched!')),
        catchError(this.handleError<Customer[]>('Get Customer', []))
      );
  }


=======
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
  

  updateCustomer(id, customer: Customer): Observable<any> {
    console.log(customer)
    return this.http.put('http://localhost:3000/api/update-customer/' + id, customer, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer updated: ${id}`)),
        catchError(this.handleError<Customer[]>('Update Customer'))
      );
  }

  updateCustomerPush(id, idH: Customer): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-customer-push/' + id + '/' + idH, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer updated: ${id}`)),
        catchError(this.handleError<Customer[]>('Update Customer'))
      );
  }


  deleteCustomer(id): Observable<Customer[]> {
    return this.http.delete<Customer[]>('http://localhost:3000/api/delete-customer/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer deleted: ${id}`)),
        catchError(this.handleError<Customer[]>('Delete Customer'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  logicCustomer(id, customer: Customer): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-logiccustomer/' + id, customer, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer updated: ${id}`)),
        catchError(this.handleError<Customer[]>('Update Customer'))
      );
  }
}