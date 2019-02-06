import { Component } from '@angular/core';

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
      totalInterest = 'Total interest: ';
      sponsors = 'Sponsors: ';
      lendersText = 'Apply for your loan with one of these fine lenders: ';
      calculate = 'Calculate';
}
