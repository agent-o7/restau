import React from 'react';
import { QrCode, Utensils, Clock, Users } from 'lucide-react';

interface LandingViewProps {
  onStart: () => void;
}

export default function LandingView({ onStart }: LandingViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2">
            <Utensils className="h-8 w-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-900">AfricaEats</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <QrCode className="h-12 w-12 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bienvenue dans la Restauration Numérique
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Scannez, parcourez et commandez directement depuis votre table. Sans attente, sans tracas.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Commande Rapide</h3>
                <p className="text-sm text-gray-600">Passez votre commande en quelques minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Utensils className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Menu Complet</h3>
                <p className="text-sm text-gray-600">Parcourez notre menu complet avec photos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Service à Table</h3>
                <p className="text-sm text-gray-600">Plats livrés directement à votre table</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-200"
        >
          Commencer à Commander
        </button>

        {/* Restaurant Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Découvrez la cuisine togolaise authentique
          </p>
        </div>
      </div>
    </div>
  );
}