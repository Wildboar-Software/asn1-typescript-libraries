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
import { id_ce_roleSpecCertIdentifier } from "../../modules/AttributeCertificateDefinitions/id-ce-roleSpecCertIdentifier.va.mjs";
import {
    RoleSpecCertIdentifier,
} from "../../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import {
    _encode_RoleSpecCertIdentifierSyntax,
} from "../../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import roleSpecCertIdMatch from "./roleSpecCertIdMatch.mjs";

const ALG = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));

const storedIdentifier = new RoleSpecCertIdentifier(
    { dNSName: "role.example" },
    { dNSName: "issuer.example" },
    new Uint8Array([1]),
    [{ dNSName: "locator.example" }],
);

function attributeCertificate (identifiers: RoleSpecCertIdentifier[]): ASN1Element {
    const extn = _encode_RoleSpecCertIdentifierSyntax(identifiers, DER);
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
        [new Extension(id_ce_roleSpecCertIdentifier, false, extn.toBytes())],
    );
    return _encode_AttributeCertificate(
        new SIGNED(tbs, ALG, new Uint8ClampedArray([0])),
        DER,
    );
}

function assertion (identifiers: RoleSpecCertIdentifier[]): ASN1Element {
    return _encode_RoleSpecCertIdentifierSyntax(identifiers, DER);
}

describe("roleSpecCertIdMatch", () => {
    const stored = attributeCertificate([storedIdentifier]);

    it("matches when the assertion omits serial and locator", () => {
        const presented = assertion([
            new RoleSpecCertIdentifier(
                { dNSName: "role.example" },
                { dNSName: "issuer.example" },
            ),
        ]);
        expect(roleSpecCertIdMatch(presented, stored)).toBe(true);
    });

    it("does not match a different serial when the assertion includes one", () => {
        const presented = assertion([
            new RoleSpecCertIdentifier(
                { dNSName: "role.example" },
                { dNSName: "issuer.example" },
                new Uint8Array([2]),
            ),
        ]);
        expect(roleSpecCertIdMatch(presented, stored)).toBe(false);
    });

    it("returns false when the stored certificate has no roleSpecCertIdentifier extension", () => {
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
        );
        const value = _encode_AttributeCertificate(
            new SIGNED(tbs, ALG, new Uint8ClampedArray([0])),
            DER,
        );
        const presented = assertion([
            new RoleSpecCertIdentifier(
                { dNSName: "role.example" },
                { dNSName: "issuer.example" },
            ),
        ]);
        expect(roleSpecCertIdMatch(presented, value)).toBe(false);
    });
});
