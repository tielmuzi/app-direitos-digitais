import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
  IonSelect, IonSelectOption, IonTextarea, IonButton, IonAlert, 
  IonBackButton, IonButtons, IonLabel 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relato',
  templateUrl: 'relato.page.html',
  styleUrls: ['relato.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
    IonSelect, IonSelectOption, IonTextarea, IonButton, FormsModule, 
    IonAlert, IonBackButton, IonButtons, IonLabel
  ],
})
export class RelatoPage {
  showAlert = false;
  alertMessage = '';

  relato = {
    tipo_violacao: '',
    descricao: '',
    faixa_etaria: '',
    nivel_escolaridade: '',
    genero: ''
  };

  tiposViolacao = [
    'Violação de Privacidade',
    'Cyberbullying',
    'Assédio Online',
    'Ciberataque',
    'Discurso de Ódio',
    'Fraude/Crime Financeiro',
    'Manipulação de Informação',
    'Outro'
  ];

  constructor(private supabase: SupabaseService, private router: Router) {}

  async enviarRelato() {
    try {
      await this.supabase.salvarRelato(this.relato);
      this.alertMessage = 'Relato enviado com sucesso! Obrigado por sua contribuição.';
      this.showAlert = true;
    } catch (error) {
      this.alertMessage = 'Erro ao enviar relato. Por favor, tente novamente.';
      this.showAlert = true;
      console.error(error);
    }
  }

  onAlertDismiss() {
    this.router.navigate(['/home']);
  }
}