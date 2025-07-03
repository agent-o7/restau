import React, { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface TableSelectionViewProps {
  cart: CartItem[];
  onBack: () => void;
  onConfirmTable: (tableNumber: number) => void;
}

export default function TableSelectionView({ cart, onBack, onConfirmTable }: TableSelectionViewProps) {
  const [tableNumber, setTableNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(price);
  };

  const generateWhatsAppMessage = (tableNum: number) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    let message = `🍽️ *Nouvelle Commande - AfricaEats*\n\n`;
    message += `📍 *Numéro de Table :* ${tableNum}\n\n`;
    message += `📋 *Détails de la Commande :*\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantité : ${item.quantity}\n`;
      message += `   Prix : ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *Montant Total : ${formatPrice(total)}*\n\n`;
    message += `⏰ Commande passée le : ${new Date().toLocaleString('fr-FR')}\n\n`;
    message += `Merci d'avoir choisi AfricaEats ! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const num = parseInt(tableNumber);
    if (!tableNumber || isNaN(num) || num < 1 || num > 50) {
      setError('Veuillez entrer un numéro de table valide (1-50)');
      return;
    }

    setError('');
    
    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage(num);
    
    // Restaurant's WhatsApp number (replace with actual number)
    const restaurantWhatsApp = '22879689386'; // Replace with restaurant's actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${restaurantWhatsApp}?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Call the original confirmation handler
    onConfirmTable(num);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 ml-2">Sélectionnez Votre Table</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              À quelle table êtes-vous ?
            </h2>
            <p className="text-gray-600">
              Entrez votre numéro de table et nous enverrons votre commande au restaurant via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Numéro de Table
              </label>
              <input
                type="number"
                id="tableNumber"
                value={tableNumber}
                onChange={(e) => {
                  setTableNumber(e.target.value);
                  setError('');
                }}
                placeholder="Entrez le numéro de table (1-50)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-center text-2xl font-semibold"
                min="1"
                max="50"
              />
              {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>Envoyer la Commande via WhatsApp</span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Comment ça marche :</strong> Après avoir cliqué sur le bouton, WhatsApp s'ouvrira avec les détails de votre commande pré-remplis. Il vous suffit d'envoyer le message pour passer votre commande !
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Vous ne trouvez pas votre numéro de table ?</strong> Il est généralement affiché sur une petite carte sur votre table ou demandez à un membre du personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
