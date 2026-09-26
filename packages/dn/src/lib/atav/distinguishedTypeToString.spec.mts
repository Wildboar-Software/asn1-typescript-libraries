import { ObjectIdentifier } from "@wildboar/asn1";
import { describe, expect, it } from "vitest";
import distinguishedTypeToString from "./distinguishedTypeToString.mjs";

const SHORT_NAMES: ReadonlyArray<readonly [number, string]> = [
    [3, "cn"],
    [4, "sn"],
    [5, "serialNumber"],
    [6, "c"],
    [7, "l"],
    [8, "st"],
    [10, "o"],
    [11, "ou"],
    [12, "title"],
    [42, "gn"],
    [43, "initials"],
    [44, "generationQualifier"],
    [46, "dnQualifier"],
    [65, "pseudonym"],
    [98, "c3"],
    [99, "n3"],
];

describe("distinguishedTypeToString()", () => {
    it.each(SHORT_NAMES)("maps 2.5.4.%i to %s", (arc, shortName) => {
        const oid = ObjectIdentifier.fromParts([2, 5, 4, arc]);
        expect(distinguishedTypeToString(oid)).toBe(shortName);
    });

    it("maps the domain component OID to dc", () => {
        const dc = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 25]);
        expect(distinguishedTypeToString(dc)).toBe("dc");
    });

    it("returns the dotted OID when the type is not a known short name", () => {
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 4, 9]))).toBe("2.5.4.9");
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 4, 128]))).toBe("2.5.4.128");
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 5, 3]))).toBe("2.5.5.3");
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([1, 2, 250]))).toBe("1.2.250");
    });
});
