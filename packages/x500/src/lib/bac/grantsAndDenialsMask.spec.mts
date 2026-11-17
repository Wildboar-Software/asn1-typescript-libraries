import { TRUE_BIT } from "@wildboar/asn1";
import { deniesAccess } from "./deniesAccess.mjs";
import { grantsAccess } from "./grantsAccess.mjs";
import { splitGrantsAndDenials } from "./splitGrantsAndDenials.mjs";
import {
    grantsAndDenialsHasBit,
    grantsAndDenialsPermit,
    grantsAndDenialsRelevant,
    grantsAndDenialsToMask,
    grantsAndDenialsWithoutBit,
} from "./grantsAndDenialsMask.mjs";
import ACDFTuple from "../types/ACDFTuple.mjs";
import ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import { UserClasses } from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import { ProtectedItems } from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import type { AuthenticationLevel } from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import { AuthenticationLevel_basicLevels } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";

/**
 * The BIT STRING walks this replaced. Kept here so a mask that disagrees with
 * them fails the test.
 */
function arrayDenies (gad: Uint8ClampedArray): boolean {
    for (let i = 1; i < gad.length; i += 2) {
        if (gad[i]) {
            return true;
        }
    }
    return false;
}

function arrayGrants (gad: Uint8ClampedArray): boolean {
    for (let i = 0; i < gad.length; i += 2) {
        if (gad[i]) {
            return true;
        }
    }
    return false;
}

function arrayPermit (gad: Uint8ClampedArray, operations: number[]): boolean {
    for (let i = 0; i < operations.length; i++) {
        const bit = operations[i] * 2;
        if ((bit < 0) || (gad[bit] !== TRUE_BIT) || (gad[bit + 1] === TRUE_BIT)) {
            return false;
        }
    }
    return true;
}

function arrayRelevant (gad: Uint8ClampedArray, operations: number[]): boolean {
    for (let i = 0; i < operations.length; i++) {
        const bit = operations[i] * 2;
        if ((bit >= 0) && ((gad[bit] === TRUE_BIT) || (gad[bit + 1] === TRUE_BIT))) {
            return true;
        }
    }
    return false;
}

function arraySplit (gad: Uint8ClampedArray): Uint8ClampedArray[] {
    let grantsEncountered = false;
    let denialsEncountered = false;
    for (let i = 0; i < gad.length; i += 2) {
        if (gad[i]) {
            grantsEncountered = true;
        }
        if (((i + 1) < gad.length) && gad[i + 1]) {
            denialsEncountered = true;
        }
        if (grantsEncountered && denialsEncountered) {
            break;
        }
    }
    if (!grantsEncountered || !denialsEncountered) {
        return [ gad ];
    }
    const grants = new Uint8ClampedArray(gad.length);
    const denials = new Uint8ClampedArray(gad.length);
    for (let i = 0; i < gad.length; i += 2) {
        if (gad[i]) {
            grants[i] = TRUE_BIT;
        }
        if (((i + 1) < gad.length) && gad[i + 1]) {
            denials[i + 1] = TRUE_BIT;
        }
    }
    return [ grants, denials ];
}

function arrayFromMask (mask: number): Uint8ClampedArray {
    const out = new Uint8ClampedArray(32);
    for (let i = 0; i < 32; i++) {
        if ((mask & (1 << i)) !== 0) {
            out[i] = TRUE_BIT;
        }
    }
    return out;
}

const OPERATION_SETS: number[][] = [
    [],
    [ 0 ],
    [ 2 ],
    [ 12 ],
    [ 15 ],
    [ 0, 2, 12 ],
    [ 16 ],
    [ 2, 16 ],
    [ -1 ],
];

function expectMaskAgrees (mask: number): void {
    const bits = arrayFromMask(mask);
    expect(grantsAndDenialsToMask(bits)).toBe(mask | 0);
    expect(deniesAccess(mask)).toBe(arrayDenies(bits));
    expect(arrayGrants(bits)).toBe((mask & 0x55555555) !== 0);
    for (const operations of OPERATION_SETS) {
        expect(grantsAndDenialsPermit(mask, operations)).toBe(arrayPermit(bits, operations));
        expect(grantsAndDenialsRelevant(mask, operations)).toBe(arrayRelevant(bits, operations));
    }
    const arrayParts = arraySplit(bits);
    const maskParts = splitGrantsAndDenials(mask);
    expect(maskParts).toHaveLength(arrayParts.length);
    if (arrayParts.length === 1) {
        expect(maskParts[0]).toBe(mask);
        expect(arrayParts[0]).toBe(bits);
    } else {
        expect(maskParts[0]).toBe(grantsAndDenialsToMask(arrayParts[0]));
        expect(maskParts[1]).toBe(grantsAndDenialsToMask(arrayParts[1]));
        expect(deniesAccess(maskParts[0])).toBe(false);
        expect((maskParts[1] & 0x55555555) !== 0).toBe(false);
    }
    for (let bit = 0; bit < 32; bit++) {
        expect(grantsAndDenialsHasBit(mask, bit)).toBe(bits[bit] === TRUE_BIT);
        const cleared = grantsAndDenialsWithoutBit(mask, bit);
        if (bits[bit] === TRUE_BIT) {
            expect(grantsAndDenialsHasBit(cleared, bit)).toBe(false);
            expect(cleared).not.toBe(mask);
        } else {
            expect(cleared).toBe(mask);
        }
    }
}

