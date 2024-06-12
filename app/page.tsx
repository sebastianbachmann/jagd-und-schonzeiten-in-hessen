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

const animals = [
  {
    type: 'Rotwild',
    class: [
      'Kaelber\n\n',
      'Schmalspießer\n\n',
      'Schmaltiere\n\n',
      'Alttiere und Hirsche\n\n',
    ],
    nationwide: [
      '01.08.- 28.02.',
      '01.06.- 28.02.\n\n',
      '01.06.- 31.01.\n\n',
      '01.08.- 31.01.\n\n',
    ],
    hesse: [
      '01.08.- 31.01.\n\n',
      '01.04.- 31.05 & 01.08.-31.01\n\n',
      '01.04.- 31.05 & 01.08.-31.01\n\n',
      '---\n\n',
    ],
    notes: 'tbd',
  },
  {
    type: 'Dam- / Sikawild',
    class: 'tbd',
    nationwide: 'tbd',
    hesse: 'tbd',
    notes: 'tbd',
  },
  {
    type: 'Rehwild',
    class: 'tbd',
    nationwide: 'tbd',
    paymentMethod: 'tbd',
  },
  {
    type: 'Gamswild',
    class: 'tbd',
    nationwide: 'tbd',
    paymentMethod: 'tbd',
  },
  {
    type: 'Muffelwild',
    class: 'tbd',
    nationwide: 'tbd',
    paymentMethod: 'tbd',
  },
  {
    type: 'Schwarzwild',
    class: 'tbd',
    nationwide: 'tbd',
    paymentMethod: 'tbd',
  },
  {
    type: 'Feldhasen',
    class: 'tbd',
    nationwide: 'tbd',
    paymentMethod: 'tbd',
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
        <TableCaption>A list of your recent invoices.</TableCaption>
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
            <TableRow key={animal.type}>
              <TableCell className="font-medium">{animal.type}</TableCell>
              <TableCell>{animal.class}</TableCell>
              <TableCell>{animal.nationwide}</TableCell>
              <TableCell>{animal.hesse}</TableCell>
              <TableCell>{animal.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )
      <section className="wide-container mt-12">
        <LatestArticles />
      </section>
    </div>
  );
}
