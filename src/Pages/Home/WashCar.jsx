const WashCar = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center mb-10 text-4xl font-bold">
        Car <span className="text-[#ff7232]">Maintenance</span>
      </h1>
      <div className="md:flex items-center">
        <div className="w-fit">
          <p className="px-10 font-bold">
            Regularly changing the engine oil and oil filter is crucial to
            ensure proper engine lubrication and prevent damage to internal
            components. This includes monitoring tire pressure, rotating the
            tires, and ensuring proper alignment. Well-maintained tires provide
            better traction, improve fuel efficiency, and enhance safety.Routine
            inspection of the brake system, including brake pads, rotors, and
            brake fluid, is essential for safe stopping and preventing brake
            system failures. Fluid Checks Regularly checking and topping up
            various fluids such as coolant, transmission fluid, power steering
            fluid, and windshield washer fluid keeps the vehicle's systems
            operating smoothly.
          </p>
        </div>
        <div className="w-fit">
          <img src="/images/carCare.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WashCar;
