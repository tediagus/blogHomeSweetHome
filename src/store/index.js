import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import eventStore from './modules/event.store';

const debug = process.env.NODE_ENV !== 'production';
let initialized = false;

function importStoreModules(...modules) {
  const res = {};
  let module;

  // eslint-disable-next-line no-plusplus
  for (let i = 0, nbModules = modules.length; i < nbModules; i++) {
    module = modules[i];
    if (!module.name) {
      throw new Error('Le module doit avoir une propriete "name"');
    }
    res[modules[i].name] = module;
  }
  return res;
}

export default function () {
  if (initialized) return;

  initialized = true;

  Vue.use(Vuex);

  const store = new Vuex.Store({
    modules: importStoreModules(eventStore),
    strict: debug,
    plugins: debug ? [createLogger()] : [],
  });

  Vue.mixin({
    store,
  });

  // eslint-disable-next-line consistent-return
  return store;
}
