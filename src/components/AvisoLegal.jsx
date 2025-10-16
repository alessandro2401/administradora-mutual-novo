import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

function AvisoLegal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
      <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 shadow-md">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertDescription className="ml-2 text-sm md:text-base text-gray-800">
          <strong className="font-semibold">AVISO IMPORTANTE:</strong> A Administradora Mutual encontra-se em fase de estruturação 
          e não realiza, intermedeia ou oferece operações de proteção patrimonial mutualista até a publicação das normas 
          complementares do CNSP e a obtenção da devida autorização da SUSEP.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default AvisoLegal;

