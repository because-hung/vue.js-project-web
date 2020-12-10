Vue.component("weather-compo", {
  template: "#aqi",
  props: ["info"],
  methods: {
    storeEmit: function(site) {
      this.$emit("store-site", site);
    }
  },
  computed: {
    bgcolor: function() {
      switch (this.info.Status) {
        case "普通":
          return "status-aqi2";
        case "對敏感族群不健康":
          return "status-aqi3";
        case "對所有族群不健康":
          return "status-aqi4";
        case "非常不健康":
          return "status-aqi5";
        case "危害":
          return "status-aqi6";
      }
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    data: [],
    location: [],
    stored: JSON.parse(localStorage.getItem("stored-site")) || [],
    filtered: "--- 請選擇城市 ---"
  },
  // 請在此撰寫 JavaScript
  methods: {
    store: function(site) {
      let list = this.stored;
      let listIndex = this.stored.indexOf(site);
      if (listIndex === -1) {
        list.push(site);
      } else {
        list.splice(listIndex, 1);
      }
      localStorage.setItem("stored-site", JSON.stringify(list));
    }
  },
  computed: {
    allCounty: function() {
      let list = this.data.map(function(item) {
        return item.County;
      });
      return [...new Set(list)];
    },
    filteredWeather: function() {
      let vm = this;
      switch (vm.filtered) {
        case "--- 請選擇城市 ---":
          return vm.data.filter(function(item) {
            return vm.stored.indexOf(item.SiteName) === -1;
          });
        default:
          return vm.data.filter(function(item) {
            if (item.County === vm.filtered) {
              return vm.stored.indexOf(item.SiteName) === -1;
            }
          });
      }
    },
    storedWeather: function() {
      let vm = this;
      return vm.data.filter(function(item) {
        return vm.stored.indexOf(item.SiteName) !== -1;
      });
    }
  },
  created: function() {
    const vm = this;
    const api =
      "https://cors-anywhere.herokuapp.com/http://opendata2.epa.gov.tw/AQI.json";
    $.get(api).then(function(response) {
      vm.data = response;
    });
  }
});