describe("grantsAndDenialsToMask", () => {
    it("packs bits 0 and 31, and ignores a long string of unset bits", () => {
        const bits = new Uint8ClampedArray(40);
        bits[0] = TRUE_BIT;
        bits[31] = TRUE_BIT;
        const mask = grantsAndDenialsToMask(bits);
        expect(mask).toBe((1 << 0) | (1 << 31));
        expect(mask).toBeLessThan(0);
        expect(grantsAndDenialsHasBit(mask, 0)).toBe(true);
        expect(grantsAndDenialsHasBit(mask, 31)).toBe(true);
        expect(grantsAndDenialsHasBit(mask, 30)).toBe(false);
        expect(grantsAndDenialsToMask(new Uint8ClampedArray(0))).toBe(0);
        expect(grantsAndDenialsToMask(new Uint8ClampedArray(40))).toBe(0);
    });

    it("treats any non-zero byte as a set bit", () => {
        const bits = new Uint8ClampedArray(4);
        bits[2] = 2;
        expect(grantsAndDenialsHasBit(grantsAndDenialsToMask(bits), 2)).toBe(true);
    });

    it("returns an int32 mask unchanged and rejects values that do not fit", () => {
        const bit31 = 1 << 31;
        expect(grantsAndDenialsToMask(bit31)).toBe(bit31);
        expect(grantsAndDenialsToMask(-1)).toBe(-1);
        expect(grantsAndDenialsToMask(0)).toBe(0);
        expect(() => grantsAndDenialsToMask(1.5)).toThrow(RangeError);
        expect(() => grantsAndDenialsToMask(2 ** 32)).toThrow(RangeError);
        expect(() => grantsAndDenialsToMask(Number.NaN)).toThrow(RangeError);
        const past = new Uint8ClampedArray(33);
        past[32] = TRUE_BIT;
        expect(() => grantsAndDenialsToMask(past)).toThrow(RangeError);
    });

    it("does not alias permission category 16 onto grantAdd", () => {
        const grantAdd = 1 << 0;
        expect(grantsAndDenialsPermit(grantAdd, [ 16 ])).toBe(false);
        expect(grantsAndDenialsRelevant(grantAdd, [ 16 ])).toBe(false);
        expect(grantsAndDenialsPermit(grantAdd, [ 0 ])).toBe(true);
        expect(grantsAndDenialsRelevant(grantAdd, [ 2, 16 ])).toBe(false);
        expect(grantsAndDenialsHasBit(grantAdd, -1)).toBe(false);
        expect(grantsAndDenialsWithoutBit(grantAdd, 32)).toBe(grantAdd);
    });

    it("agrees with the BIT STRING walks for every low 10-bit pattern and for bit 31", () => {
        for (let mask = 0; mask < 1024; mask++) {
            expectMaskAgrees(mask);
        }
        expectMaskAgrees(1 << 30);
        expectMaskAgrees(1 << 31);
        expectMaskAgrees((1 << 30) | (1 << 31));
        expectMaskAgrees(-1);
        expectMaskAgrees(0x55555555);
        expectMaskAgrees(0xAAAAAAAA | 0);
        let state = 0x12345678;
        for (let i = 0; i < 50; i++) {
            state = (Math.imul(state, 1664525) + 1013904223) | 0;
            expectMaskAgrees(state);
        }
    });
});

describe("ACDFTuple grantsAndDenials mask", () => {
    const auth: AuthenticationLevel = {
        basicLevels: new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_none,
        ),
    };
    const items = new ProtectedItems(null);
    const users = new UserClasses(null);

    it("packs a BIT STRING once and does not mutate it", () => {
        const bits = new Uint8ClampedArray(26);
        bits[4] = TRUE_BIT;
        bits[5] = TRUE_BIT;
        const tuple = new ACDFTuple(users, auth, items, bits, 10);
        expect(tuple.grantsAndDenials).toBe((1 << 4) | (1 << 5));
        expect(bits[4]).toBe(TRUE_BIT);
        expect(bits[5]).toBe(TRUE_BIT);
        const again = new ACDFTuple(users, auth, items, tuple.grantsAndDenials, 10);
        expect(again.grantsAndDenials).toBe(tuple.grantsAndDenials);
    });

    it("clears a bit on a new extended tuple and leaves the original mask", () => {
        const extended = new ACDFTupleExtended(
            users,
            auth,
            items,
            new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT ]),
            10,
            1,
        );
        const original = extended.grantsAndDenials;
        const cleared = extended.withGrantsAndDenials(grantsAndDenialsWithoutBit(original, 0));
        expect(extended.grantsAndDenials).toBe(original);
        expect(grantsAndDenialsHasBit(cleared.grantsAndDenials, 0)).toBe(false);
        expect(grantsAndDenialsHasBit(cleared.grantsAndDenials, 1)).toBe(true);
        expect(grantsAccess(extended)).toBe(true);
        expect(deniesAccess(cleared.grantsAndDenials)).toBe(true);
        expect(grantsAccess(cleared)).toBe(false);
    });

    it("throws when a constructed tuple carries a bit past bit 31", () => {
        const bits = new Uint8ClampedArray(33);
        bits[32] = TRUE_BIT;
        expect(() => new ACDFTuple(users, auth, items, bits, 1)).toThrow(RangeError);
    });
});
