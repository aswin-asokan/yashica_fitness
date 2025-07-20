import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 left-4 z-40 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="hidden sm:inline">Back</span>
    </button>
  );
};

export default BackButton;