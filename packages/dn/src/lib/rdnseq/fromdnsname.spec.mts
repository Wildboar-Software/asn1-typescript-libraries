import { describe, expect, it } from "vitest";
import { fromDnsName } from "./fromdnsname.mjs";
import { toDnsName } from "./todnsname.mjs";
import { domainComponentOID } from "../attributeTypes.mjs";

describe("fromDnsName()", () => {
    it("creates one domainComponent RDN per label, in the same order", () => {
        const rdns = fromDnsName("www.example.com")!;
        expect(rdns).toHaveLength(3);
        for (const rdn of rdns) {
            expect(rdn).toHaveLength(1);
            expect(rdn[0].type_.toString()).toBe(domainComponentOID);
        }
        expect(rdns.map((rdn) => rdn[0].value.ia5String))
            .toEqual(["www", "example", "com"]);
    });

    it("converts a single label", () => {
        expect(fromDnsName("localhost")!.map((rdn) => rdn[0].value.ia5String))
            .toEqual(["localhost"]);
    });

    it("preserves case and A-labels", () => {
        expect(toDnsName(fromDnsName("Xn--Bcher-Kva.Example")!))
            .toBe("Xn--Bcher-Kva.Example");
    });

    it("round-trips with toDnsName()", () => {
        for (const name of ["com", "example.com", "a.b.c.d.e.f"]) {
            expect(toDnsName(fromDnsName(name)!)).toBe(name);
        }
    });

    it("ignores a single trailing dot", () => {
        expect(toDnsName(fromDnsName("example.com.")!)).toBe("example.com");
    });

    it("converts the empty string and the root to an empty sequence", () => {
        expect(fromDnsName("")).toEqual([]);
        expect(fromDnsName(".")).toEqual([]);
    });

    it("returns null if a label is empty", () => {
        expect(fromDnsName("a..b")).toBeNull();
        expect(fromDnsName(".a")).toBeNull();
        expect(fromDnsName("a.b..")).toBeNull();
    });
});
