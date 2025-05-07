
import React, { useState } from 'react';

const SupabaseForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    segment: '',
    location: '',
    revenue: '',
    challenge: '',
    whatsapp: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Este componente foi preparado para integração futura com Supabase
    // Quando o Supabase estiver integrado, o código de envio será implementado aqui
    
    console.log('Form data to be sent to Supabase:', formData);
    
    // Simulação de envio bem-sucedido
    alert('Formulário preparado para integração com Supabase. Os dados foram registrados no console.');
    
    // Limpar formulário
    setFormData({
      fullName: '',
      companyName: '',
      segment: '',
      location: '',
      revenue: '',
      challenge: '',
      whatsapp: '',
      email: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields will be similar to ContactSection */}
      {/* This component is prepared for future Supabase integration */}
      <input
        name="fullName"
        type="text"
        placeholder="Nome completo"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      
      <button 
        type="submit" 
        className="w-full bg-infinity-600 text-white py-2 rounded"
      >
        Enviar (Preparado para Supabase)
      </button>
    </form>
  );
};

export default SupabaseForm;
