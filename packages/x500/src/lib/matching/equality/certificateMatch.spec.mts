import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { evaluateCertificateAssertion } from "./certificateMatch.mjs";
import { evaluateEnhancedCertificateAssertion } from "./enhancedCertificateMatch.mjs";
import {
    CertificateAssertion,
} from "../../modules/CertificateExtensions/CertificateAssertion.ta.mjs";
import {
    EnhancedCertificateAssertion,
} from "../../modules/CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { TBSCertificate } from "../../modules/AuthenticationFramework/TBSCertificate.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Validity } from "../../modules/AuthenticationFramework/Validity.ta.mjs";
import { SubjectPublicKeyInfo } from "../../modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { v3 } from "../../modules/AuthenticationFramework/Version.ta.mjs";
import type { Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import type { Name } from "../../modules/InformationFramework/Name.ta.mjs";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { PolicyInformation } from "../../modules/CertificateExtensions/PolicyInformation.ta.mjs";
import { _encode_CertificatePoliciesSyntax } from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import { _encode_NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { GeneralSubtree } from "../../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { id_ce_certificatePolicies } from "../../modules/CertificateExtensions/id-ce-certificatePolicies.va.mjs";
import { id_ce_nameConstraints } from "../../modules/CertificateExtensions/id-ce-nameConstraints.va.mjs";
import { anyPolicy } from "../../modules/CertificateExtensions/anyPolicy.va.mjs";

const ALG = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const POLICY_A = ObjectIdentifier.fromString("1.2.3.4.5");
const POLICY_B = ObjectIdentifier.fromString("1.2.3.4.6");

function rdn (label: string): AttributeTypeAndValue[] {
    return [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: label }, DER),
        ),
    ];
}

function name (...labels: string[]): Name {
    return { rdnSequence: labels.map(rdn) };
}

function certificate (extensions: Extension[], subject: Name = name("subject")): Certificate {
    const tbs = new TBSCertificate(
        v3,
        new Uint8Array([1]),
        ALG,
        name("issuer"),
        new Validity(
            { generalizedTime: new Date("2020-01-01T00:00:00Z") },
            { generalizedTime: new Date("2030-01-01T00:00:00Z") },
        ),
        subject,
        new SubjectPublicKeyInfo(ALG, new Uint8ClampedArray([0, 0, 0, 0])),
        undefined,
        undefined,
        extensions,
    );
    return new SIGNED(tbs, ALG, new Uint8ClampedArray([0]));
}

function policyExt (...oids: ObjectIdentifier[]): Extension {
    const el = _encode_CertificatePoliciesSyntax(
        oids.map((oid) => new PolicyInformation(oid)),
        DER,
    );
    return new Extension(id_ce_certificatePolicies, false, el.toBytes());
}

function nameConstraintsExt (nc: NameConstraintsSyntax): Extension {
    const el = _encode_NameConstraintsSyntax(nc, DER);
    return new Extension(id_ce_nameConstraints, false, el.toBytes());
}

function directorySubtree (...labels: string[]): GeneralSubtree {
    return new GeneralSubtree({ directoryName: name(...labels) });
}

describe("evaluateCertificateAssertion policy", () => {
    it("requires intersection of asserted and stored policy OIDs", () => {
        const cert = certificate([ policyExt(POLICY_B) ]);
        const policyA = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ POLICY_A ],
        );
        const policyB = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ POLICY_B ],
        );
        expect(evaluateCertificateAssertion(policyA, cert)).toBe(false);
        expect(evaluateCertificateAssertion(policyB, cert)).toBe(true);
    });

    it("matches when either side contains anyPolicy", () => {
        const certSpecific = certificate([ policyExt(POLICY_B) ]);
        const certAny = certificate([ policyExt(anyPolicy) ]);
        const assertAny = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ anyPolicy ],
        );
        const assertA = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ POLICY_A ],
        );
        expect(evaluateCertificateAssertion(assertAny, certSpecific)).toBe(true);
        expect(evaluateCertificateAssertion(assertA, certAny)).toBe(true);
    });
});

describe("evaluateCertificateAssertion name constraints", () => {
    it("matches pathToName only when the name is under the permitted subtree", () => {
        const cert = certificate([
            nameConstraintsExt(new NameConstraintsSyntax([ directorySubtree("root") ])),
        ]);
        const under = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, name("root", "child"),
        );
        const outside = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, name("other"),
        );
        expect(evaluateCertificateAssertion(under, cert)).toBe(true);
        expect(evaluateCertificateAssertion(outside, cert)).toBe(false);
    });

    it("rejects pathToName that falls in an excluded subtree", () => {
        const cert = certificate([
            nameConstraintsExt(new NameConstraintsSyntax(
                undefined,
                [ directorySubtree("root") ],
            )),
        ]);
        const underExcluded = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, name("root", "child"),
        );
        const outside = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, name("other"),
        );
        expect(evaluateCertificateAssertion(underExcluded, cert)).toBe(false);
        expect(evaluateCertificateAssertion(outside, cert)).toBe(true);
    });

    it("applies asserted nameConstraints to the certificate subject in DN order", () => {
        const cert = certificate([], name("root", "child"));
        const permitted = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            new NameConstraintsSyntax([ directorySubtree("root") ]),
        );
        const excluded = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            new NameConstraintsSyntax(undefined, [ directorySubtree("root") ]),
        );
        expect(evaluateCertificateAssertion(permitted, cert)).toBe(true);
        expect(evaluateCertificateAssertion(excluded, cert)).toBe(false);
    });
});

describe("evaluateEnhancedCertificateAssertion", () => {
    it("requires policy intersection like certificateMatch", () => {
        const cert = certificate([ policyExt(POLICY_B) ]);
        const policyA = new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ POLICY_A ],
        );
        const policyB = new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, [ POLICY_B ],
        );
        expect(evaluateEnhancedCertificateAssertion(policyA, cert)).toBe(false);
        expect(evaluateEnhancedCertificateAssertion(policyB, cert)).toBe(true);
    });

    it("fails the match when pathToName is blocked by stored nameConstraints", () => {
        const cert = certificate([
            nameConstraintsExt(new NameConstraintsSyntax(
                undefined,
                [ directorySubtree("root") ],
            )),
        ]);
        const blocked = new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined,
            [{ directoryName: name("root", "child") }],
        );
        const allowed = new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined,
            [{ directoryName: name("other") }],
        );
        expect(evaluateEnhancedCertificateAssertion(blocked, cert)).toBe(false);
        expect(evaluateEnhancedCertificateAssertion(allowed, cert)).toBe(true);
    });
});
