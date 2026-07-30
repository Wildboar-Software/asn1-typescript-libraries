import { describe, it, expect } from "vitest";
import { PresentationAddress } from "./presentation-address.mjs";
import { Buffer } from "node:buffer";
import { X213NetworkAddress } from "@wildboar/nsap-address";
import assert from "node:assert";

describe("PresentationAddress", () => {

    it("should be able to create a PresentationAddress", () => {
        const paddr = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        expect(paddr).toBeDefined();
        expect(paddr.pSelector).toEqual(new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.sSelector).toEqual(new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.tSelector).toEqual(new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.nAddresses).toHaveLength(1);
        expect(paddr.toRfc1278String()).toEqual('"1234"/"1234"/"1234"/URL+0001+https://example.com');
        expect(paddr.toASN1String()).toBe("{ pSelector '31323334'H, sSelector '31323334'H, tSelector '31323334'H, nAddresses { 'FF000168747470733A2F2F6578616D706C652E636F6D'H } }");
        expect(paddr.toString()).toEqual('"1234"/"1234"/"1234"/URL+0001+https://example.com');
        expect(paddr.toJSON()).toEqual({
            pSelector: '31323334',
            sSelector: '31323334',
            tSelector: '31323334',
            nAddresses: [ 'ff000168747470733a2f2f6578616d706c652e636f6d' ],
        });
        expect(paddr.toHexadecimalJER()).toEqual({
            pSelector: '31323334',
            sSelector: '31323334',
            tSelector: '31323334',
            nAddresses: [ 'ff000168747470733a2f2f6578616d706c652e636f6d' ],
        });
        expect(paddr.toBase64JER()).toEqual({
            pSelector: 'MTIzNA==',
            sSelector: 'MTIzNA==',
            tSelector: 'MTIzNA==',
            nAddresses: [ '/wABaHR0cHM6Ly9leGFtcGxlLmNvbQ==' ],
        });
    });

    it("should be able to serialize a PresentationAddress to an interoperable string", () => {
        const paddr = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const s = paddr.toMostInteroperableString();
        expect(s).toEqual("'31323334'H/'31323334'H/'31323334'H/NS+FF000168747470733A2F2F6578616D706C652E636F6D");
    });

    // This covers creation from hexadecimal JER.
    it("can be created from JSON", () => {
        const paddr = PresentationAddress.fromHexadecimalJER({
            pSelector: '31323334',
            sSelector: '31323334',
            tSelector: '31323334',
            nAddresses: [ 'ff000168747470733a2f2f6578616d706c652e636f6d' ],
        });
        expect(paddr).toBeDefined();
        expect(paddr.pSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.sSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.tSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.nAddresses).toHaveLength(1);
        expect(paddr.toRfc1278String()).toEqual('"1234"/"1234"/"1234"/URL+0001+https://example.com');
    });

    it("can be created from base64 JER", () => {
        const paddr = PresentationAddress.fromBase64JER({
            pSelector: 'MTIzNA==',
            sSelector: 'MTIzNA==',
            tSelector: 'MTIzNA==',
            nAddresses: [ '/wABaHR0cHM6Ly9leGFtcGxlLmNvbQ==' ],
        });
        expect(paddr).toBeDefined();
        expect(paddr.pSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.sSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.tSelector).toEqual(Buffer.from([ 0x31, 0x32, 0x33, 0x34 ]));
        expect(paddr.nAddresses).toHaveLength(1);
        expect(paddr.toRfc1278String()).toEqual('"1234"/"1234"/"1234"/URL+0001+https://example.com');
    });

    it("can be created from RFC 1278 string", () => {
        const input = "#65534/'030842'H/X121+234219200300+d123456_TELEX+00728722+RFC-1006+03+10.0.0.6+65535+65534";
        const paddr = PresentationAddress.fromString(input);
        expect(paddr).toBeDefined();
        assert.notEqual(typeof paddr, "string", `Error was ${paddr}`);
        assert.ok(typeof paddr === "object");
        expect(paddr.pSelector).toBeUndefined();
        expect(paddr.sSelector).toEqual(Buffer.from([ 0xFF, 0xFE ]));
        expect(paddr.tSelector).toEqual(Buffer.from([ 0x03, 0x08, 0x42 ]));
        expect(paddr.nAddresses).toHaveLength(2);
        const naddr1 = new X213NetworkAddress(paddr.nAddresses[0]);
        assert.deepEqual(naddr1.getOctets(), new Uint8Array([0x36, 0x00, 0x23, 0x42, 0x19, 0x20, 0x03, 0x00, 0x12, 0x34, 0x56]));
        const naddr2 = new X213NetworkAddress(paddr.nAddresses[1]);
        assert.deepEqual(naddr2.getOctets(), new Uint8Array([0x54, 0x00, 0x72, 0x87, 0x22, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x06, 0x65, 0x53, 0x56, 0x55, 0x34]));
    });

    it("can be created from RFC 1278 strings using ascii selectors", () => {
        const input = "\"zxcv\"/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        expect(paddr).toBeDefined();
        assert.notEqual(typeof paddr, "string", `Error was ${paddr}`);
        assert.ok(typeof paddr === "object");
        expect(paddr.pSelector).toBeUndefined();
        expect(paddr.sSelector).toBeUndefined();
        expect(paddr.tSelector).toEqual(Buffer.from("zxcv", "ascii"));
        expect(paddr.nAddresses).toHaveLength(1);
        const naddr1 = new X213NetworkAddress(paddr.nAddresses[0]);
        assert.deepEqual(naddr1.getOctets(), new Uint8Array([0x36, 0x00, 0x23, 0x42, 0x19, 0x20, 0x03, 0x00, 0x12, 0x34, 0x56]));
    });


    it("handles no selectors", () => {
        const input = "X121+234219200300+d123456_TELEX+00728722+RFC-1006+03+10.0.0.6+65535+65534";
        const paddr = PresentationAddress.fromRfc1278String(input);
        expect(paddr).toBeDefined();
        assert.notEqual(typeof paddr, "string", `Error was ${paddr}`);
        assert.ok(typeof paddr === "object");
        expect(paddr.pSelector).toBeUndefined();
        expect(paddr.sSelector).toBeUndefined();
        expect(paddr.tSelector).toBeUndefined();
        expect(paddr.nAddresses).toHaveLength(2);
        const naddr1 = new X213NetworkAddress(paddr.nAddresses[0]);
        assert.deepEqual(naddr1.getOctets(), new Uint8Array([0x36, 0x00, 0x23, 0x42, 0x19, 0x20, 0x03, 0x00, 0x12, 0x34, 0x56]));
        const naddr2 = new X213NetworkAddress(paddr.nAddresses[1]);
        assert.deepEqual(naddr2.getOctets(), new Uint8Array([0x54, 0x00, 0x72, 0x87, 0x22, 0x03, 0x01, 0x00, 0x00, 0x00, 0x00, 0x06, 0x65, 0x53, 0x56, 0x55, 0x34]));
    });

    it("handles empty selectors", () => {
        const input = "/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        expect(paddr).toBeDefined();
        assert.notEqual(typeof paddr, "string", `Error was ${paddr}`);
        assert.ok(typeof paddr === "object");
        expect(paddr.pSelector).toBeUndefined();
        expect(paddr.sSelector).toBeUndefined();
        expect(paddr.tSelector).toEqual(new Uint8Array([]));
        expect(paddr.nAddresses).toHaveLength(1);
        const naddr1 = new X213NetworkAddress(paddr.nAddresses[0]);
        assert.deepEqual(naddr1.getOctets(), new Uint8Array([0x36, 0x00, 0x23, 0x42, 0x19, 0x20, 0x03, 0x00, 0x12, 0x34, 0x56]));
    });

    it("handles malformed lone double-quote selector", () => {
        const input = "/\"/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles malformed unterminated double-quote selector", () => {
        const input = "/\"asdf/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles malformed prohibited character double-quote selector", () => {
        const input = "/\"așdf\"/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles malformed lone single-quote selector", () => {
        const input = "'///X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles unterminated single-quote selector", () => {
        const input = "'zxcv///X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles malformed hexadecimal selector", () => {
        const input = "/'himom'H//X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("detects malformed decimal / GOSIP selector", () => {
        const input = "#9himom//X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("detects too large decimal / GOSIP selector", () => {
        const input = "#99999//X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles unrecognized selector syntax", () => {
        const input = "/%himom%/X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        assert.ok(typeof paddr === "string");
    });

    it("handles no N-addresses", () => {
        const input = "//";
        const paddr = PresentationAddress.fromRfc1278String(input);
        expect(paddr).toBeDefined();
        assert.equal(typeof paddr, "string");
    });

    it("handles empty N-addresses", () => {
        const input = "//_X121+234219200300+d123456";
        const paddr = PresentationAddress.fromRfc1278String(input);
        expect(paddr).toBeDefined();
        assert.equal(typeof paddr, "string");
    });

    it("can compare correctly with isNaivelyExactly", () => {
        const paddr1 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr2 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr3 = new PresentationAddress(
            undefined,
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr4 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr5 = new PresentationAddress(
            undefined,
            undefined,
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr6 = new PresentationAddress(
            undefined,
            undefined,
            undefined,
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr7 = new PresentationAddress(
            undefined,
            undefined,
            undefined,
            [],
        );

        // Differing ordering of N-addresses should be considered equal.
        expect(paddr1.isNaivelyExactly(paddr2)).toBe(true);
        // Differing selector presence should be considered not equal.
        expect(paddr1.isNaivelyExactly(paddr3)).toBe(false);
        // Differing selector values should be considered not equal.
        expect(paddr1.isNaivelyExactly(paddr4)).toBe(false);
        paddr2.nAddresses.push(new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example3.com") ]));
        expect(paddr1.isNaivelyExactly(paddr2)).toBe(false);
        paddr2.nAddresses.pop();
        paddr2.nAddresses.pop();
        expect(paddr1.isNaivelyExactly(paddr2)).toBe(false);
        paddr1.nAddresses.shift();
        expect(paddr1.isNaivelyExactly(paddr2)).toBe(true);

        {
            paddr1.nAddresses.push(new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example4.com") ]));
            paddr2.nAddresses.push(new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example3.com") ]));
            expect(paddr1.isNaivelyExactly(paddr2)).toBe(false);
            expect(paddr2.isNaivelyExactly(paddr1)).toBe(false);
            paddr1.nAddresses.pop();
            paddr2.nAddresses.pop();
        }

        expect(paddr3.isNaivelyExactly(paddr5)).toBe(false);
        expect(paddr3.isNaivelyExactly(paddr6)).toBe(false);
        expect(paddr5.isNaivelyExactly(paddr6)).toBe(false);

        // Identity tests
        expect(paddr1.isNaivelyExactly(paddr1)).toBe(true);
        expect(paddr2.isNaivelyExactly(paddr2)).toBe(true);
        expect(paddr3.isNaivelyExactly(paddr3)).toBe(true);
        expect(paddr4.isNaivelyExactly(paddr4)).toBe(true);
        expect(paddr5.isNaivelyExactly(paddr5)).toBe(true);
        expect(paddr6.isNaivelyExactly(paddr6)).toBe(true);
    });

    it("can compare correctly with isNaivelySubsetOf", () => {
        const paddr1 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr2 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr3 = new PresentationAddress(
            undefined,
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr4 = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example2.com") ]),
            ],
        );
        const paddr5 = new PresentationAddress(
            undefined,
            undefined,
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr6 = new PresentationAddress(
            undefined,
            undefined,
            undefined,
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const paddr7 = new PresentationAddress(
            undefined,
            undefined,
            undefined,
            [],
        );
        // Differing ordering of N-addresses should be considered equal.
        expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(true);
        // Differing selector presence should be considered not equal.
        expect(paddr1.isNaivelySubsetOf(paddr3)).toBe(false);
        // Differing selector values should be considered not equal.
        expect(paddr1.isNaivelySubsetOf(paddr4)).toBe(false);
        paddr2.nAddresses.push(new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example3.com") ]));
        // paddr2 has all of paddr1's N-addresses plus one more, which should match.
        expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(true);
        // The reverse is not true.
        expect(paddr2.isNaivelySubsetOf(paddr1)).toBe(false);

        {
            paddr1.nAddresses.push(new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example4.com") ]));
            expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(false);
            expect(paddr2.isNaivelySubsetOf(paddr1)).toBe(false);
            paddr1.nAddresses.pop();
        }

        paddr2.nAddresses.pop(); // Now paddr2 === paddr1
        paddr2.nAddresses.pop(); // Now paddr2 has one less N-address than paddr1, which should not match.
        expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(false);
        paddr1.nAddresses.shift(); // Now paddr1 === paddr2
        expect(paddr1.isNaivelySubsetOf(paddr2)).toBe(true);

        expect(paddr3.isNaivelySubsetOf(paddr5)).toBe(false);
        expect(paddr3.isNaivelySubsetOf(paddr6)).toBe(false);
        expect(paddr5.isNaivelySubsetOf(paddr6)).toBe(false);
        expect(paddr6.isNaivelySubsetOf(paddr7)).toBe(false);
        expect(paddr7.isNaivelySubsetOf(paddr6)).toBe(false);
        expect(paddr7.isNaivelySubsetOf(paddr7)).toBe(false);
    });

    it("should be able to serialize a PresentationAddress to and from X.690 encodings", () => {
        const paddr = new PresentationAddress(
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            new Uint8Array([ 0x31, 0x32, 0x33, 0x34 ]),
            [
                new Uint8Array([ 0xFF, 0x00, 0x01, ...Buffer.from("https://example.com") ]),
            ],
        );
        const bytes = paddr.toX690Bytes();
        // expect(s).toEqual("'31323334'H/'31323334'H/'31323334'H/NS+FF000168747470733A2F2F6578616D706C652E636F6D");
        const decoded = PresentationAddress.fromX690Bytes(bytes);
        expect(decoded.isNaivelyExactly(paddr)).toBe(true);
    });

    // TODO: selectors filled in in the wrong order
});
