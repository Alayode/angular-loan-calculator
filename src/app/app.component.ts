import { Component } from '@angular/core';


// From Stackoverflow
// https://stackoverflow.com/questions/34177221/angular2-how-to-inject-window-into-an-angular2-service
import { WindowReferenceService, ICustomWindow } from '../app/window-reference.service';

const PERCENT_VALUE = 100;
const totalMonthsInYear = 12;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  enterLoanData = 'Enter Loan Data:';
  calculatorTitle = 'Loan Balance, Cumulative Equity, and Interest Payments';
  loanAmount = 'Amount of the loan ($):';
  annualInterest = 'Annual Interest (%):';
  repaymentPeriodInYears = 'Repayment period (years):';
  zipcode = ' Zipcode (to find lenders):';
  monthlyPayment = 'Monthly payment:';
  currencySymbol = '$';
  approximatePayments = 'Approximate Payment';
  totalPayment = 'Total Payment: ';
  totalinterest = 'Total interest: ';
  sponsors = 'Sponsors: ';
  lendersText = 'Apply for your loan with one of these fine lenders: ';
  calculatorButton = 'Calculate';

  private _window: ICustomWindow;

  constructor(
    windowRef: WindowReferenceService
  ) {
    this._window = windowRef.nativeWindow;
  }

  save(valueAmount,
    valueAnnualPercentageRate,
    valueYears,
    valueZipcode
  ) {
    // After adding a windowService to our Component
    // We can call the localStorage method using Typescript
    if (this._window.localStorage) {
      localStorage.loan_amount = valueAmount;
      localStorage.loan_apr = valueAnnualPercentageRate;
      localStorage.loan_years = valueYears;
      localStorage.loan_zipcode = valueZipcode;

    }


      this._window.onload = function() {
        // Automatically attempt to restore input fields when the document first loads.
      // if the browser supports localStorage and we have some stored data

      // if the browser supports localStorage and we have some stored data
    };
  }


  chart(p, m, mthly, u) { }


  calculate() {
    // 1. Look up the input and output elements in the document
    const amount = document.getElementById('amount') as HTMLInputElement;
    const annualPercentageRate = document.getElementById(
      'apr'
    ) as HTMLInputElement;
    const years = document.getElementById('years') as HTMLInputElement;
    const zipcode = document.getElementById('zipcode') as HTMLInputElement;
    const payment = document.getElementById('payment') as HTMLInputElement;
    const total = document.getElementById('total') as HTMLInputElement;
    const totalInterest = document.getElementById(
      'totalinterest'
    ) as HTMLInputElement;
    // console.log(amount, apr, years, zipcode, payment, total, totalInterest);

    const principal = parseFloat(amount.value);
    const monthlyInterestRate =
      parseFloat(annualPercentageRate.value) /
      PERCENT_VALUE /
      totalMonthsInYear;
    const payments = parseFloat(years.value) * totalMonthsInYear;
    const monthlyPaymentFigure = Math.pow(1 + monthlyInterestRate, payments);
    const monthly = (principal * monthlyPaymentFigure * monthlyInterestRate) / (monthlyPaymentFigure - 1);

    if (isFinite(monthly)) {
      // Fill in the output fields, rounding  to 2 deciaml places
      payment.innerHTML = monthly.toFixed(2);
      total.innerHTML = (monthly * payments).toFixed(2);
      totalInterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

      //  console.log(principal, monthlyInterestRate, monthlyInterestRate);


      // 5.Save the user's input so we can restore it the next time they visit.

      this.save(amount, annualPercentageRate, years, zipcode);



      // 6. Advertise: find and display local lenders, but ignore network errors
      try {
        // Catch any errors that occur within these curly braces

        // getLenders(amount.value, apr.value, years.value, zipcode.value);
      } catch (e) { /* And ignore those errors  */ }


      this.chart(principal, monthlyInterestRate, monthly, payments);
    } else {
      // Result was Not-a-Number or infinite,
      // which menans the input was incomplete or invalid.
      // Clear any previously displayed output.

      // 7.  Lastly, chart loan balance, and interest and equity payments.
      //  otherwise (else) the result was not a number (NaN) or infinite,
      // which means the input was incomplete or invalid.
      //  Clear any previously displayed output.
      // Erase the content of these elements
      // With no arguments, clears the chart

      payment.innerHTML = '';
      total.innerHTML = '';
      totalInterest.innerHTML = '';
      this.chart(principal, monthlyInterestRate, monthly, payments);
    }
  }

  getLenders(amount, apr, years, zipcode) {
     /** Pass the user's input to a server-side script which can (in theory) return 
      a list of links to local lenders interested in making loans. This example
      does not actually inclye a working implementation of such a lender-finding
      service. But if the service existed, this function would work with it. 
      */

         // If the browser does not support the XMLHttpRequest object, do nothing
         if(!window.XMLHttpRequest)
         
         {
           return;
         }

         // Find the element to display the list of lenders in 
         var ad = document.getElementById("lenders");
         if (!ad) return; // Quit if no spot for input
   
         // Encode the user's input as query parameters in a URL
         // user data in query string
   
  }
}
