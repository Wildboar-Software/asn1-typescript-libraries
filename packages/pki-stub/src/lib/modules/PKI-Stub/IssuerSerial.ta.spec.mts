import { IssuerSerial } from "./IssuerSerial.ta.mjs";

function issuerSerial (
    name: string,
    serial: number[],
    uid?: boolean[],
): IssuerSerial {
    return new IssuerSerial(
        [{ dNSName: name }],
        new Uint8Array(serial),
        uid === undefined ? undefined : new Uint8ClampedArray(uid.map((bit) => (bit ? 1 : 0))),
    );
}

describe("IssuerSerial.isEqualTo()", () => {
    it("matches the same issuer, serial, and omitted UID", () => {
        expect(issuerSerial("ca.example", [1, 2]).isEqualTo(issuerSerial("ca.example", [1, 2])))
            .toBe(true);
    });

    it("matches issuer names regardless of order", () => {
        const a = new IssuerSerial(
            [{ dNSName: "a.example" }, { dNSName: "b.example" }],
            new Uint8Array([1]),
        );
        const b = new IssuerSerial(
            [{ dNSName: "b.example" }, { dNSName: "a.example" }],
            new Uint8Array([1]),
        );
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a different serial, issuer, or UID presence", () => {
        const full = issuerSerial("ca.example", [1], [true, false]);
        expect(full.isEqualTo(issuerSerial("ca.example", [2], [true, false]))).toBe(false);
        expect(full.isEqualTo(issuerSerial("other.example", [1], [true, false]))).toBe(false);
        expect(full.isEqualTo(issuerSerial("ca.example", [1]))).toBe(false);
        expect(full.isEqualTo(issuerSerial("ca.example", [1], [false, true]))).toBe(false);
    });
});
