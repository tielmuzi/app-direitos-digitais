import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = 'https://vqpxfhwrbtuqlcmttcao.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxcHhmaHdyYnR1cWxjbXR0Y2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3OTYyMzMsImV4cCI6MjA2MzM3MjIzM30.o3JN5jcOJm5NGuXFhM9KF2_SqpmJlesQCR2a7SjesJY';
  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  constructor() {}

  async salvarQuestionario(dados: any) {
    const { data, error } = await this.supabase
      .from('questionarios')
      .insert([dados])
      .select();

    if (error) throw error;
    return data;
  }

  async salvarRelato(dados: any) {
    const { data, error } = await this.supabase
      .from('relatos')
      .insert([dados])
      .select();

    if (error) throw error;
    return data;
  }

  async obterDadosQuestionarios() {
    const { data, error } = await this.supabase
      .from('questionarios')
      .select('*');

    if (error) throw error;
    return data;
  }

  async obterDadosRelatos() {
    const { data, error } = await this.supabase
      .from('relatos')
      .select('*');

    if (error) throw error;
    return data;
  }
}