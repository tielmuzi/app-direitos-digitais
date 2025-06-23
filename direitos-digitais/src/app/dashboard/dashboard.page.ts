import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonBackButton, IonButtons 
} from '@ionic/angular/standalone';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonBackButton, IonButtons
  ],
})
export class DashboardPage implements OnInit {
  totalQuestionarios = 0;
  totalRelatos = 0;
  tiposViolacao: any[] = [];
  faixasEtarias: any[] = [];
  chart1: any;
  chart2: any;

  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    await this.carregarDados();
    this.criarGraficos();
  }

  async carregarDados() {
    const questionarios = await this.supabase.obterDadosQuestionarios();
    const relatos = await this.supabase.obterDadosRelatos();

    this.totalQuestionarios = questionarios?.length || 0;
    this.totalRelatos = relatos?.length || 0;

    // Contagem por tipo de violação
    const contagemViolacao: { [key: string]: number } = {};
    relatos?.forEach((relato: any) => {
      const tipo = relato.tipo_violacao || 'Não especificado';
      contagemViolacao[tipo] = (contagemViolacao[tipo] || 0) + 1;
    });
    this.tiposViolacao = Object.entries(contagemViolacao).map(([tipo, count]) => ({ tipo, count }));

    // Contagem por faixa etária
    const contagemFaixaEtaria: { [key: string]: number } = {};
    questionarios?.forEach((q: any) => {
      const faixa = q.faixa_etaria || 'Não especificado';
      contagemFaixaEtaria[faixa] = (contagemFaixaEtaria[faixa] || 0) + 1;
    });
    this.faixasEtarias = Object.entries(contagemFaixaEtaria).map(([faixa, count]) => ({ faixa, count }));
  }

  criarGraficos() {
    // Gráfico de tipos de violação
    const ctx1 = document.getElementById('violacaoChart') as HTMLCanvasElement;
    this.chart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: this.tiposViolacao.map(item => item.tipo),
        datasets: [{
          data: this.tiposViolacao.map(item => item.count),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#8AC24A', '#607D8B'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Tipos de Violação Reportados'
          }
        }
      }
    });

    // Gráfico de faixa etária
    const ctx2 = document.getElementById('faixaEtariaChart') as HTMLCanvasElement;
    this.chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: this.faixasEtarias.map(item => item.faixa),
        datasets: [{
          label: 'Participantes',
          data: this.faixasEtarias.map(item => item.count),
          backgroundColor: '#4BC0C0'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Participantes por Faixa Etária'
          }
        }
      }
    });
  }
}