/**
 * Benchmark comparing the `Uint8Array.prototype.toString()` NSAP keys
 * that `presentationAddressMatchTyped` used to build for its `Set` against
 * the Latin-1 keys it builds now.
 *
 * Run from the repo root:
 *   npx vitest bench --run --config packages/x500/vite.config.ts
 */
import { test } from "vitest";
import { Buffer } from "node:buffer";
import { DERElement } from "@wildboar/asn1";
import {
    PresentationAddress,
    _encode_PresentationAddress,
} from "../src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { presentationAddressMatchTyped } from "../src/lib/matching/equality/presentationAddressMatch.mjs";
import { presentationAddressMatchToStringKeys } from "./presentationAddressMatchToStringKeys.mjs";

const BEFORE = "before: Uint8Array.toString() keys";
const AFTER = "after: Latin-1 keys";

const hex = (s) => new Uint8Array(Buffer.from(s.replace(/\s+/g, ""), "hex"));

// RFC 1277 IPv4 NSAP (TCP/IP 192.0.2.1:102).
const nsapRfc1277 = hex("54 00 72 87 22 03 19 20 00 02 00 01 01 02");
// IANA ICP IPv6 NSAPs (20 octets).
const nsapIpv6a = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 01 00 00");
const nsapIpv6b = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 02 00 00");
const nsapIpv6c = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 03 00 00");
// X.121 / DCC-style NSAP.
const nsapX121 = hex("36 31 34 32 30 30 30 30 30 30 30 30 30 30 01");

const pSel = hex("00 00 00 01");
const sSel = hex("00 01");
const tSel = hex("00 01");

const pa = (nAddresses) => new PresentationAddress(pSel, sSel, tSel, nAddresses);

const stored3 = pa([nsapRfc1277, nsapIpv6a, nsapIpv6b]);
const cases = [
    ["1 presented in 1 stored (match)", pa([nsapIpv6a]), pa([nsapIpv6a.slice()]), true],
    ["1 presented in 3 stored (match)", pa([nsapIpv6b]), stored3, true],
    ["2 presented in 3 stored (match)", pa([nsapIpv6b, nsapRfc1277]), stored3, true],
    ["2 presented in 3 stored (no match)", pa([nsapIpv6b, nsapIpv6c]), stored3, false],
    ["3 presented in 5 stored (match)", pa([nsapX121, nsapIpv6c, nsapIpv6a]), pa([nsapRfc1277, nsapIpv6a, nsapIpv6b, nsapIpv6c, nsapX121]), true],
    ["2 presented in 3 stored, stored is encoded (match)", pa([nsapIpv6b, nsapRfc1277]), _encode_PresentationAddress(stored3, () => new DERElement()), true],
];

let sink;

test("NSAP key generation only (5 NSAPs)", async ({ bench, expect }) => {
    const nsaps = [nsapRfc1277, nsapIpv6a, nsapIpv6b, nsapIpv6c, nsapX121];
    const result = await bench.compare(
        bench(BEFORE, () => {
            for (const naddr of nsaps) {
                sink = naddr.toString();
            }
        }),
        bench(AFTER, () => {
            for (const naddr of nsaps) {
                sink = String.fromCharCode.apply(null, naddr);
            }
        }),
    );
    expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
});

for (const [name, a, b, expected] of cases) {
    test(`presentationAddressMatchTyped: ${name}`, async ({ bench, expect }) => {
        expect(presentationAddressMatchToStringKeys(a, b)).toBe(expected);
        expect(presentationAddressMatchTyped(a, b)).toBe(expected);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink = presentationAddressMatchToStringKeys(a, b);
            }),
            bench(AFTER, () => {
                sink = presentationAddressMatchTyped(a, b);
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
}

void sink;
