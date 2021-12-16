// ==UserScript==
// @name         Google Voice Number Copier
// @namespace    https://braiden.net/
// @version      1.0
// @description  Copies current phone number from Google Voice
// @author       BRAIDEN S. PSIUK
// @match        https://voice.google.com/u/0/messages?itemId=t.%2B14849474425
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Disable "Your browser might prevent calls from ringing" warning
    document.getElementById("gvAppBannerContainer").style.display = "none";



    // Poll and record currently selected phone number so it can be copied later
    const POLL_INTERVAL = 200;

    let currentNumber = null;
    const fetchCurrentNumber = ()=>{
        const currentQueryParams = new URLSearchParams(window.location.search);
        const newNumberAvailable = currentQueryParams.has("itemId");
        currentNumber = (newNumberAvailable) ? currentQueryParams.get("itemId").substr(4,currentQueryParams.get("itemId").length) : null;
        return currentNumber;
    }; currentNumber = fetchCurrentNumber();

    setInterval(fetchCurrentNumber, POLL_INTERVAL);



    // Create and add COPY button to UI
    const attemptToCopyCurrentNumber = ()=>{
        if (currentNumber === null) {
            alert("Unable to copy phone number, please select a person first.");
        } else {
            // Good to go!
            alert(`Number: ${currentNumber}`);
        }
    };

    const leftNavBar = document.evaluate(`//*[@id="gvPageRoot"]/div[2]/div[2]/gv-side-nav/div/div/gmat-nav-list`, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE	, null).singleNodeValue;
    const elmToInsertBefore = document.evaluate(`//*[@id="gvPageRoot"]/div[2]/div[2]/gv-side-nav/div/div/gmat-nav-list/a[2]`, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE	, null).singleNodeValue;

    // leftNavBar.insertBefore(document.createElement("p"), elmToInsertBefore);

    //    //*[@id="gvPageRoot"]/div[2]/div[2]/gv-side-nav/div/div/gmat-nav-list  .insertBefore(newNode,
          //*[@id="gvPageRoot"]/div[2]/div[2]/gv-side-nav/div/div/gmat-nav-list/a[2]



    // COPY
    // M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z
    //*[@id="messaging-view"]/div/md-content/gv-thread-details/div/div[1]/gv-message-list-header/div/div[1]/p
    // <a _ngcontent-rnt-c171="" gmat-static-nav-list-item="" role="tab" tabindex="0" class="mat-list-item gmat-nav-list-item mat-focus-indicator mat-tooltip-trigger navListItem gmat-list-item-active ng-star-inserted" aria-label="Messages" aria-selected="true" gv-test-id="sidenav-messages"><div class="mat-list-item-content"><div class="gmat-list-item-projected-content"><div class="mat-list-text"></div><mat-icon _ngcontent-rnt-c171="" role="img" class="mat-icon notranslate navItemIcon mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="message"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"></path><path d="M6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path></svg></mat-icon><span _ngcontent-rnt-c171="" class="navItemLabel"> Messages </span><!----></div></div></a>
})();