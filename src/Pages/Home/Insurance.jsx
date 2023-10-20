const Insurance = () => {
  return (
    <div>
      <h1 className="text-center mb-10 text-4xl font-bold">
        Car <span className="text-[#ff7232]">Financing</span>
      </h1>
      <div className="md:flex items-center">
        <div className="w-fit">
          <img src="/images/insurance.jpg" alt="" />
        </div>
        <div className="w-fit">
          <p className="px-10 font-bold">
            Auto loans are one of the most common forms of car financing. With
            an auto loan, a borrower borrows a specific amount of money to
            purchase a vehicle and agrees to repay the loan with interest over a
            predetermined period, usually three to seven years. These loans can
            be obtained from banks, credit unions, or online lenders. The
            interest rate on the loan can be fixed or variable.Vehicle leasing
            involves renting a car for a fixed period, typically two to three
            years, and making regular lease payments. At the end of the lease
            term, the lessee has the option to purchase the car or return it to
            the dealership. Leasing often requires a lower down payment and may
            offer lower monthly payments compared to purchasing through a loan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
