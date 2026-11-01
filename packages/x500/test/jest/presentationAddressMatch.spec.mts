import { DERElement } from "@wildboar/asn1";
import {
    PresentationAddress,
    _encode_PresentationAddress,
} from "../../src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import {
    presentationAddressMatchTyped,
} from "../../src/lib/matching/equality/presentationAddressMatch.mjs";

const bytes = (...octets: number[]): Uint8Array => new Uint8Array(octets);

const tSel = bytes(0, 1);
const nsap1 = bytes(0x54, 0x00, 0x72, 0x87, 0x22, 0x03, 0xc0, 0x00, 0x02, 0x01);
const nsap2 = bytes(0x35, 0x00, 0x01, 0x20, 0x01, 0x0d, 0xb8, 0xff, 0x80, 0x7f);
const nsap3 = bytes(0x36, 0x31, 0x34);

function pa (
    nAddresses: Uint8Array[],
    pSelector?: Uint8Array,
    sSelector?: Uint8Array,
    tSelector: Uint8Array | undefined = tSel,
): PresentationAddress {
    return new PresentationAddress(pSelector, sSelector, tSelector, nAddresses);
}

describe("presentationAddressMatchTyped", () => {
    it("matches identical addresses", () => {
        expect(presentationAddressMatchTyped(pa([nsap1, nsap2]), pa([nsap1, nsap2]))).toBe(true);
    });

    it("matches when the presented NSAPs are a subset of the stored, in any order", () => {
        expect(presentationAddressMatchTyped(pa([nsap2]), pa([nsap1, nsap2, nsap3]))).toBe(true);
        expect(presentationAddressMatchTyped(pa([nsap3, nsap1]), pa([nsap1, nsap2, nsap3]))).toBe(true);
    });

    it("does not match when a presented NSAP is not stored", () => {
        expect(presentationAddressMatchTyped(pa([nsap1, nsap3]), pa([nsap1, nsap2]))).toBe(false);
    });

    it("distinguishes NSAPs that differ only in high octets", () => {
        const a = bytes(0x80, 0xff, 0x00);
        const b = bytes(0x80, 0xfe, 0x00);
        expect(presentationAddressMatchTyped(pa([a]), pa([b]))).toBe(false);
        expect(presentationAddressMatchTyped(pa([a]), pa([a.slice()]))).toBe(true);
    });

    it("distinguishes NSAPs that are prefixes of one another", () => {
        expect(presentationAddressMatchTyped(pa([bytes(1, 2)]), pa([bytes(1, 2, 0)]))).toBe(false);
        expect(presentationAddressMatchTyped(pa([bytes(1, 2, 0)]), pa([bytes(1, 2)]))).toBe(false);
    });

    it("compares only the viewed octets of NSAPs that are views into larger buffers", () => {
        const backing = bytes(0xaa, ...nsap2, 0xbb);
        const view = backing.subarray(1, 1 + nsap2.length);
        expect(presentationAddressMatchTyped(pa([view]), pa([nsap2]))).toBe(true);
        expect(presentationAddressMatchTyped(pa([nsap2]), pa([view]))).toBe(true);
    });

    it("handles very long NSAPs", () => {
        const long = new Uint8Array(100_000).map((_, i) => i % 256);
        const longDifferent = long.slice();
        longDifferent[99_999] ^= 1;
        expect(presentationAddressMatchTyped(pa([long]), pa([nsap1, long.slice()]))).toBe(true);
        expect(presentationAddressMatchTyped(pa([long]), pa([nsap1, longDifferent]))).toBe(false);
    });

    it("matches NSAPs on either side of the long-NSAP threshold consistently", () => {
        for (const length of [255, 256, 257, 300]) {
            const n = new Uint8Array(length).map((_, i) => (i * 7) % 256);
            expect(presentationAddressMatchTyped(pa([n]), pa([n.slice()]))).toBe(true);
            expect(presentationAddressMatchTyped(pa([n.subarray(1)]), pa([n]))).toBe(false);
        }
    });

    it("requires the selectors to match", () => {
        expect(presentationAddressMatchTyped(pa([nsap1], bytes(1)), pa([nsap1], bytes(1)))).toBe(true);
        expect(presentationAddressMatchTyped(pa([nsap1], bytes(1)), pa([nsap1], bytes(2)))).toBe(false);
        expect(presentationAddressMatchTyped(pa([nsap1], bytes(1)), pa([nsap1]))).toBe(false);
        expect(presentationAddressMatchTyped(pa([nsap1], undefined, bytes(3)), pa([nsap1]))).toBe(false);
        expect(presentationAddressMatchTyped(pa([nsap1]), new PresentationAddress(undefined, undefined, undefined, [nsap1]))).toBe(false);
    });

    it("decodes an encoded stored value", () => {
        const encoded = _encode_PresentationAddress(pa([nsap1, nsap2]), () => new DERElement());
        expect(presentationAddressMatchTyped(pa([nsap2]), encoded)).toBe(true);
        expect(presentationAddressMatchTyped(pa([nsap3]), encoded)).toBe(false);
    });
});
