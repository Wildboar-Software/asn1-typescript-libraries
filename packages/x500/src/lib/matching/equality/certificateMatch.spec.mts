import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { certificateMatch, evaluateCertificateAssertion } from "./certificateMatch.mjs";
import { enhancedCertificateMatch, evaluateEnhancedCertificateAssertion } from "./enhancedCertificateMatch.mjs";
import {
    CertificateAssertion,
    _encode_CertificateAssertion,
} from "../../modules/CertificateExtensions/CertificateAssertion.ta.mjs";
import {
    EnhancedCertificateAssertion,
    _encode_EnhancedCertificateAssertion,
} from "../../modules/CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { TBSCertificate } from "../../modules/AuthenticationFramework/TBSCertificate.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Validity } from "../../modules/AuthenticationFramework/Validity.ta.mjs";
import { SubjectPublicKeyInfo } from "../../modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { v3 } from "../../modules/AuthenticationFramework/Version.ta.mjs";
import { type Certificate, _encode_Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
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
import type { GeneralName } from "../../modules/CertificateExtensions/GeneralName.ta.mjs";
import { _encode_GeneralNames } from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import { id_ce_subjectAltName } from "../../modules/CertificateExtensions/id-ce-subjectAltName.va.mjs";
import { caseIgnoreMatch } from "./caseIgnoreMatch.mjs";

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

function subjectAltNames (...names: GeneralName[]): Extension {
    return new Extension(id_ce_subjectAltName, false, _encode_GeneralNames(names, DER).toBytes());
}

function constraintAssertions (nc: NameConstraintsSyntax): [CertificateAssertion, EnhancedCertificateAssertion] {
    return [
        new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, nc,
        ),
        new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, nc,
        ),
    ];
}

function constraintMatches (nc: NameConstraintsSyntax, cert: Certificate): boolean[] {
    const [basic, enhanced] = constraintAssertions(nc);
    return [evaluateCertificateAssertion(basic, cert), evaluateEnhancedCertificateAssertion(enhanced, cert)];
}

