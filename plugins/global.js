import Vue from "vue";
import { ResponsiveImageWrapper as ImageElement } from "vue-responsive-img";
// import SectionContainer from '~/components/Section';
import SectionContainer from 'vue-content-wrapper';

Vue.component("image-element", ImageElement);
Vue.component("section-container", SectionContainer);
