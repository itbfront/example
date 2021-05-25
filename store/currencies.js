const getDefaultState = () => ({
  list: {
    data: [],
  },
  model: {
    code: null,
    slug: null,
  },
  selected: 'EUR',
});

export const state = () => (getDefaultState());

export const getters = {
  currencies(state) {
    return state.list.data;
  },
  selected:(state) => {
    return state.selected;
  },
  symbolForCart(state){
    return state.list.data.find(el => el.code === state.selected)
  }
};

export const actions = {
  async fetchAll({commit}) {
    const response = await this.$axios.$get('api/currencies');

    await commit('SET_LIST', response);
  },

  async fetch({commit}, code) {
    const {data} = await this.$axios.$get(`api/currencies/${code}`);
    commit('SET_MODEL', data);
  },

  async setCurrency({commit, dispatch}, currency) {
    currency = currency ? currency : 'EUR'
    dispatch('fetch', currency)
    this.$auth.$storage.setUniversal('currency', currency);

    await commit('SET_CURRENCY', currency);
  },
};

export const mutations = {
  SET_LIST: (state, payload) => {
    state.list = payload;
  },

  SET_MODEL: (state, payload) => {
    state.model = payload;
  },

  SET_CURRENCY: (state, payload) => {
    state.selected = payload;
  },
};
