import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'TIClass en el 🫰',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        🚀 En 2015, desarrollé desde cero la primera versión de TIClass, gracias al bootcamp FullStack en Desafío Latam (Generación 0). En nuestro primer año, logramos recaudar 13.000 USD con Socialab 🎉, y al siguiente, 63.000 USD con Corfo e ImagineLab. Iniciamos el cierre de la empresa el 2025.
      </>
    ),
  },
  {
    title: 'Pionero en Educación en Streaming',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      🚀 En 2012, cuando el streaming aún era un desafío, creé el primer proyecto de clases gratuitas para la PSU vía streaming. 📚 Siempre comprometido con democratizar la educación y abrir oportunidades para todos.
      </>
    ),
  },
  {
    title: 'Creador del primer Libro PSU Gratuito',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        El 2008 publicamos el Manual de Preparación PSU para Ciencias Física. Se imprimió en tapa dura para los estudiantes del Preuniversitario Popular Victor Jara y también está disponible gratis en formato PDF. Se ha descargado más de 250.000 a la fecha.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
