import { compareNSAP } from "./compareNSAPs.mjs";
import { ipv4ToNSAP } from "../distributed/ipv4.mjs";
import { uriToNSAP } from "../distributed/uri.mjs";

const HOST = new Uint8Array([192, 0, 2, 1]);

function expectBothModes (a: Uint8Array, b: Uint8Array, equal: boolean): void {
    expect(compareNSAP(a, b)).toBe(equal);
    expect(compareNSAP(b, a)).toBe(equal);
    expect(compareNSAP(a, b, 1)).toBe(equal);
    expect(compareNSAP(b, a, 1)).toBe(equal);
}

describe("compareNSAP()", () => {
    it("compares unrecognized NSAPs byte for byte", () => {
        const a = new Uint8Array([0x01, 0x02, 0x03]);
        const b = new Uint8Array([0x01, 0x02, 0x04]);
        expectBothModes(a, a, true);
        expectBothModes(a, b, false);
        expectBothModes(a, new Uint8Array([0x01, 0x02]), false);
    });

    it("does not treat a broken IPv4 prefix as the same address", () => {
        const a = ipv4ToNSAP(0x11, HOST, 389);
        const b = Uint8Array.from(a);
        b[1] = 0x01;
        expectBothModes(a, b, false);
    });

    it("rejects a different IPv4 service type or address before the port matters", () => {
        const ldap = ipv4ToNSAP(0x11, HOST, 389);
        const idm = ipv4ToNSAP(0x10, HOST, 389);
        const otherHost = ipv4ToNSAP(0x11, new Uint8Array([192, 0, 2, 2]), 389);
        expectBothModes(ldap, idm, false);
        expectBothModes(ldap, otherHost, false);
        expectBothModes(ldap, ldap, true);
    });

    it("defaults only an omitted ITOT port to 102", () => {
        const omitted = ipv4ToNSAP(0x03, HOST);
        const port102 = ipv4ToNSAP(0x03, HOST, 102);
        const port103 = ipv4ToNSAP(0x03, HOST, 103);
        const ldapOmitted = ipv4ToNSAP(0x11, HOST);
        const ldap389 = ipv4ToNSAP(0x11, HOST, 389);
        expectBothModes(omitted, port102, true);
        expectBothModes(omitted, port103, false);
        expectBothModes(ldapOmitted, ldap389, false);
    });

    it("rejects different URL schemes without treating them as the same transport", () => {
        const ldap = uriToNSAP("ldap://dir.example", false);
        const idm = uriToNSAP("idm://dir.example", false);
        expectBothModes(ldap, idm, false);
    });

    it("normalizes URL host case, IDNA, and default ports", () => {
        const plain = uriToNSAP("ldap://dir.example", false);
        const cased = uriToNSAP("LDAP://DIR.EXAMPLE", false);
        const port = uriToNSAP("ldap://dir.example:389", false);
        const otherPort = uriToNSAP("ldap://dir.example:390", false);
        const unicode = uriToNSAP("ldap://exämple.com", false);
        const punycode = uriToNSAP("ldap://xn--exmple-cua.com", false);
        const user = uriToNSAP("ldap://user:secret@dir.example", false);
        const otherUser = uriToNSAP("ldap://other:secret@dir.example", false);
        expectBothModes(plain, cased, true);
        expectBothModes(plain, port, true);
        expectBothModes(plain, otherPort, false);
        expectBothModes(unicode, punycode, true);
        expectBothModes(user, user, true);
        expectBothModes(user, otherUser, false);
    });

    it("returns false when a URL NSAP is not a URI", () => {
        const bad = uriToNSAP("not a uri", false);
        const ldap = uriToNSAP("ldap://dir.example", false);
        expectBothModes(bad, ldap, false);
        expectBothModes(bad, uriToNSAP("also not", false), false);
    });
});
