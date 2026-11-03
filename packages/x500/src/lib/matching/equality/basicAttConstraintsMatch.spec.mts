import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { TBSAttributeCertificate } from "../../modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";
import { Holder } from "../../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import { AttCertIssuer } from "../../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "../../modules/AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { AttCertVersion_v2 } from "../../modules/AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import {
    _encode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../../modules/AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
import { id_ce_basicAttConstraints } from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import { MATCH_FLAG_APPROXIMATE } from "../../types/matching.mjs";
import { basicAttConstraintsMatchTyped } from "./basicAttConstraintsMatch.mjs";

const ALG = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));

function certificate (authority: boolean, pathLen?: number | bigint) {
    const syntax = new BasicAttConstraintsSyntax(authority, pathLen);
    const extn = _encode_BasicAttConstraintsSyntax(syntax, DER);
    const tbs = new TBSAttributeCertificate(
        AttCertVersion_v2,
        new Holder(undefined, [{ dNSName: "holder.example" }]),
        new AttCertIssuer([{ dNSName: "issuer.example" }]),
        ALG,
        new Uint8Array([1]),
        new AttCertValidityPeriod(
            new Date("2020-01-01T00:00:00Z"),
            new Date("2030-01-01T00:00:00Z"),
        ),
        [],
        undefined,
        [],
        [new Extension(id_ce_basicAttConstraints, true, extn.toBytes())],
    );
    return _encode_AttributeCertificate(
        new SIGNED(tbs, ALG, new Uint8ClampedArray([0])),
        DER,
    );
}

describe("basicAttConstraintsMatchTyped()", () => {
    it("equates a number path length with the same bigint", () => {
        const stored = certificate(true, 5);
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 5n),
            stored,
        )).toBe(true);
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 5),
            stored,
        )).toBe(true);
    });

    it("rejects a different path length", () => {
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 4n),
            certificate(true, 5),
        )).toBe(false);
    });

    it("matches only when path length presence agrees", () => {
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, undefined),
            certificate(true, undefined),
        )).toBe(true);
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 0n),
            certificate(true, undefined),
        )).toBe(false);
    });

    it("treats path lengths one apart as approximate", () => {
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 5n),
            certificate(true, 6),
            undefined,
            MATCH_FLAG_APPROXIMATE,
        )).toBe(true);
        expect(basicAttConstraintsMatchTyped(
            new BasicAttConstraintsSyntax(true, 5),
            certificate(true, 7),
            undefined,
            MATCH_FLAG_APPROXIMATE,
        )).toBe(false);
    });
});
