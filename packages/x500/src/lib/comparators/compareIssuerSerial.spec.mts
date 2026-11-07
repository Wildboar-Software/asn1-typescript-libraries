import { type BIT_STRING } from "@wildboar/asn1";
import { IssuerSerial } from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import { compareIssuerSerial } from "./compareIssuerSerial.mjs";

describe("compareIssuerSerial (M16)", () => {
    it.each<{
        description: string;
        aUID: BIT_STRING | undefined;
        bUID: BIT_STRING | undefined;
        equal: boolean;
    }>([
        { description: "both UIDs absent", aUID: undefined, bUID: undefined, equal: true },
        {
            description: "identical UID bits",
            aUID: new Uint8ClampedArray([1, 0, 1]),
            bUID: new Uint8ClampedArray([1, 0, 1]),
            equal: true,
        },
        {
            description: "different UID bits of the same length",
            aUID: new Uint8ClampedArray([1, 0, 1]),
            bUID: new Uint8ClampedArray([1, 1, 1]),
            equal: false,
        },
        {
            description: "a significant trailing zero bit",
            aUID: new Uint8ClampedArray([1]),
            bUID: new Uint8ClampedArray([1, 0]),
            equal: false,
        },
        {
            description: "UID present on only one side",
            aUID: new Uint8ClampedArray([1]),
            bUID: undefined,
            equal: false,
        },
        {
            description: "empty UID is present, not absent",
            aUID: new Uint8ClampedArray(),
            bUID: undefined,
            equal: false,
        },
        {
            description: "two present empty UIDs",
            aUID: new Uint8ClampedArray(),
            bUID: new Uint8ClampedArray(),
            equal: true,
        },
    ])("compares $description", ({ aUID, bUID, equal }) => {
        const a = new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1]), aUID);
        const b = new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1]), bUID);
        expect(compareIssuerSerial(a, b)).toBe(equal);
        expect(compareIssuerSerial(b, a)).toBe(equal);
    });

    it("still requires the same serial number and issuer", () => {
        const certificate = new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1]));
        const anotherSerial = new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([2]));
        const anotherIssuer = new IssuerSerial([{ dNSName: "other.example" }], new Uint8Array([1]));
        expect(compareIssuerSerial(certificate, anotherSerial)).toBe(false);
        expect(compareIssuerSerial(certificate, anotherIssuer)).toBe(false);
    });
});
