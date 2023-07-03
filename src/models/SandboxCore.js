import { Metaform3 } from "@maxqwars/metaform/metaform3";

export class SandboxCore {
  constructor() {
    this._meta3 = new Metaform3();
    this._apiMethods = {};
    this._apiMethodsKeys = [];
    this._init();
  }

  get apiMethods() {
    return this._apiMethods;
  }

  get apiMethodsKeys() {
    return this._apiMethodsKeys;
  }

  _init() {
    this._apiMethods = {
      "<host>/title": {
        func: this._meta3.getTitle.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          id: 9130,
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/list": {
        func: this._meta3.getTitleList.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/updates": {
        func: this._meta3.getTitleUpdates.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/changes": {
        func: this._meta3.getTitleChanges.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/schedule": {
        func: this._meta3.getTitleSchedule.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/random": {
        func: this._meta3.getTitleRandom.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/title/search": {
        func: this._meta3.getTitleSearch.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          search: "monogatari",
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
      "<host>/youtube": {
        func: this._meta3.getYoutube.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {},
        description: "",
        link: "",
      },
      "<host>/years": {
        func: this._meta3.getYears.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {},
        description: "",
        link: "",
      },
      "<host>/genres": {
        func: this._meta3.getGenres.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {},
        description: "",
        link: "",
      },
      "<host>/team": {
        func: this._meta3.getTeam.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {},
        description: "",
        link: "",
      },
      "<host>/torrent/seed_stats": {
        func: this._meta3.getTorrentSeedStats.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {},
        description: "",
        link: "",
      },
      "<host>/feed": {
        func: this._meta3.getFeed.bind(this._meta3),
        http_method: "GET",
        have_required_params: true,
        pre_defined_params: {
          filter: ["names", "id", "code", "description"],
        },
        description: "",
        link: "",
      },
    };

    for (let key in this._apiMethods) {
      this._apiMethodsKeys.push(key);
    }

    console.log("Init complete");
    console.log(this._apiMethodsKey);
  }

  get(key) {
    const api = this._apiMethods[key];
    return api;
  }
}
