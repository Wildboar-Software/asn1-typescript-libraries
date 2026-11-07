import { compareTarget } from "./compareTarget.mjs";
import type {
    Target,
} from "../modules/AttributeCertificateDefinitions/Target.ta.mjs";
import { TargetCert } from "../modules/AttributeCertificateDefinitions/TargetCert.ta.mjs";
import { IssuerSerial } from "../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";

describe("compareTarget()", () => {
    it("does not equate different certificates sharing a targetName (M17)", () => {
        const a: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1])),
            { dNSName: "server.example" },
        ) };
        const b: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([2])),
            { dNSName: "server.example" },
        ) };
        // A server name can identify several certificates. Serial numbers still matter.
        expect(compareTarget(a, b)).toBe(false);
        expect(compareTarget(b, a)).toBe(false);
    });

    it("does not equate certificates from different issuers sharing a targetName", () => {
        const a: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "first-issuer.example" }], new Uint8Array([1])),
            { dNSName: "server.example" },
        ) };
        const b: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "second-issuer.example" }], new Uint8Array([1])),
            { dNSName: "server.example" },
        ) };
        expect(compareTarget(a, b)).toBe(false);
    });

    it("uses certificate identity even when optional target names differ", () => {
        const a: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1])),
            { dNSName: "first-alias.example" },
        ) };
        const b: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1])),
            { dNSName: "second-alias.example" },
        ) };
        expect(compareTarget(a, b)).toBe(true);
        expect(compareTarget(b, a)).toBe(true);
    });

    it("includes issuer UID bits in certificate identity (M16)", () => {
        const a: Target = { targetCert: new TargetCert(new IssuerSerial(
            [{ dNSName: "issuer.example" }], new Uint8Array([1]), new Uint8ClampedArray([1, 0]),
        ), { dNSName: "server.example" }) };
        const b: Target = { targetCert: new TargetCert(new IssuerSerial(
            [{ dNSName: "issuer.example" }], new Uint8Array([1]), new Uint8ClampedArray([0, 1]),
        ), { dNSName: "server.example" }) };
        expect(compareTarget(a, b)).toBe(false);
    });

    it("preserves name matching between a targetCert and a targetName", () => {
        const certificate: Target = { targetCert: new TargetCert(
            new IssuerSerial([{ dNSName: "issuer.example" }], new Uint8Array([1])),
            { dNSName: "server.example" },
        ) };
        const name: Target = { targetName: { dNSName: "server.example" } };
        expect(compareTarget(certificate, name)).toBe(true);
        expect(compareTarget(name, certificate)).toBe(true);
    });

    it("evaluates targetGroup as a prefix when matching against a targetName", () => {
        const a: Target = { targetGroup: { dNSName: "alpha.example.com" } };
        const b: Target = { targetName: { dNSName: "server01.alpha.example.com" } };
        const result = compareTarget(a, b, () => () => false);
        expect(result).toBe(true);
    });
});
