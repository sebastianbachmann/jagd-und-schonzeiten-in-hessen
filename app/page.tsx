import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shared/ui/table';

import LatestArticles from '@/components/blog/LatestArticles';
import React from 'react';

const animals = [
  {
    type: 'Rotwild',
    details: [
      {
        class: 'Kaelber',
        nationwide: '01.08. - 28.02.',
        hesse: '01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Schmalspiesser',
        nationwide: '01.06. - 28.02',
        hesse: '01.04. - 31.05., 01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Schmaltiere',
        nationwide: '01.06. - 31.01.',
        hesse: '01.04. - 31.05., 01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Alttiere u. Hirsche',
        nationwide: '01.08. - 31.01.',
        hesse: '---',
        notes: '---',
      },
    ],
  },
  {
    type: 'Dam- / Sikkawild',
    details: [
      {
        class: 'Kaelber',
        nationwide: '01.08. - 28.02.',
        hesse: '01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Schmalspiesser',
        nationwide: '01.06. - 28.02',
        hesse: '01.04. - 31.05., 01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Schmaltiere',
        nationwide: '01.06. - 31.01.',
        hesse: '01.04. - 31.05., 01.08. - 31.01.',
        notes: '---',
      },
      {
        class: 'Alttiere u. Hirsche',
        nationwide: '01.08. - 31.01.',
        hesse: '---',
        notes: '---',
      },
    ],
  },
  {
    type: 'Rehwild',
    details: [
      {
        class: 'Kitze',
        nationwide: '01.09. - 28.02.',
        hesse: '01.09.-31.01',
        notes: '---',
      },
      {
        class: 'Schmalrehe',
        nationwide: '01.05. - 31.01.',
        hesse: '01.04. - 31.01',
        notes: '---',
      },
      {
        class: 'Ricken',
        nationwide: '01.09. - 31.01.',
        hesse: '---',
        notes: '---',
      },
      {
        class: 'Böcke',
        nationwide: '01.05. - 15.10.',
        hesse: '01.04. - 31.01',
        notes: '---',
      },
    ],
  },
  {
    type: 'Gamswild',
    details: [
      {
        class: '---',
        nationwide: '01.08. - 15.12.',
        hesse: '---',
        notes: '---',
      },
    ],
  },
  {
    type: 'Muffelwild',
    details: [
      {
        class: '---',
        nationwide: '01.08. - 31.01.',
        hesse: '---',
        notes: '---',
      },
      {
        class: 'Jährlingswidder und Schmalschafe',
        nationwide: '---',
        hesse: '01.04. - 31.05., 01.08. - 31.01.',
        notes: '---',
      },
    ],
  },
  {
    type: 'Schwarzwild',
    details: [
      {
        class: 'Keiler & Bachen',
        nationwide: 'ganzjährig',
        hesse: '---',
        notes: '§ 22 (4) BJG beachten',
      },
      {
        class: 'Überläufer',
        nationwide: 'ganzjährig',
        hesse: '---',
        notes: '§ 22 (4) BJG beachten',
      },
      {
        class: 'Frischlinge',
        nationwide: 'ganzjährig',
        hesse: '---',
        notes: '§ 22 (4) BJG beachten',
      },
    ],
  },
  {
    type: 'Feldhasen',
    details: [
      {
        class: '',
        nationwide: '01.10. - 15.01.',
        hesse: '01.10. - 31.12.',
        notes: 'In Gebieten mit ausreichend Besätzen!',
      },
    ],
  },
  {
    type: 'Steinmarder',
    details: [
      {
        class: '',
        nationwide: '16.10. - 28.02.',
        hesse: '16.10. - 28.02',
        notes: '',
      },
    ],
  },
  {
    type: 'Baummarder',
    details: [
      {
        class: '',
        nationwide: '16.10. - 28.02.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Iltisse',
    details: [
      {
        class: '',
        nationwide: '01.08. - 28.02.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Hermeline',
    details: [
      {
        class: '',
        nationwide: '01.08. - 28.02.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Mauswiesel',
    details: [
      {
        class: '',
        nationwide: '01.08. - 28.02.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Dachse',
    details: [
      {
        class: '',
        nationwide: '01.08. - 31.10.',
        hesse: '',
        notes: '',
      },
    ],
  },
  {
    type: 'Rebhühner',
    details: [
      {
        class: '',
        nationwide: '01.09. - 15.12.',
        hesse: '16.09. - 31.10.',
        notes: 'In Gebieten mit ausreichend Besätzen!',
      },
    ],
  },
  {
    type: 'Fasanen',
    details: [
      {
        class: '',
        nationwide: '01.10. - 15.01.',
        hesse: '',
        notes: 'Keine Fasanenhennen',
      },
    ],
  },
  {
    type: 'Wildtruthähne',
    details: [
      {
        class: '',
        nationwide: '15.03. - 15.05. & 01.10. - 15.01.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Wildtruthennen',
    details: [
      {
        class: '',
        nationwide: '01.10. - 15.01.',
        hesse: 'Keine Jagdzeit',
        notes: '',
      },
    ],
  },
  {
    type: 'Ringeltauben',
    details: [
      {
        class: '',
        nationwide: '01.11. - 20.02.',
        hesse: '01.11. - 15.01',
        notes: '',
      },
      {
        class: 'Juvenile Ringeltauben',
        nationwide: '',
        hesse: '01.11. - 20.02',
        notes: '',
      },
    ],
  },
  {
    type: 'Türkentauben',
    details: [
      {
        class: '',
        nationwide: '',
        hesse: '01.11. - 15.01.',
        notes: 'In Gebieten mit ausreichend Besätzen!',
      },
    ],
  },
  {
    type: 'Höckerschwäne',
    details: [
      {
        class: '',
        nationwide: '01.11. - 20.02',
        hesse: 'Keine Jagdzeit',
        notes: 'In Gebieten mit ausreichend Besätzen!',
      },
    ],
  },
  {
    type: 'Graugänse',
    details: [
      {
        class: '',
        nationwide: '01.08. - 31.08 & 01.11. - 15.01.',
        hesse: '01.08. - 31.10',
        notes: 'VSG-Regelung beachten, § 3 Abs. 4 HJagdV',
      },
    ],
  },
  {
    type: 'Kanadagänse',
    details: [
      {
        class: '',
        nationwide: '01.11. - 15.01.',
        hesse: '01.08. - 31.10',
        notes: '',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <Header className="mb-0 lg:mb-0" />
      <LandingPrimaryImageCtaSection
        title="Jagd- und Schonzeiten in Hessen"
        description="Die Jagd- und Schonzeiten in Hessen als PDF Download und Kalenderdatei."
        imageSrc="/static/images/irina-iriser-pBs9bFqR0D8-unsplash.jpg"
        withBackground
        withBackgroundGlow
      >
        <Button size="xl" asChild>
          <a href="/jetzt-kaufen">Jetzt kaufen!</a>
        </Button>
        <Button size="xl" asChild variant="outlinePrimary">
          <a href="/termine">Zu den Terminen</a>
        </Button>
      </LandingPrimaryImageCtaSection>
      <section className="wide-container mt-12">
        <Table>
          <TableCaption>Liste der Wildarten und Jagdzeiten</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Wildart</TableHead>
              <TableHead>Klasse</TableHead>
              <TableHead>Bund</TableHead>
              <TableHead>Hessen</TableHead>
              <TableHead>Bemerkung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {animals.map((animal) => (
              <React.Fragment key={animal.type}>
                {animal.details.map((detail, index) => (
                  <TableRow key={index}>
                    {index === 0 && (
                      <TableCell rowSpan={animal.details.length}>
                        {animal.type}
                      </TableCell>
                    )}
                    <TableCell>{detail.class}</TableCell>
                    <TableCell>{detail.nationwide}</TableCell>
                    <TableCell>{detail.hesse}</TableCell>
                    <TableCell>{detail.notes}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </section>
      {/* <section className="wide-container mt-12">
        <LatestArticles />
      </section> */}
    </div>
  );
}
