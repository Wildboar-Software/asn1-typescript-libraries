import { ipv4ToNSAP } from "./ipv4.mjs";
import { uriToNSAP } from "./uri.mjs";
import { naddrToURI } from "./naddrToURI.mjs";

describe("naddrToURI (M20)", () => {
    const address = new Uint8Array([192, 0, 2, 1]);

    it.each([
        { service: "LDAP", type: 0x11, port: 389, expected: "ldap://192.0.2.1:389" },
        { service: "LDAP with a non-default port", type: 0x11, port: 1389, expected: "ldap://192.0.2.1:1389" },
        { service: "LDAP with an omitted port", type: 0x11, port: undefined, expected: "ldap://192.0.2.1:389" },
        { service: "IDM", type: 0x10, port: 4632, expected: "idm://192.0.2.1:4632" },
        { service: "IDM without a required port", type: 0x10, port: undefined, expected: undefined },
        { service: "ITOT", type: 0x03, port: 1102, expected: "itot://192.0.2.1:1102" },
        { service: "ITOT with an omitted port", type: 0x03, port: undefined, expected: "itot://192.0.2.1:102" },
        { service: "an unsupported service", type: 0x12, port: 389, expected: undefined },
    ])("formats $service as a dotted-decimal URI", ({ type, port, expected }) => {
        expect(naddrToURI(ipv4ToNSAP(type, address, port))).toBe(expected);
    });

    it.each([
        { address: new Uint8Array([0, 0, 0, 0]), expected: "ldap://0.0.0.0:389" },
        { address: new Uint8Array([255, 255, 255, 255]), expected: "ldap://255.255.255.255:389" },
    ])("formats every IPv4 octet as a decimal number ($expected)", ({ address, expected }) => {
        expect(naddrToURI(ipv4ToNSAP(0x11, address, 389))).toBe(expected);
    });

    it.each([false, true])("preserves URI-form NSAPs, itot = %s", (itot) => {
        const uri = "ldap://User:Secret@directory.example:1389";
        expect(naddrToURI(uriToNSAP(uri, itot))).toBe(uri);
    });

    it("still rejects an unknown address format", () => {
        expect(naddrToURI(new Uint8Array([0x01, 0x02, 0x03]))).toBeUndefined();
    });
});
