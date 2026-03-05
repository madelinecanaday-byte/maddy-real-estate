"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { calculateMortgage, formatPrice } from "@/lib/utils";

export default function CalculatorPage() {
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

  // Pie chart percentages
  const piTotal =
    calculations.monthlyPI +
    calculations.monthlyTax +
    calculations.monthlyInsurance;
  const piPercent = (calculations.monthlyPI / piTotal) * 100;
  const taxPercent = (calculations.monthlyTax / piTotal) * 100;
  const insurancePercent = (calculations.monthlyInsurance / piTotal) * 100;

  // Conic gradient for CSS pie chart
  const conicGradient = `conic-gradient(
    #C45D3E 0% ${piPercent}%,
    #A8B5A0 ${piPercent}% ${piPercent + taxPercent}%,
    #6B6560 ${piPercent + taxPercent}% 100%
  )`;

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Plan Your Purchase
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Mortgage Calculator
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Estimate your monthly mortgage payment and see a breakdown of
            principal, interest, taxes, and insurance.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Inputs */}
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Enter Your Details
              </h2>

              {/* Home Price */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="font-sans text-sm uppercase tracking-wider text-charcoal-light">
                    Home Price
                  </label>
                  <span className="font-serif text-xl text-charcoal">
                    {formatPrice(homePrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={3000000}
                  step={10000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-terracotta"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-sans text-xs text-charcoal-light">
                    $100K
                  </span>
                  <span className="font-sans text-xs text-charcoal-light">
                    $3M
                  </span>
                </div>
              </div>

              {/* Down Payment */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="font-sans text-sm uppercase tracking-wider text-charcoal-light">
                    Down Payment
                  </label>
                  <div className="text-right">
                    <span className="font-serif text-xl text-charcoal">
                      {downPaymentPercent}%
                    </span>
                    <span className="font-sans text-sm text-charcoal-light ml-2">
                      ({formatPrice(homePrice * (downPaymentPercent / 100))})
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={1}
                  value={downPaymentPercent}
                  onChange={(e) =>
                    setDownPaymentPercent(Number(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-terracotta"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-sans text-xs text-charcoal-light">
                    0%
                  </span>
                  <span className="font-sans text-xs text-charcoal-light">
                    50%
                  </span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label
                    htmlFor="interestRate"
                    className="font-sans text-sm uppercase tracking-wider text-charcoal-light"
                  >
                    Interest Rate
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="interestRate"
                    type="number"
                    min={1}
                    max={15}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(Number(e.target.value) || 0)
                    }
                    className="w-full border-b-2 border-gray-200 focus:border-terracotta bg-transparent py-3 font-serif text-xl text-charcoal outline-none transition-colors duration-300 pr-8"
                  />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 font-sans text-charcoal-light">
                    %
                  </span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="font-sans text-sm uppercase tracking-wider text-charcoal-light block mb-3">
                  Loan Term
                </label>
                <div className="flex gap-4">
                  {[15, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`flex-1 py-3 px-6 font-sans text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                        loanTerm === term
                          ? "bg-terracotta text-white"
                          : "bg-gray-100 text-charcoal-light hover:bg-gray-200"
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Results */}
            <div className="space-y-6">
              {/* Monthly Payment Card */}
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <p className="font-sans text-sm uppercase tracking-wider text-charcoal-light mb-2">
                  Estimated Monthly Payment
                </p>
                <p className="font-serif text-5xl md:text-6xl text-charcoal mb-8">
                  {formatPrice(Math.round(calculations.totalMonthly))}
                </p>

                {/* Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-terracotta rounded-full" />
                      <span className="font-sans text-sm text-charcoal">
                        Principal &amp; Interest
                      </span>
                    </div>
                    <span className="font-sans text-sm font-medium text-charcoal">
                      {formatPrice(Math.round(calculations.monthlyPI))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-sage rounded-full" />
                      <span className="font-sans text-sm text-charcoal">
                        Property Tax
                        <span className="text-charcoal-light ml-1">
                          (est. 1.05%)
                        </span>
                      </span>
                    </div>
                    <span className="font-sans text-sm font-medium text-charcoal">
                      {formatPrice(Math.round(calculations.monthlyTax))}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-charcoal-light rounded-full" />
                      <span className="font-sans text-sm text-charcoal">
                        Home Insurance
                        <span className="text-charcoal-light ml-1">
                          (est.)
                        </span>
                      </span>
                    </div>
                    <span className="font-sans text-sm font-medium text-charcoal">
                      {formatPrice(calculations.monthlyInsurance)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <h3 className="font-serif text-xl text-charcoal mb-6 text-center">
                  Payment Breakdown
                </h3>
                <div className="flex items-center justify-center">
                  <div
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full relative"
                    style={{ background: conicGradient }}
                  >
                    <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-serif text-2xl text-charcoal">
                          {formatPrice(
                            Math.round(calculations.totalMonthly)
                          )}
                        </p>
                        <p className="font-sans text-xs text-charcoal-light mt-1">
                          per month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-terracotta rounded-full" />
                    <span className="font-sans text-xs text-charcoal-light">
                      P&amp;I ({piPercent.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-sage rounded-full" />
                    <span className="font-sans text-xs text-charcoal-light">
                      Tax ({taxPercent.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-charcoal-light rounded-full" />
                    <span className="font-sans text-xs text-charcoal-light">
                      Insurance ({insurancePercent.toFixed(0)}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Loan Summary */}
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Loan Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-charcoal-light">Home Price</span>
                    <span className="text-charcoal font-medium">
                      {formatPrice(homePrice)}
                    </span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-charcoal-light">Down Payment</span>
                    <span className="text-charcoal font-medium">
                      {formatPrice(calculations.downPayment)} (
                      {downPaymentPercent}%)
                    </span>
                  </div>
                  <div className="flex justify-between font-sans text-sm pt-3 border-t border-gray-100">
                    <span className="text-charcoal font-medium">
                      Loan Amount
                    </span>
                    <span className="text-charcoal font-medium">
                      {formatPrice(calculations.loanAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block bg-terracotta text-white text-center py-4 px-8 font-sans font-medium tracking-wide uppercase text-sm hover:bg-terracotta-dark transition-all duration-300"
              >
                Get Pre-Approved Today
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="font-sans text-xs text-charcoal-light/70 mt-8 text-center max-w-3xl mx-auto">
            * This calculator provides estimates for informational purposes
            only. Actual payments may vary based on your specific financial
            situation, lender terms, property taxes, insurance rates, and other
            factors. Contact a mortgage lender for an accurate quote.
          </p>
        </div>
      </section>
    </>
  );
}
