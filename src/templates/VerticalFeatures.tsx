import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Atraindo clientes a todo momento, quer participar e entender como tudo isso funciona?"
    description="Simples, imagine uma maquina que trabalha em tempo real através de 4 passos..."
  >
    <VerticalFeatureRow
      title="Analisando presença..."
      description="Saiba se a sua empresa está de forma otimizada e presente em todos os mapas e listas da internet."
      image="/assets/images/feature.svg"
      imageAlt="Ilustração de um homem interagindo com localidade"
    />
    <VerticalFeatureRow
      title="Atualizando informações..."
      description="Mantenha as informações sobre o seu negócio sempre atualizadas e completas e não perca tempo para a sua concorrência."
      image="/assets/images/feature2.svg"
      imageAlt="Ilustração de uma mulher interagindo com um texto atualizado"
      reverse
    />
    <VerticalFeatureRow
      title="Divulgando o seu negócio..."
      description="A HubLocal divulga facilmente promoções, cupons e campanhas nos site e apps que mais interessam."
      image="/assets/images/feature3.svg"
      imageAlt="Ilustração de duas mulheres perto de um símbolo share"
    />
    <VerticalFeatureRow
      title="Procurando seus clientes..."
      description="Com os relatórios da HubLocal, receba informações vitais para aumentar seus resultados e ter novos clientes. "
      image="/assets/images/feature4.svg"
      imageAlt="Ilustração de uma mulher com um mapa no smartphone"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
