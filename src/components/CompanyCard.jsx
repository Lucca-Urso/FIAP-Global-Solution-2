const CompanyCard = ({ companyName, logo, useCase, results }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        {logo && (
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
            <span className="text-xl font-bold text-primary">{logo}</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-primary">{companyName}</h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{useCase}</p>

      {results && results.length > 0 && (
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Resultados Alcançados</h4>
          <div className="grid grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-accent/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-accent-dark mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;