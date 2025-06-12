import { ipv4FromNSAP, ipv4ToNSAP } from "../../src/lib/distributed/ipv4";
import { uriFromNSAP, uriToNSAP } from "../../src/lib/distributed/uri";

describe("ipv4FromNSAP()", () => {
    it("decodes an IPv4 address with a TCP port", () => {
        const nsap = new Uint8Array([
            0x54, // The AFI
            0x00, 0x72, 0x87, 0x22, // The IDI
            0x11, // DSP type
            0x12, 0x31, 0x29, 0x25, 0x50, 0x01, // IPv4 address: 123.129.255.1
            0x05, 0x43, 0x2F, // TCP port 5432
        ]);
        const [ type_, ip, port ] = ipv4FromNSAP(nsap);
        expect(type_).toBe(0x11);
        expect(ip).toHaveLength(4);
        expect(ip[0]).toBe(123);
        expect(ip[1]).toBe(129);
        expect(ip[2]).toBe(255);
        expect(ip[3]).toBe(1);
        expect(port).toBe(5432);
    });

    it("decodes an IPv4 address without a TCP port", () => {
        const nsap = new Uint8Array([
            0x54, // The AFI
            0x00, 0x72, 0x87, 0x22, // The IDI
            0x11, // DSP type
            0x00, 0x01, 0x29, 0x25, 0x50, 0x01, // IPv4 address: 0.129.255.1
        ]);
        const [ type_, ip, port ] = ipv4FromNSAP(nsap);
        expect(type_).toBe(0x11);
        expect(ip).toHaveLength(4);
        expect(ip[0]).toBe(0);
        expect(ip[1]).toBe(129);
        expect(ip[2]).toBe(255);
        expect(ip[3]).toBe(1);
        expect(port).toBeUndefined();
    });
});

describe("ipv4ToNSAP()", () => {
    it("encodes an IPv4 address with a TCP port", () => {
        const encoded = ipv4ToNSAP(0x11, new Uint8Array([ 8, 0, 255, 128 ]), 5432);
        expect(encoded).toHaveLength(15);
        expect(Buffer.from(encoded).toString("hex")).toBe("54007287221100800025512805432f");
    });

    it("encodes an IPv4 address without a TCP port", () => {
        const encoded = ipv4ToNSAP(0x11, new Uint8Array([ 8, 0, 255, 128 ]), undefined);
        expect(encoded).toHaveLength(12);
        expect(Buffer.from(encoded).toString("hex")).toBe("540072872211008000255128");
    });
});

describe("uriFromNSAP()", () => {
    it("decodes a URI", () => {
        const url = "https://www.wildboarsoftware.com/";
        const nsap = new Uint8Array([
            0xFF,
            0x00, 0x01,
            ...Array.from(url).map((char) => char.charCodeAt(0)),
        ]);
        const [ type_, uri ] = uriFromNSAP(nsap);
        expect(type_).toBe(1);
        expect(uri).toBe(url);
    });
});

describe("uriToNSAP()", () => {
    it("encodes a URI", () => {
        const url = "https://www.wildboarsoftware.com/";
        const encoded = uriToNSAP(url, false);
        expect(encoded.toString()).toBe("255,0,1,104,116,116,112,115,58,47,47,119,119,119,46,119,105,108,100,98,111,97,114,115,111,102,116,119,97,114,101,46,99,111,109,47");
    });
});
