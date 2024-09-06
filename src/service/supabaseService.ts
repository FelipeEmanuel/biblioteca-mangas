// supabaseService.ts
import { supabase } from './supabaseClient';

export const getUsers = async () => {
  
    const { data, error } = await supabase
    .from('users')
    .select('*')
        
  if (error) {
    console.error('Erro ao buscar users:', error.message);
    return [];
  }

  return data;
};