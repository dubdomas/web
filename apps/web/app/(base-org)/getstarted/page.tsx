import AnalyticsProvider from '../../../contexts/Analytics';
import Hero from '../../../src/components/GetStarted/Hero';
import BuildersMostWanted from '../../../src/components/GetStarted/BuildersMostWanted';
import Funding from '../../../src/components/GetStarted/Funding';
import GetNoticed from '../../../src/components/GetStarted/GetNoticed';
import StartBuilding from '../../../src/components/GetStarted/StartBuilding';
import BuildWithUsFooter from '../../../src/components/GetStarted/BuildWithUsFooter';

export default async function GoToCommunity() {
  return (
    <AnalyticsProvider context="builder_resource_kit">
      <Hero />
      <main className="flex w-full flex-col items-center bg-black font-display text-gray-5">
        <BuildersMostWanted />
        <Funding />
        <GetNoticed />
        <StartBuilding />
        <BuildWithUsFooter />
      </main>
    </AnalyticsProvider>
  );
}