import { HomeResponse } from "../src/types/api/home";

export const defaultHomeInfo: HomeResponse = {
  title: "",
  subtitle: "",
  banner: "",
  shortBlogDescription: {
    json: {
      data: {},
      content: [],
      nodeType: ""
    },
    links: {
      assets: {
        block: [],
        hyperlink: [] 
      }
    }
  },
  whoIAm: {
    json: {
      data: {},
      content: [],
      nodeType: ""
    },
    links: {
      assets: {
        block: [],
        hyperlink: []
      }
    }
  }
};