describe("certificate name-constraint enforcement (H7)", () => {
    const forms: [string, GeneralName, GeneralName, GeneralName][] = [
        ["DNS", { dNSName: "example.com" }, { dNSName: "www.example.com" }, { dNSName: "www.other.net" }],
        ["email", { rfc822Name: "example.com" }, { rfc822Name: "alice@example.com" }, { rfc822Name: "alice@other.net" }],
        ["IPv4", { iPAddress: new Uint8Array([192, 0, 2, 0, 255, 255, 255, 0]) }, { iPAddress: new Uint8Array([192, 0, 2, 42]) }, { iPAddress: new Uint8Array([198, 51, 100, 42]) }],
        ["URI", { uniformResourceIdentifier: ".example.com" }, { uniformResourceIdentifier: "https://www.example.com/path" }, { uniformResourceIdentifier: "https://other.net/path" }],
        ["OID", { registeredID: ObjectIdentifier.fromString("1.2.3") }, { registeredID: ObjectIdentifier.fromString("1.2.3.4") }, { registeredID: ObjectIdentifier.fromString("1.2.4") }],
        ["DN", { directoryName: name("root") }, { directoryName: name("root", "child") }, { directoryName: name("other") }],
    ];

    it.each(forms)("applies permitted and excluded %s SAN constraints in both matchers", (_label, base, inside, outside) => {
        const permitted = new NameConstraintsSyntax([new GeneralSubtree(base)]);
        const excluded = new NameConstraintsSyntax(undefined, [new GeneralSubtree(base)]);
        // Empty subjects are allowed when subject names are carried in SANs.
        const insideCert = certificate([subjectAltNames(inside)], name());
        const outsideCert = certificate([subjectAltNames(outside)], name());
        expect(constraintMatches(permitted, insideCert)).toEqual([true, true]);
        expect(constraintMatches(permitted, outsideCert)).toEqual([false, false]);
        expect(constraintMatches(excluded, insideCert)).toEqual([false, false]);
        expect(constraintMatches(excluded, outsideCert)).toEqual([true, true]);
    });

    it("treats permitted subtrees as alternatives within each name form", () => {
        const constraints = new NameConstraintsSyntax([
            directorySubtree("root"), directorySubtree("other"),
            new GeneralSubtree({ dNSName: "example.com" }),
            new GeneralSubtree({ dNSName: "other.net" }),
        ]);
        expect(constraintMatches(constraints, certificate([subjectAltNames({ dNSName: "www.other.net" })], name("root", "child")))).toEqual([true, true]);
    });

    it("checks every subject name and lets exclusions override permissions", () => {
        const permitted = [new GeneralSubtree({ dNSName: "example.com" })];
        expect(constraintMatches(new NameConstraintsSyntax(permitted), certificate([
            subjectAltNames({ dNSName: "good.example.com" }, { dNSName: "bad.other.net" }),
        ]))).toEqual([false, false]);
        expect(constraintMatches(new NameConstraintsSyntax(permitted, [new GeneralSubtree({ dNSName: "blocked.example.com" })]), certificate([
            subjectAltNames({ dNSName: "good.example.com" }, { dNSName: "blocked.example.com" }),
        ]))).toEqual([false, false]);
    });

    it("does not impose DNS constraints on an unconstrained email name", () => {
        const constraints = new NameConstraintsSyntax([new GeneralSubtree({ dNSName: "example.com" })]);
        expect(constraintMatches(constraints, certificate([subjectAltNames({ rfc822Name: "alice@other.net" })]))).toEqual([true, true]);
    });

    it("uses the supplied DN equality rules when checking constraints", () => {
        const [basic, enhanced] = constraintAssertions(new NameConstraintsSyntax([directorySubtree("root")]));
        const cert = certificate([], name("ROOT", "child"));
        expect(evaluateCertificateAssertion(basic, cert, () => caseIgnoreMatch)).toBe(true);
        expect(evaluateEnhancedCertificateAssertion(enhanced, cert, () => caseIgnoreMatch)).toBe(true);
    });

    it.each(forms)("checks enhanced pathToName %s names against stored constraints", (_label, base, inside, outside) => {
        const cert = certificate([nameConstraintsExt(new NameConstraintsSyntax([new GeneralSubtree(base)]))]);
        const assertion = (path: GeneralName) => new EnhancedCertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, [path],
        );
        expect(evaluateEnhancedCertificateAssertion(assertion(inside), cert)).toBe(true);
        expect(evaluateEnhancedCertificateAssertion(assertion(outside), cert)).toBe(false);
        const excludedCert = certificate([nameConstraintsExt(new NameConstraintsSyntax(undefined, [new GeneralSubtree(base)]))]);
        expect(evaluateEnhancedCertificateAssertion(assertion(inside), excludedCert)).toBe(false);
    });

    it("supports multiple permitted pathToName DN subtrees", () => {
        const cert = certificate([nameConstraintsExt(new NameConstraintsSyntax([
            directorySubtree("root"), directorySubtree("other"),
        ]))]);
        const assertion = new CertificateAssertion(
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, name("root", "child"),
        );
        expect(evaluateCertificateAssertion(assertion, cert)).toBe(true);
    });

    it("enforces constraints through the public encoded matchers", () => {
        const nc = new NameConstraintsSyntax(undefined, [new GeneralSubtree({ dNSName: "blocked.example.com" })]);
        const [basic, enhanced] = constraintAssertions(nc);
        const stored = new AttributeTypeAndValue(commonName["&id"], _encode_Certificate(certificate([
            subjectAltNames({ dNSName: "blocked.example.com" }),
        ]), DER));
        expect(certificateMatch(_encode_CertificateAssertion(basic, DER), stored)).toBe(false);
        expect(enhancedCertificateMatch(_encode_EnhancedCertificateAssertion(enhanced, DER), stored)).toBe(false);
    });
});

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
