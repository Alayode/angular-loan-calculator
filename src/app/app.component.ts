import { Component } from '@angular/core';

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
    
      console.log(principal, monthlyInterestRate, payments);
  

    
  }
}
