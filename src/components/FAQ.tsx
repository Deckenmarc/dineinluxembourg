"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the FAQ data
const faqData = [
  {
    question: "What is famous to eat in Luxembourg?",
    answer: (
      <>
        <p className="mb-2"><strong>Judd mat Gaardebounen:</strong> Smoked pork collar with broad beans, a traditional Luxembourgish dish.</p>
        <p className="mb-2"><strong>Bouneschlupp:</strong> A traditional green bean soup with potatoes, bacon, and onions.</p>
        <p className="mb-2"><strong>Quetschentaart:</strong> A plum tart that's especially popular during autumn.</p>
        <p className="mb-2"><strong>Gromperekichelcher:</strong> Potato pancakes seasoned with parsley, onions, and garlic.</p>
        <p><strong>Rieslingspaschtéit:</strong> A meat pie made with Riesling wine, a specialty of Luxembourg.</p>
      </>
    ),
  },
  {
    question: "Which famous dish was invented in Luxembourg?",
    answer: (
      <>
        <p className="mb-2">The <strong>Kachkéis</strong> (or Cancoillotte) is a soft, spreadable cheese that's a traditional Luxembourgish specialty. It's often served melted on toast or as a dip.</p>
        <p><em>Luxembourg's cuisine is heavily influenced by French, German, and Belgian traditions, creating a unique blend of culinary styles.</em></p>
      </>
    ),
  },
  {
    question: "What is the national dish of Luxembourg?",
    answer: (
      <p><strong>Judd mat Gaardebounen</strong> (smoked collar of pork with broad beans) is widely considered the national dish of Luxembourg. It represents the country's culinary traditions and is served at many traditional restaurants throughout the country.</p>
    ),
  },
  {
    question: "What is Luxembourg's most famous meal?",
    answer: (
      <>
        <p className="mb-2"><strong>Judd mat Gaardebounen</strong> (smoked pork with broad beans) is considered the most iconic Luxembourgish dish.</p>
        <p>Other traditional favorites include <strong>Traipen</strong> (blood sausage), <strong>Kniddelen</strong> (flour dumplings served with bacon or cream sauce), <strong>F'rell am Rèisleck</strong> (trout cooked in Riesling wine), and <strong>Bouchée à la Reine</strong> (puff pastry filled with a creamy chicken, mushroom, and veal stew).</p>
      </>
    ),
  },
  {
    question: "Why is Luxembourg so famous?",
    answer: (
      <>
        <p className="mb-2"><strong>Financial Center:</strong> Luxembourg is one of the world's leading financial centers and a major banking hub in Europe.</p>
        <p className="mb-2"><strong>European Institutions:</strong> It hosts several important European Union institutions, including the European Court of Justice.</p>
        <p className="mb-2"><strong>Cultural Heritage:</strong> The city of Luxembourg is a UNESCO World Heritage site, known for its historic fortifications and old quarters.</p>
        <p className="mb-2"><strong>High Standard of Living:</strong> Luxembourg consistently ranks among the countries with the highest GDP per capita in the world.</p>
        <p><strong>Multilingualism:</strong> The country has three official languages (Luxembourgish, French, and German), reflecting its position at the crossroads of European cultures.</p>
      </>
    ),
  },
  {
    question: "Are there any Michelin-starred restaurants in Luxembourg?",
    answer: (
      <>
        <p className="mb-2">Yes, Luxembourg has several Michelin-starred restaurants, showcasing the country's high-quality culinary scene:</p>
        <ul className="list-disc pl-5 mb-2">
          <li><strong>Ma Langue Sourit</strong> - Chef Cyril Molard (2 Stars)</li>
          <li><strong>Mosconi</strong> - Chef Ilario Mosconi (1 Star)</li>
          <li><strong>La Distillerie</strong> - Chef René Mathieu (1 Star)</li>
          <li><strong>Les Jardins d'Anaïs</strong> - Chef Christophe Quentin (1 Star)</li>
          <li><strong>La Cristallerie</strong> - Chef Fabrice Salvador (1 Star)</li>
          <li><strong>Fani</strong> - Chef Fani Xhakoni (1 Star)</li>
          <li><strong>Ryôdô</strong> - Chef Ryôdô Kajiwara (1 Star)</li>
        </ul>
        <p>Additionally, many restaurants have received the Bib Gourmand distinction, which recognizes excellent food at moderate prices.</p>
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-medium mb-8">Frequently Asked Questions About Luxembourg Food</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
