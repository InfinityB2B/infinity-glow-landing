
import React, { useState } from 'react';
import { Lock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type LeadFormData = {
  fullName: string;
  companyName: string;
  location: string;
  whatsapp: string;
  email: string;
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<LeadFormData>({
    defaultValues: {
      fullName: '',
      companyName: '',
      location: '',
      whatsapp: '',
      email: '',
    }
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            full_name: data.fullName,
            company_name: data.companyName,
            location: data.location,
            whatsapp: data.whatsapp,
            email: data.email,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) {
        console.error('Error submitting form:', error);
        toast.error('Erro ao enviar o formulário. Tente novamente.');
        return;
      }
      
      setIsSubmitted(true);
      form.reset();
      toast.success('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar o formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="bg-gradient-to-b from-infinity-950 to-black py-20">
      <div className="infinity-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            <span className="relative">
              Vamos fazer um diagnóstico gratuito da sua empresa?
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mt-4 mb-8">
            Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades 
            e apresentar como a INFINITY pode te ajudar.
          </p>
          
          <div className="bg-infinity-600/20 rounded-lg p-4 mb-8 backdrop-blur-sm border border-infinity-600/30 inline-block">
            <p className="text-white font-medium">
              O número de vagas para nossa consultoria é limitado. Aproveite a chance de otimizar sua empresa agora!
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-infinity-950/50 p-8 rounded-xl backdrop-blur-sm border border-infinity-900/50 shadow-glow-sm">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="text-infinity-500 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Formulário Enviado com Sucesso!</h3>
              <p className="text-gray-300">Nossa equipe entrará em contato em breve para agendar seu diagnóstico gratuito.</p>
              <Button 
                onClick={() => setIsSubmitted(false)} 
                variant="outline" 
                className="mt-8 border-infinity-500 text-infinity-500 hover:bg-infinity-500/20"
              >
                Enviar outro contato
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            required
                            placeholder="Nome completo" 
                            className="bg-black/50 border-infinity-900/50 placeholder:text-gray-400 text-white" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            required
                            placeholder="Nome da empresa" 
                            className="bg-black/50 border-infinity-900/50 placeholder:text-gray-400 text-white" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            required
                            placeholder="Cidade/Estado" 
                            className="bg-black/50 border-infinity-900/50 placeholder:text-gray-400 text-white" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            required
                            type="tel"
                            placeholder="WhatsApp" 
                            className="bg-black/50 border-infinity-900/50 placeholder:text-gray-400 text-white" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            required
                            type="email"
                            placeholder="E-mail" 
                            className="bg-black/50 border-infinity-900/50 placeholder:text-gray-400 text-white" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-infinity-600 hover:bg-infinity-700 text-white font-bold py-4 text-lg transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Consultoria Agora'}
                </Button>
              </form>
            </Form>
          )}
          
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Lock className="w-4 h-4 mr-2 text-infinity-500" />
            <p>Seus dados estão protegidos conosco. Nada de spam.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
