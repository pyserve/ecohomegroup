function App() {
  return (
    <div className="bg-black">
      <video
        className="fixed left-0 top-0 h-[100vh] w-[100vw] object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
      />

      <div className="fixed h-full w-full backdrop-brightness-50"></div>

      <div className="relative min-h-[100vh]">
        <div className="container mx-auto flex flex-col items-center justify-center py-40">
          <div className="h-32 w-32 bg-white/80 grid place-items-center rounded-full">
            <img className="h-20 w-20" src="/ecohomegroup.png" />
          </div>

          <div className="flex flex-col items-center max-w-4xl">
            <h1 className="text-5xl font-bold text-white text-center mt-4">
              Welcome to Eco Home Group
            </h1>
            <p className="text-white text-2xl text-center mt-4">
              Eco Home Group is a dedicated management company that supports
              multiple HVAC service providers in their operations and
              installations. With over 15 years of experience in the industry,
              we ensure seamless coordination and high-quality service for our
              partnered companies.
            </p>

            <p className="text-white/90 text-center italic mt-8">
              Important Notice
            </p>
            <p className="text-white/70 text-center italic">
              Eco Home Group is not a sales or marketing company. We do not
              engage in direct customer agreements, promotions, or sales
              activities. Any agreements, pricing, or service commitments are
              made directly between customers and the individual service
              providers they have chosen. If you have any questions regarding
              your contract, billing, or service terms, please contact the
              company with which you signed your agreement.
            </p>

            <p className="text-3xl font-bold text-white text-center mt-40">
              Thank you for visiting Eco Home Group.
            </p>
          </div>
        </div>
      </div>
      <footer className="relative bg-black text-gray-400">
        <div className="container mx-auto py-4">
          Copyright &copy; 2025 Eco Home Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
