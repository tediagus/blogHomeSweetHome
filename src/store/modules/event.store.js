import EventService from '../../services/event.service';

export default {
  namespaced: true,
  name: 'eventStore',
  state: {
    events: [],
    loading: true,
  },
  getters: {},
  actions: {
    async getAllEvents({ commit }) {
      await EventService.findAll().then(({ data }) => {
        commit('setEvents', data);
        commit('setLoading', false);
      });
    },
    // eslint-disable-next-line no-empty-pattern
    create({ }, data) {
      EventService.create(data);
    },
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
};
