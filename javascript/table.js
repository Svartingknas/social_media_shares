"use strict";

function createTable (data) {
    const msg = "<tr><td>" + data.total
                     + "</td><td>" + data.url
                     + "</td><td>" + data.shares.facebook
                     + "</td><td>" + data.shares.google
                     + "</td><td>" + data.shares.pinterest
                     + "</td><td>" + data.shares.linkedin
                     + "</td></tr>\n"
    document.querySelector("#table").innerHTML += msg;
}
