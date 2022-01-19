import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Depois disso tudo você não pode ficar de fora né!?"
      subtitle="Solicite uma demostração"
      button={
        <Link href="https://hublocal.com.br/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">
          <a target="_blank">
            <Button>Inscrever-se</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
