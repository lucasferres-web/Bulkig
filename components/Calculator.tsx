
import React, { useState } from 'react';
import { UserData } from '../types';

interface Props {
  onSubmit: (data: UserData) => void;
}

const Calculator: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    weight: 70,
    height: 175,
    age: 25,
    sex: 'male'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg mx-auto border border-stone-100 animate-in fade-in slide-in-from-bottom-6 duration-700 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]"></div>
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Evolução Começa Aqui</h2>
        <p className="text-slate-600 font-semibold italic">Calcule seus macros de bulking agora.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest block">Peso (kg)</label>
            <input
              type="number"
              required
              min="30"
              max="250"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
              className="w-full px-4 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-[#C5A059] focus:ring-0 outline-none transition-all font-bold text-slate-800"
              placeholder="Ex: 75"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest block">Altura (cm)</label>
            <input
              type="number"
              required
              min="100"
              max="250"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
              className="w-full px-4 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-[#C5A059] focus:ring-0 outline-none transition-all font-bold text-slate-800"
              placeholder="Ex: 180"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest block">Idade</label>
            <input
              type="number"
              required
              min="12"
              max="100"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
              className="w-full px-4 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-[#C5A059] focus:ring-0 outline-none transition-all font-bold text-slate-800"
              placeholder="Ex: 25"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest block">Sexo</label>
            <select
              value={formData.sex}
              onChange={(e) => setFormData({ ...formData, sex: e.target.value as 'male' | 'female' })}
              className="w-full px-4 py-4 rounded-2xl border-2 border-stone-100 bg-stone-50 focus:bg-white focus:border-[#C5A059] focus:ring-0 outline-none transition-all font-bold text-slate-800 appearance-none"
            >
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-5 px-6 bg-slate-950 hover:bg-[#C5A059] text-[#C5A059] hover:text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
        >
          Iniciar Protocolo
        </button>
      </form>
    </div>
  );
};

export default Calculator;
