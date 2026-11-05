import { AuthorityKeyIdentifier } from "./AuthorityKeyIdentifier.ta.mjs";

function aki (
    key?: number[],
    issuer?: string,
    serial?: number[],
): AuthorityKeyIdentifier {
    return new AuthorityKeyIdentifier(
        key === undefined ? undefined : new Uint8Array(key),
        issuer === undefined ? undefined : [{ dNSName: issuer }],
        serial === undefined ? undefined : new Uint8Array(serial),
    );
}

describe("AuthorityKeyIdentifier.isEmpty()", () => {
    it("is true only when every component is absent", () => {
        expect(new AuthorityKeyIdentifier().isEmpty()).toBe(true);
        expect(aki([9]).isEmpty()).toBe(false);
        expect(aki(undefined, "ca.example", [1]).isEmpty()).toBe(false);
    });
});

describe("AuthorityKeyIdentifier.isEqualTo()", () => {
    it("matches the same key identifier", () => {
        expect(aki([1, 2, 3]).isEqualTo(aki([1, 2, 3]))).toBe(true);
    });

    it("matches issuer names regardless of order, with the same serial", () => {
        const a = new AuthorityKeyIdentifier(
            new Uint8Array([1]),
            [{ dNSName: "a.example" }, { dNSName: "b.example" }],
            new Uint8Array([9]),
        );
        const b = new AuthorityKeyIdentifier(
            new Uint8Array([1]),
            [{ dNSName: "b.example" }, { dNSName: "a.example" }],
            new Uint8Array([9]),
        );
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a missing component or a different key, issuer, or serial", () => {
        const full = aki([1], "ca.example", [9]);
        expect(full.isEqualTo(aki([1]))).toBe(false);
        expect(full.isEqualTo(aki([2], "ca.example", [9]))).toBe(false);
        expect(full.isEqualTo(aki([1], "other.example", [9]))).toBe(false);
        expect(full.isEqualTo(aki([1], "ca.example", [8]))).toBe(false);
    });
});
