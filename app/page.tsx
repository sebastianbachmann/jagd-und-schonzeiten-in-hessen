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
        nationwide: '01.08. - 28.02',
        hesse: '01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Schmalspiesser',
        nationwide: '01.06. - 28.02',
        hesse: '01.04.-31.05, 01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Schmaltiere',
        nationwide: '01.06. - 31.01',
        hesse: '01.04.-31.05, 01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Alttiere u. Hirsche',
        nationwide: '01.08. - 31.01',
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
        nationwide: '01.08. - 28.02',
        hesse: '01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Schmalspiesser',
        nationwide: '01.06. - 28.02',
        hesse: '01.04.-31.05, 01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Schmaltiere',
        nationwide: '01.06. - 31.01',
        hesse: '01.04.-31.05, 01.08.-31.01',
        notes: '---',
      },
      {
        class: 'Alttiere u. Hirsche',
        nationwide: '01.08. - 31.01',
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
        nationwide: '01.09. - 28.02',
        hesse: '01.09.-31.01',
        notes: '---',
      },
      {
        class: 'Schmalrehe',
        nationwide: '01.05. - 31.01',
        hesse: '01.04. - 31.01',
        notes: '---',
      },
      {
        class: 'Ricken',
        nationwide: '01.09. - 31.01',
        hesse: '---',
        notes: '---',
      },
      {
        class: 'Böcke',
        nationwide: '01.05. - 15.10',
        hesse: '01.04. - 31.01',
        notes: '---',
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
      <section className="wide-container mt-12">
        <LatestArticles />
      </section>
    </div>
  );
}
