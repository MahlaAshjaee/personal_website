<template>
  <div>
    <Headerr />
    <HeroSection id="home" />
    <ServicesSection id="services" />
    <WorkExperience id="work-experience" />
    <WhyHireMe id="why-hire-me" />
    <ProjectSection id="projects" />
    <PortfolioSection id="portfolio" />
    <FooterSection id="footer" />
  </div>
</template>

<script setup>
import Headerr from "./components/Headerr.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import WorkExperience from "./components/WorkExperience.vue";
import WhyHireMe from "./components/WhyHireMe.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>
