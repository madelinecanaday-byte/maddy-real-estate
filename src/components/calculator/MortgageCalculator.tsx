"use client";

import { useState, useMemo } from "react";
import { calculateMortgage, formatPrice } from "@/lib/utils";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculations = useMemo(() => {
    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyPI = calculateMortgage(loanAmount, interestRate, loanTerm);
    const monthlyTax = (homePrice * 0.0105) / 12;
    const monthlyInsurance = 150;
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;

    return {
      downPayment,
      loanAmount,
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      totalMonthly,
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTerm]);

  const piPercent =
    (calculations.monthlyPI / calculations.totalMonthly) * 100;
  const taxPercent =
    (calculations.monthlyTax / calculations.totalMonthly) * 100;

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Inputs */}
      <div className="space-y-8">
        {/* Home Price */}
        <div>
          <label className="block font-sans text-sm font-medium text-charcoal mb-2">
            Home Price
          </label>
          <div className="text-2xl font-serif text-charcoal mb-3">
            {formatPrice(homePrice)}
          </div>
          <input
            type="range"
            min={100000}
            max={3000000}
            step={10000}
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full h-2 bg-sage/30 rounded-lg appearance-none cursor-pointer accent-terracotta"
          />
          <div className="flex justify-between text-xs text-charcoal-light mt-1">
            <span>$100K</span>
            <span>$3M</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block font-sans text-sm font-medium text-charcoal mb-2">
            Down Payment: {downPaymentPercent}%
          </label>
          <div className="text-lg font-serif text-charcoal mb-3">
            {formatPrice(calculations.downPayment)}
          </div>
          <input
            type="range"
            min={0}
            max={50}
            step={1}
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-sage/30 rounded-lg appearance-none cursor-pointer accent-terracotta"
          />
          <div className="flex justify-between text-xs text-charcoal-light mt-1">
            <span>0%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block font-sans text-sm font-medium text-charcoal mb-2">
            Interest Rate
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={0}
              max={15}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-24 border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-2 text-lg font-serif text-charcoal outline-none transition-colors"
            />
            <span className="text-charcoal-light">%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block font-sans text-sm font-medium text-charcoal mb-4">
            Loan Term
          </label>
          <div className="flex gap-4">
            {[15, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`px-8 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
                  loanTerm === term
                    ? "bg-terracotta text-white"
                    : "border-2 border-gray-200 text-charcoal hover:border-terracotta"
                }`}
              >
                {term} Years
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-cream p-8 md:p-10">
        <h3 className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
          Estimated Monthly Payment
        </h3>
        <div className="text-5xl md:text-6xl font-serif text-charcoal mb-8">
          {formatPrice(Math.round(calculations.totalMonthly))}
        </div>

        {/* Pie chart visualization */}
        <div className="flex justify-center mb-8">
          <div
            className="w-48 h-48 rounded-full"
            style={{
              background: `conic-gradient(
                #C45D3E 0% ${piPercent}%,
                #A8B5A0 ${piPercent}% ${piPercent + taxPercent}%,
                #6B6560 ${piPercent + taxPercent}% 100%
              )`,
            }}
          />
        </div>

        {/* Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-terracotta rounded-full" />
              <span className="font-sans text-sm">Principal & Interest</span>
            </div>
            <span className="font-serif text-lg">
              {formatPrice(Math.round(calculations.monthlyPI))}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-sage rounded-full" />
              <span className="font-sans text-sm">Property Tax</span>
            </div>
            <span className="font-serif text-lg">
              {formatPrice(Math.round(calculations.monthlyTax))}
            </span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-charcoal-light rounded-full" />
              <span className="font-sans text-sm">Home Insurance</span>
            </div>
            <span className="font-serif text-lg">
              {formatPrice(Math.round(calculations.monthlyInsurance))}
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-sm text-charcoal-light mb-2">
            <span>Loan Amount</span>
            <span>{formatPrice(calculations.loanAmount)}</span>
          </div>
          <div className="flex justify-between text-sm text-charcoal-light">
            <span>Total Interest Paid</span>
            <span>
              {formatPrice(
                Math.round(
                  calculations.monthlyPI * loanTerm * 12 -
                    calculations.loanAmount
                )
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
