
export const Statistics = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Driving measurable impact
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="animate-fade-in">
            <div className="text-5xl font-bold text-[#FF6B6B] mb-2">21%</div>
            <div className="text-lg text-muted-foreground">
              Increase in billable hours
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-[#1976D2] mb-2">&lt;6h</div>
            <div className="text-lg text-muted-foreground">
              Time to case resolution
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl font-bold text-[#2E7D32] mb-2">11%</div>
            <div className="text-lg text-muted-foreground">
              Revenue growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
