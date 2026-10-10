/**
 * Benchmark the index scan in `stringMatch` against the same rules written
 * with `toLowerCase` and `slice`, and `compareGeneralName` against key
 * equality.
 *
 * Run from the repo root:
 *   npx vite-node --config packages/gn/vitest.config.mts packages/gn/bench/compareGeneralName.mjs
 *
 * The built files import `@wildboar/dn` and `@wildboar/or-address`, whose
 * package entries are TypeScript source, so plain `node` cannot load `dist`.
 * vite-node resolves those the same way the tests do.
 */
import Benchmark from "benchmark";
import { ObjectIdentifier } from "@wildboar/asn1";
import { compareGeneralName } from "../src/lib/compareGeneralName.mjs";
import { generalNameToKey } from "../src/lib/generalNameToKey.mjs";
import {
    dnsEqual,
    rfc822Equal,
    uriEqual,
} from "../src/lib/stringMatch.mjs";

function rfc822Lower(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    const at = a.lastIndexOf("@");
    if (b.lastIndexOf("@") !== at) {
        return false;
    }
    if (at < 0) {
        return a === b;
    }
    return a.slice(0, at) === b.slice(0, at)
        && a.slice(at + 1).toLowerCase() === b.slice(at + 1).toLowerCase();
}

function dnsLower(a, b) {
    return a.length === b.length && a.toLowerCase() === b.toLowerCase();
}

function uriLower(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    const schemeEnd = a.indexOf(":");
    if (schemeEnd < 0 || b.indexOf(":") !== schemeEnd) {
        return a === b;
    }
    if (a.slice(0, schemeEnd).toLowerCase() !== b.slice(0, schemeEnd).toLowerCase()) {
        return false;
    }
    const hostOf = (s) => {
        if (s.charCodeAt(schemeEnd + 1) !== 0x2F || s.charCodeAt(schemeEnd + 2) !== 0x2F) {
            return null;
        }
        const authStart = schemeEnd + 3;
        let authEnd = authStart;
        while (authEnd < s.length) {
            const c = s.charCodeAt(authEnd);
            if (c === 0x2F || c === 0x3F || c === 0x23) {
                break;
            }
            authEnd += 1;
        }
        let hostStart = authStart;
        const at = s.lastIndexOf("@", authEnd - 1);
        if (at >= authStart) {
            hostStart = at + 1;
        }
        let hostEnd = authEnd;
        if (s.charCodeAt(hostStart) === 0x5B) {
            const close = s.indexOf("]", hostStart + 1);
            hostEnd = close + 1;
        } else {
            const colon = s.indexOf(":", hostStart);
            if (colon >= hostStart && colon < authEnd) {
                hostEnd = colon;
            }
        }
        return [hostStart, hostEnd];
    };
    const hostA = hostOf(a);
    const hostB = hostOf(b);
    if (!hostA && !hostB) {
        return a.slice(schemeEnd) === b.slice(schemeEnd);
    }
    if (!hostA || !hostB || hostA[0] !== hostB[0] || hostA[1] !== hostB[1]) {
        return false;
    }
    return a.slice(schemeEnd, hostA[0]) === b.slice(schemeEnd, hostA[0])
        && a.slice(hostA[0], hostA[1]).toLowerCase() === b.slice(hostB[0], hostB[1]).toLowerCase()
        && a.slice(hostA[1]) === b.slice(hostB[1]);
}

const emails = ["User@Example.COM", "User@example.com", "someone.else@example.com"];
const dns = ["www.Example.COM", "www.example.com", "www.example.org"];
const uris = [
    "HTTPS://User@Example.com:443/Path",
    "https://User@example.com:443/Path",
    "https://User@example.com:443/Other",
];

const emailA = { rfc822Name: emails[0] };
const emailB = { rfc822Name: emails[1] };
const dnsA = { dNSName: dns[0] };
const dnsB = { dNSName: dns[1] };
const uriA = { uniformResourceIdentifier: uris[0] };
const uriB = { uniformResourceIdentifier: uris[1] };
const ipA = { iPAddress: new Uint8Array([192, 0, 2, 1]) };
const ipB = { iPAddress: new Uint8Array([192, 0, 2, 1]) };
const oidA = { registeredID: ObjectIdentifier.fromString("1.2.3.4") };
const oidB = { registeredID: ObjectIdentifier.fromString("1.2.3.4") };

function addPair(suite, name, compare, left, right) {
    const keyL = generalNameToKey(left);
    const keyR = generalNameToKey(right);
    suite.add(`${name} compare`, () => {
        compareGeneralName(left, right);
    });
    suite.add(`${name} key`, () => {
        generalNameToKey(left) === generalNameToKey(right);
    });
    suite.add(`${name} key cached`, () => {
        keyL === keyR;
    });
    if (compare) {
        suite.add(`${name} scan`, () => {
            compare(emails[0], emails[1]);
        });
    }
}

const suite = new Benchmark.Suite();
suite
    .add("rfc822 scan equal", () => { rfc822Equal(emails[0], emails[1]); })
    .add("rfc822 lower equal", () => { rfc822Lower(emails[0], emails[1]); })
    .add("rfc822 scan mismatch", () => { rfc822Equal(emails[0], emails[2]); })
    .add("rfc822 lower mismatch", () => { rfc822Lower(emails[0], emails[2]); })
    .add("dns scan equal", () => { dnsEqual(dns[0], dns[1]); })
    .add("dns lower equal", () => { dnsLower(dns[0], dns[1]); })
    .add("dns scan mismatch", () => { dnsEqual(dns[0], dns[2]); })
    .add("dns lower mismatch", () => { dnsLower(dns[0], dns[2]); })
    .add("uri scan equal", () => { uriEqual(uris[0], uris[1]); })
    .add("uri lower equal", () => { uriLower(uris[0], uris[1]); })
    .add("uri scan mismatch", () => { uriEqual(uris[0], uris[2]); })
    .add("uri lower mismatch", () => { uriLower(uris[0], uris[2]); });

addPair(suite, "email", null, emailA, emailB);
addPair(suite, "dns name", null, dnsA, dnsB);
addPair(suite, "uri", null, uriA, uriB);
addPair(suite, "ip", null, ipA, ipB);
addPair(suite, "oid", null, oidA, oidB);

suite
    .on("cycle", (event) => {
        console.log(String(event.target));
    })
    .on("complete", function () {
        console.log("done");
    })
    .run({ async: false });
