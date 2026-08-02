const RULES = {
    selectors: [
        {id: "ig-reels", selector: 'a[href="/reels/"]'}      // remove link to Reels
    ],
    redirects: [
        {
            id: "ig-homepage-to-following",
            fromPath: "/",                  // path the rule applies to
            toUrl: "/?variant=following",   // target URL (relative)
            exactMatch: true                // match only "/" exactly, ignore query parameters
        },
        {
            id: "ig-reels-to-following",
            fromPath: "/reels/",
            toUrl: "/?variant=following",
            exactMatch: false
        }
    ]
};
