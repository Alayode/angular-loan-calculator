import { Component, Input, InjectionToken, ViewChild, ElementRef } from '@angular/core';

const DOCUMENT: InjectionToken<Document>;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

<<<<<<< HEAD
=======
     @ViewChild('amount') amount: ElementRef; // const amount = document.getElementById("amount");
     @ViewChild('apr') apr: ElementRef; // const apr = document.getElementById("apr");
     @ViewChild('zipcode') zipcode: ElementRef; // const zipcode = document.getElementById("zipcode");
     @ViewChild('years') years: ElementRef; // const years = document.getElementById("years");
     @ViewChild('payment') payment: ElementRef; // const payment = document.getElementById("payment");
     @ViewChild('total') total: ElementRef; // const total = document.getElementById("total");
     @ViewChild('totalInterest') totalInterest: ElementRef; // const totalInterest = document.getElementById("totalinterest");

>>>>>>> 8e12013fdd9a3dc78aafa811c6fd9dcaceb63ae5
     enterLoanData = 'Enter Loan Data:';
      calculatorTitle = 'Loan Balance, Cumulative Equity, and Interest Payments';
      loanAmount = 'Amount of the loan ($):';
      annualInterest = 'Annual Interest (%):';
      repaymentPeriodInYears = 'Repayment period (years):';
      zip = ' Zipcode (to find lenders):';
      monthlyPayment = 'Monthly payment:';
      currencySymbol = '$';
      approximatePayments = 'Approximate Payment';
      totalPayment = 'Total Payment: ';
      totalInterest = 'Total interest: ';
      sponsors = 'Sponsors: ';
      lendersText = 'Apply for your loan with one of these fine lenders: ';
      buttonTitle = 'Calculate';


    calculate() {

    // 1. Look up the input and output elements in the document


    // 2. Get the user's input from the input elements. Assume it is all valid.

    // 3a. Convert interest from a percentage to a decimal,
    const principal = parseFloat(amount.value);

    // 3b. convert from an  annual rate to a monthly rate.
    const interest = parseFloat(apr.value) / 100 / 12;

    // 3c.Convert payment period in years to the number of monthly payments.
    const payments = parseFloat(years.value) * 12;

    // 4. Next compute the monthly payment figure.
    // If the result is   a finite number, the user's input was good and
    //  we have menaingful results to display.

    // mpf Monthly Payment Figure
    const mpf = Math.pow(1 + interest, payments);
    const monthly = (principal * mpf * interest) / (mpf - 1);

    if (isFinite(monthly)) {

      // Fill in the output fields, rounding to 2 decimal places
      payment.innerHTML = monthly.toFixed(2);
      total.innerHTML = (monthly * payments).toFixed(2);
      totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

   

    // 5.Save the user's input so we can restore it the next time they visit.
   
    save(amount.value, apr.value, years.value, zipcode.value);


    // 6. Advertise: find and display local lenders, but ignore network errors
    try {
      // Catch any errors that occur within these curly braces
      
      // getLenders(amount.value, apr.value, years.value, zipcode.value);
    } catch (e) { /* And ignore those errors  */ }

   
    chart(principal, interest, monthly, payments);
  }
    else {
      // Result was Not-a-Number or infinite, 
      // which menans the input was incompconste or invalid.
      // Clear any previously displayed output.

      // 7.  Lastly, chart loan balance, and interest and equity payments.
      //  otherwise (else) the result was not a number (NaN) or infinite,
      // which means the input was incompconste or invalid.
      //  Clear any previously displayed output.
      // Erase the content of these elements
      // With no arguments, clears the chart

    
      payment.innerHTML = "";
   total.innerHTML = "";
   totalinterest.innerHTML = "";
    chart();
      // clearInnerHTMLText();
    }
  }
  }


    }
