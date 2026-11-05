// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { bytesEqual } from "../constantTime.mjs";
import {
    PresentationAddress,
} from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { presentationAddressMatchTyped } from "./presentationAddressMatch.mjs";

const localTyped = presentationAddressMatchTyped;

function nsapToKey (naddr: Uint8Array): string {
    return String.fromCharCode.apply(null, naddr as unknown as number[]);
}

function matchWithLatin1Set (
    a: PresentationAddress,
    v: PresentationAddress,
): boolean {
    const storedNAddresses = new Set(v.nAddresses.map(nsapToKey));
    return (
        bytesEqual(a.pSelector!, v.pSelector!, 0)
        && bytesEqual(a.sSelector!, v.sSelector!, 0)
        && bytesEqual(a.tSelector!, v.tSelector!, 0)
        && a.nAddresses.every((naddr) => storedNAddresses.has(nsapToKey(naddr)))
    );
}

const hex = (s: string) => Uint8Array.from(s.replace(/\s+/g, "").match(/../g)!.map((b) => Number.parseInt(b, 16)));

const nsapRfc1277 = hex("54 00 72 87 22 03 19 20 00 02 00 01 01 02");
const nsapIpv6a = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 01 00 00");
const nsapIpv6b = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 02 00 00");
const nsapIpv6c = hex("35 00 01 20 01 0d b8 00 00 00 00 00 00 00 00 00 00 03 00 00");
const pSel = hex("00 00 00 01");
const sSel = hex("00 01");
const tSel = hex("00 01");
const pa = (nAddresses: Uint8Array[]) => new PresentationAddress(pSel, sSel, tSel, nAddresses);
const stored3 = pa([ nsapRfc1277, nsapIpv6a, nsapIpv6b ]);

const cases: [ string, PresentationAddress, PresentationAddress, boolean ][] = [
    [ "1 presented in 1 stored (match)", pa([ nsapIpv6a ]), pa([ nsapIpv6a.slice() ]), true ],
    [ "1 presented in 3 stored (match)", pa([ nsapIpv6b ]), stored3, true ],
    [ "2 presented in 3 stored (match)", pa([ nsapIpv6b, nsapRfc1277 ]), stored3, true ],
    [ "2 presented in 3 stored (no match)", pa([ nsapIpv6b, nsapIpv6c ]), stored3, false ],
];

let sink = 0;

describe("presentationAddressMatchTyped linear bytesEqual vs Set of Latin-1 keys", () => {
    for (const [ name, a, b, expected ] of cases) {
        test(name, async ({ bench }) => {
            expect(matchWithLatin1Set(a, b)).toBe(expected);
            expect(localTyped(a, b)).toBe(expected);
            const result = await bench.compare(
                bench("Set of Latin-1 keys", () => {
                    sink += matchWithLatin1Set(a, b) ? 1 : 0;
                }),
                bench("linear bytesEqual", () => {
                    sink += localTyped(a, b) ? 1 : 0;
                }),
            );
            expect(result.get("linear bytesEqual")).toBeFasterThan(result.get("Set of Latin-1 keys"));
        });
    }
});

export { sink };
