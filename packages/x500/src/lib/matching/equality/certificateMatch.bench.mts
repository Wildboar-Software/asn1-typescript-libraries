// Run with `npx vitest bench --run src/lib/matching/equality/certificateMatch.bench.mts`
// from packages/x500.
import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { Buffer } from "node:buffer";
import { describe, expect, test } from "vitest";
import { evaluateCertificateAssertion } from "./certificateMatch.mjs";
import {
    CertificateExtensionIndex,
    certificatePoliciesIntersect,
} from "./certificateExtensionIndex.mjs";
import {
    CertificateAssertion,
} from "../../modules/CertificateExtensions/CertificateAssertion.ta.mjs";
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
import {
    type CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import { _encode_NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { GeneralSubtree } from "../../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { id_ce_certificatePolicies } from "../../modules/CertificateExtensions/id-ce-certificatePolicies.va.mjs";
import { id_ce_nameConstraints } from "../../modules/CertificateExtensions/id-ce-nameConstraints.va.mjs";
import { id_ce_subjectAltName } from "../../modules/CertificateExtensions/id-ce-subjectAltName.va.mjs";
import { id_ce_keyUsage } from "../../modules/CertificateExtensions/id-ce-keyUsage.va.mjs";
import { id_ce_subjectKeyIdentifier } from "../../modules/CertificateExtensions/id-ce-subjectKeyIdentifier.va.mjs";
import { id_ce_authorityKeyIdentifier } from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import { id_ce_privateKeyUsagePeriod } from "../../modules/CertificateExtensions/id-ce-privateKeyUsagePeriod.va.mjs";
import { anyPolicy } from "../../modules/CertificateExtensions/anyPolicy.va.mjs";
import {
    type GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import {
    type KeyUsage,
    KeyUsage_digitalSignature,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../../modules/CertificateExtensions/KeyUsage.ta.mjs";
import {
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import dnWithinSubtree from "../../utils/dnWithinSubtree.mjs";
import { AltNameType_builtinNameForm_dNSName } from "../../modules/CertificateExtensions/AltNameType-builtinNameForm.ta.mjs";

const BEFORE = "before: find + re-decode + oid.toString()";
const AFTER = "after: index once + isEqualTo";

const ALG = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const POLICY_B = ObjectIdentifier.fromString("1.2.3.4.6");
const ANY_POLICY_OID = anyPolicy.toString();

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

function dummyExt (n: number): Extension {
    return new Extension(
        ObjectIdentifier.fromParts([ 1, 2, 840, 113549, 1, 9, 14, n ]),
        false,
        new Uint8Array([ 5, 0 ]),
    );
}

/**
 * The previous `policy` component: `Set` of `oid.toString()`.
 */
function policiesViaToString (
    asserted: ObjectIdentifier[],
    stored: CertificatePoliciesSyntax,
): boolean {
    const policiesHad: Set<string> = new Set(
        stored.map((policy) => policy.policyIdentifier.toString()),
    );
    const assertionHasAnyPolicy = asserted.some((policy) => policy.isEqualTo(anyPolicy));
    return policiesHad.has(ANY_POLICY_OID)
        || assertionHasAnyPolicy
        || asserted.some((policy) => policiesHad.has(policy.toString()));
}

function findExt (extensions: Extension[] | undefined, oid: ObjectIdentifier): Extension | undefined {
    return extensions?.find((ext) => ext.extnId.isEqualTo(oid));
}

function decodeExt<T> (ext: Extension, decoder: (el: DERElement) => T): T {
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    return decoder(el);
}

/**
 * The previous certificateMatch extension path: `.find` and re-decode
 * for every asserted component, including a second SAN decode for
 * `nameConstraints`.
 */
function evaluateByFindAndToString (
    assertion: CertificateAssertion,
    cert: Certificate,
): boolean {
    const tbs = cert.toBeSigned;
    const extensions = tbs.extensions;
    if (assertion.subjectKeyIdentifier) {
        const ski = findExt(extensions, id_ce_subjectKeyIdentifier);
        if (!ski) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(ski.extnValue);
        if (Buffer.compare(el.octetString, assertion.subjectKeyIdentifier)) {
            return false;
        }
    }
    if (assertion.keyUsage) {
        const kuExt = findExt(extensions, id_ce_keyUsage);
        if (!kuExt) {
            return false;
        }
        const storedKU: KeyUsage = decodeExt(kuExt, _decode_KeyUsage);
        if (!assertion.keyUsage.every((bit, i) => !bit || Boolean(storedKU[i]))) {
            return false;
        }
    }
    if (assertion.subjectAltName) {
        const sanExt = findExt(extensions, id_ce_subjectAltName);
        if (!sanExt) {
            return false;
        }
        const sans: GeneralNames = decodeExt(sanExt, _decode_GeneralNames);
        if (!sans.some((san) => ("dNSName" in san))) {
            return false;
        }
    }
    if (assertion.policy) {
        const cpExt = findExt(extensions, id_ce_certificatePolicies);
        if (!cpExt) {
            return false;
        }
        const cp = decodeExt(cpExt, _decode_CertificatePoliciesSyntax);
        if (!policiesViaToString(assertion.policy, cp)) {
            return false;
        }
    }
    if (assertion.pathToName) {
        const ncExt = findExt(extensions, id_ce_nameConstraints);
        if (ncExt) {
            const nc = decodeExt(ncExt, _decode_NameConstraintsSyntax);
            if (nc.permittedSubtrees && !nc.permittedSubtrees.every((sub) => {
                if (!("directoryName" in sub.base)) {
                    return true;
                }
                return dnWithinSubtree(
                    assertion.pathToName!.rdnSequence,
                    sub.base.directoryName.rdnSequence,
                );
            })) {
                return false;
            }
        }
    }
    if (assertion.nameConstraints) {
        const sanExt = findExt(extensions, id_ce_subjectAltName);
        if (sanExt) {
            decodeExt(sanExt, _decode_GeneralNames);
        }
    }
    return true;
}

const policyParts = Array.from({ length: 32 }, (_, i) => [ 1, 2, 3, 4, i + 1 ]);

function freshPolicies (): CertificatePoliciesSyntax {
    return policyParts.map((parts) => new PolicyInformation(ObjectIdentifier.fromParts(parts)));
}

function freshAsserted (): ObjectIdentifier[] {
    return [
        ObjectIdentifier.fromParts([ 1, 2, 3, 4, 32 ]),
        ObjectIdentifier.fromParts([ 1, 2, 3, 4, 31 ]),
    ];
}

const filler = Array.from({ length: 64 }, (_, i) => dummyExt(i + 1));
const skiBytes = new Uint8Array([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]);
const skiEl = new DERElement();
skiEl.octetString = skiBytes;
const kuBits = new Uint8ClampedArray(9);
kuBits[KeyUsage_digitalSignature] = 1;
const san: GeneralNames = Array.from({ length: 20 }, (_, i) => ({ dNSName: `host${i}.example.com` }));
const cert = certificate([
    ...filler,
    new Extension(id_ce_subjectKeyIdentifier, false, skiEl.toBytes()),
    new Extension(id_ce_authorityKeyIdentifier, false, new Uint8Array([ 0x30, 0x00 ])),
    new Extension(id_ce_privateKeyUsagePeriod, false, new Uint8Array([ 0x30, 0x00 ])),
    new Extension(id_ce_keyUsage, false, _encode_KeyUsage(kuBits, DER).toBytes()),
    new Extension(id_ce_subjectAltName, false, _encode_GeneralNames(san, DER).toBytes()),
    policyExt(POLICY_B, ...policyParts.map((parts) => ObjectIdentifier.fromParts(parts))),
    nameConstraintsExt(new NameConstraintsSyntax([ directorySubtree("root") ])),
], name("root", "child"));

const assertion = new CertificateAssertion(
    undefined,
    undefined,
    skiBytes,
    undefined,
    undefined,
    undefined,
    undefined,
    kuBits,
    { builtinNameForm: AltNameType_builtinNameForm_dNSName },
    [ POLICY_B ],
    name("root", "child"),
    undefined,
    new NameConstraintsSyntax([ directorySubtree("root") ]),
);

const localIntersect = certificatePoliciesIntersect;
const localEvaluate = evaluateCertificateAssertion;
const localFindEvaluate = evaluateByFindAndToString;
const LocalIndex = CertificateExtensionIndex;
const localDecodeGeneralNames = _decode_GeneralNames;
const localSanOid = id_ce_subjectAltName;

let sink = 0;

describe("certificatePoliciesIntersect vs oid.toString() Set", () => {
    test("32 fresh stored policies, last asserted matches", async ({ bench }) => {
        expect(policiesViaToString(freshAsserted(), freshPolicies())).toBe(true);
        expect(localIntersect(freshAsserted(), freshPolicies())).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += policiesViaToString(freshAsserted(), freshPolicies()) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localIntersect(freshAsserted(), freshPolicies()) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

describe("certificateMatch extension lookup", () => {
    test("SKI + keyUsage + SAN + policy + nameConstraints after 64 filler extensions", async ({ bench }) => {
        expect(localFindEvaluate(assertion, cert)).toBe(true);
        expect(localEvaluate(assertion, cert)).toBe(true);
        const result = await bench.compare(
            bench(BEFORE, () => {
                sink += localFindEvaluate(assertion, cert) ? 1 : 0;
            }),
            bench(AFTER, () => {
                sink += localEvaluate(assertion, cert) ? 1 : 0;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

describe("CertificateExtensionIndex SAN decode-once", () => {
    test("20 SAN names decoded twice vs once", async ({ bench }) => {
        const extensions = cert.toBeSigned.extensions!;
        const sanExt = findExt(extensions, localSanOid)!;
        expect(decodeExt(sanExt, localDecodeGeneralNames)).toHaveLength(20);
        expect(new LocalIndex(extensions).subjectAltName).toHaveLength(20);
        const result = await bench.compare(
            bench(BEFORE, () => {
                decodeExt(sanExt, localDecodeGeneralNames);
                decodeExt(sanExt, localDecodeGeneralNames);
                sink += 1;
            }),
            bench(AFTER, () => {
                decodeExt(sanExt, localDecodeGeneralNames);
                sink += 1;
            }),
        );
        expect(result.get(AFTER)).toBeFasterThan(result.get(BEFORE));
    });
});

export { sink };
