import BaseInput from '../../js/components/Inputs/BaseInput.vue';
import BaseDropdown from '../../js/components/BaseDropdown.vue';
import Card from '../../js/components/Cards/Card.vue';
import Modal from '../../js/components/Modal.vue';
import StatsCard from '../../js/components/Cards/StatsCard.vue';
import BaseButton from '../../js/components/BaseButton.vue';
import Badge from '../../js/components/Badge.vue';
import BaseCheckbox from '../../js/components/Inputs/BaseCheckbox.vue';
import BaseRadio from "../../js/components/Inputs/BaseRadio";
import BaseProgress from "../../js/components/BaseProgress";
import BasePagination from "../../js/components/BasePagination";
import BaseAlert from "../../js/components/BaseAlert";
import BaseNav from "../../js/components/Navbar/BaseNav";
import BaseHeader from '../../js/components/BaseHeader';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { Input, Tooltip, Popover } from 'element-ui';

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('side-bar', require('../../js/components/SideBarPlugin/Sidebar').default);
    Vue.component('side-baritem', require('../../js/components/SideBarPlugin/SidebarItem').default);
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(Card.name, Card);
    Vue.component(Modal.name, Modal);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Input.name, Input);
    Vue.component('validation-provider', ValidationProvider)
    Vue.component('validation-observer', ValidationObserver)
    Vue.use(Tooltip);
    Vue.use(Popover);
  }
};

export default GlobalComponents;
