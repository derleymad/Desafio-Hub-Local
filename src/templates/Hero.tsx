import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-blue-50">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sobre</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Sua empresa bem localizada em\n'}
            <span className="text-primary-500">Mapas e Listas da internet</span>
          </>
        }
        description="A forma mais fácil de aumentar o seu público em pouco tempo."
        button={
          <Link href="https://hublocal.com.br/planos/">
            <a>
              <Button xl>Veja nossos planos</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
