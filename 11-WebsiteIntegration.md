# Website Integration

Javascript as language is powerful but it's integration with web where it shines the most.

## Web APIs

In browser there is way more then just Javascript Engine. Whole range of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) can be used.

Some of them can be used only in secured context **HTTPS**.

### Picture-in-Picture

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)

Can be used for example on youtube videos.

### WebGL

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

Rendering 2D and 3D objects in browser.

### Web Speech

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

Using voice synthesizer to read parts of website.

### Web Storage

Browsers are offering 3 ways how to store data in browser it is `localStorage`, `sessionStorage` and `indexedDB`.

School: **IndexDB** requires knowledge of **databases** which is going to be taught in 4th year. For that reason it will be skipped in this lecture.

`localStorage` and `sessionStorage` works similarly only difference is when data inside gets automatically removed for `sessionStorage` it is when browser is closed for `localStorage` it is never.

Note: User can remove these data by himself.

These storages store **key-value pairs** of data and can be used to store user preferences, temporary data, session information. Or they can be used for between tab synchronization.

Data are stored per website origin. For example `https://github.com/` which means that same site accessed through HTTP a HTTPS will have different storages.

Note: Storages may not be available on incognito tabs or automatic removal of data may behave differently.

Example in 11_WebsiteIntegration_Storage folder.

## Window

Window is global object for web. Window contains **document** for current website (more in 12-DOM.md) and many useful functions for manipulating website and browser itself.

Windows is specific for current open tab - it is not possible from one to manipulate other, but there are options how to share information from one to another and act upon it.

### location

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

Location is URL which user and website can manipulate. If URL is changed website may be reloaded.

It is compound of many parts which are used differently and can be manipulated separately.

School: No need to go to detail here, but use [interactive location anatomy](https://developer.mozilla.org/en-US/docs/Web/API/Location#location_anatomy) to check out how it looks.

### alert

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

Function `alert()` can be used to display popup with message to user which has to be dismissed before using website (browser tab).

Example:

    //script execution
    window.alert("Notice me senpai!");

Note: Alert can be called without providing it with message as param, but that does not make any sense.

From perspective of UX (user experience) it is wrong to use this alert for non critical problems as it takes control from user and forces them to acknowledge the alert with no way to se it again after closing.

### prompt

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

Function `prompt()` can be used to request input from user. It works similarly to `alert()` function and prevents interaction with website until popup is closed.

Example:

    //script execution
    window.prompt("Just tell me your name")

Note: Prompt can be called without providing it with message as param, but that does not make any sense as user would not know what input it is supposed to provide.

### fetch

[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)

TODO

### setInterval, setTimeout

Function `setInterval()` allows to run code periodically and function `setTimeout()` allows to run code after set time. This two functions operate quite similarly and are one of few ways how to run scripts (functions in them) independently.

Note: Execution context may be different then expected so `this` may return unexpected values.

Note: Timing on these functions is not exact.

Example in 11_WebsiteIntegration_RunningFunctions folder.
