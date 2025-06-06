
export const Statistics = () => {
  return (
    <section className="py-16 px-6 bg-legal-light-blue">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-legal-navy mb-4">
            Driving measurable impact for legal professionals
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="animate-fade-in">
            <div className="text-5xl font-bold text-legal-gold mb-2">35%</div>
            <div className="text-lg text-legal-blue font-medium">
              Increase in billable hours
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-legal-blue mb-2">&lt;4h</div>
            <div className="text-lg text-legal-blue font-medium">
              Average case resolution time
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl font-bold text-legal-navy mb-2">28%</div>
            <div className="text-lg text-legal-blue font-medium">
              Revenue growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
