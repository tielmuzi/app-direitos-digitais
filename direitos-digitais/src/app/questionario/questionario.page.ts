import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, 
  IonSelectOption, IonRange, IonButton, IonLabel, 
  IonCheckbox, IonAlert, IonBackButton, IonButtons 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionario',
  templateUrl: 'questionario.page.html',
  styleUrls: ['questionario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, 
    IonSelectOption, IonRange, IonButton, IonLabel, 
    IonCheckbox, FormsModule, IonAlert, IonBackButton, IonButtons
  ],
})
export class QuestionarioPage {
  showAlert = false;
  alertMessage = '';

  dados = {
    faixa_etaria: '',
    nivel_escolaridade: '',
    genero: '',
    conhecimento_direitos_humanos: 3,
    conhecimento_declaracao: '',
    aplicacao_direitos_digital: '',
    direitos_mais_ameacados: [] as string[],
    preocupacao_dados_pessoais: 3,
    experiencia_negativa: '',
    educacao_direitos_digital: '',
    responsabilidade_protecao: [] as string[],
    regulamentacoes_suficientes: '',
    preocupacao_ia: 3,
    aspectos_preocupantes_ia: [] as string[]
  };

  direitosAmeacados = [
    'Privacidade',
    'Liberdade de expressão',
    'Acesso à informação',
    'Direito ao esquecimento',
    'Igualdade e não discriminação',
    'Direito à educação',
    'Proteção contra violência e assédio'
  ];

  responsabilidades = [
    'Governos e órgãos reguladores',
    'Empresas de tecnologia',
    'Organizações internacionais',
    'Cada indivíduo',
    'Sociedade civil organizada'
  ];

  aspectosIA = [
    'Vieses e discriminação algorítmica',
    'Substituição de empregos',
    'Vigilância em massa',
    'Manipulação de comportamento',
    'Concentração de poder nas grandes empresas de tecnologia',
    'Armas autônomas',
    'Desinformação automatizada'
  ];

  constructor(private supabase: SupabaseService, private router: Router) {}

  async enviarQuestionario() {
    try {
      await this.supabase.salvarQuestionario(this.dados);
      this.alertMessage = 'Questionário enviado com sucesso! Obrigado por sua contribuição.';
      this.showAlert = true;
    } catch (error) {
      this.alertMessage = 'Erro ao enviar questionário. Por favor, tente novamente.';
      this.showAlert = true;
      console.error(error);
    }
  }

  onAlertDismiss() {
    this.router.navigate(['/home']);
  }

  onCheckboxChange(array: string[], value: string, event: any, max: number) {
    if (event.detail.checked) {
      if (!array.includes(value)) {
        array.push(value);
      }
    } else {
      const idx = array.indexOf(value);
      if (idx > -1) {
        array.splice(idx, 1);
      }
    }
  }
}