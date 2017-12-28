let api = null;

const init =
  process.env.NODE_ENV === "development"
    ? callback => {
        const stubApi = {
          window: {
            startAutoResizer: () => {
              console.log("api:startAutoResizer");
            }
          },
          field: {
            getValue: () => {
              return {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: "59xw9VSthuugEI2AuWKSC2"
                }
              };
            },
            setValue: value => {
              console.log("api:setValue", value);
              return Promise.resolve();
            }
          },
          space: {
            getEntry: id => {
              return Promise.resolve(mockEntry);
            }
          }
        };
        api = stubApi;
        callback(stubApi);
      }
    : callback => {
        var cfExt = window.contentfulExtension || window.contentfulWidget;
        cfExt.init(function(_api) {
          api = _api;
          callback(_api);
        });
      };

export function initApi(callback) {
  init(callback);
}

const mockEntry = {
  sys: {
    space: {
      sys: {
        type: "Link",
        linkType: "Space",
        id: "25gz1h4mryea"
      }
    },
    id: "59xw9VSthuugEI2AuWKSC2",
    type: "Entry",
    createdAt: "2017-11-27T14:35:11.213Z",
    updatedAt: "2017-12-28T17:09:34.106Z",
    createdBy: {
      sys: {
        type: "Link",
        linkType: "User",
        id: "0DXrYxNlpfctib05oANKAh"
      }
    },
    updatedBy: {
      sys: {
        type: "Link",
        linkType: "User",
        id: "0DXrYxNlpfctib05oANKAh"
      }
    },
    publishedCounter: 18,
    version: 68,
    publishedBy: {
      sys: {
        type: "Link",
        linkType: "User",
        id: "0DXrYxNlpfctib05oANKAh"
      }
    },
    publishedVersion: 67,
    firstPublishedAt: "2017-11-28T19:13:08.940Z",
    publishedAt: "2017-12-28T17:09:34.106Z",
    contentType: {
      sys: {
        type: "Link",
        linkType: "ContentType",
        id: "category"
      }
    }
  },
  fields: {
    title: {
      "en-US": "Day-to-Day Matters"
    },
    slug: {
      "en-US": "tips-2"
    },
    path: {
      "en-US": "tips"
    },
    pathAttributes: {
      "en-US": {
        sys: {
          type: "Link",
          linkType: "Entry",
          id: "4W3HPioGxauQAaaA42yCKg"
        }
      }
    },
    articleContent: {
      "en-US": {
        sys: {
          type: "Link",
          linkType: "Entry",
          id: "5I258zOoWk6AoEIm6OcKK"
        }
      }
    },
    children: {
      "en-US": [
        {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "7dQHp4nJIWSG60aMYcUAmo"
          }
        }
      ]
    }
  }
};
