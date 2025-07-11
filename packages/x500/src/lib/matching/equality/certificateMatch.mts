import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, DERElement, FALSE_BIT, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import compareName from "../../comparators/compareName.mjs";
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
} from "../../modules/CertificateExtensions/CertificateAssertion.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_subjectKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-subjectKeyIdentifier.va.mjs";
import {
    id_ce_authorityKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import {
    id_ce_privateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/id-ce-privateKeyUsagePeriod.va.mjs";
import {
    id_ce_subjectAltName,
} from "../../modules/CertificateExtensions/id-ce-subjectAltName.va.mjs";
import {
    id_ce_certificatePolicies,
} from "../../modules/CertificateExtensions/id-ce-certificatePolicies.va.mjs";
import {
    id_ce_nameConstraints,
} from "../../modules/CertificateExtensions/id-ce-nameConstraints.va.mjs";
import {
    id_ce_keyUsage,
} from "../../modules/CertificateExtensions/id-ce-keyUsage.va.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    PrivateKeyUsagePeriod,
    _decode_PrivateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/PrivateKeyUsagePeriod.ta.mjs";
import {
    KeyUsage,
    _decode_KeyUsage,
} from "../../modules/CertificateExtensions/KeyUsage.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import {
    AltNameType_builtinNameForm_rfc822Name,
    AltNameType_builtinNameForm_dNSName,
    AltNameType_builtinNameForm_x400Address,
    AltNameType_builtinNameForm_directoryName,
    AltNameType_builtinNameForm_ediPartyName,
    AltNameType_builtinNameForm_uniformResourceIdentifier,
    AltNameType_builtinNameForm_iPAddress,
    AltNameType_builtinNameForm_registeredId,
} from "../../modules/CertificateExtensions/AltNameType-builtinNameForm.ta.mjs";
import compareAuthorityKeyIdentifier from "../../comparators/compareAuthorityKeyIdentifier.mjs";
import getDateFromTime from "../../utils/getDateFromTime.mjs";
import {
    CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    anyPolicy,
} from "../../modules/CertificateExtensions/anyPolicy.va.mjs";
import dnWithinSubtree from "../../utils/dnWithinSubtree.mjs";

const AKI_OID: string = id_ce_authorityKeyIdentifier.toString();
const SKI_OID: string = id_ce_subjectKeyIdentifier.toString();
const PKUP_OID: string = id_ce_privateKeyUsagePeriod.toString();
const KU_OID: string = id_ce_keyUsage.toString();
const SAN_OID: string = id_ce_subjectAltName.toString();
const CP_OID: string = id_ce_certificatePolicies.toString();
const NC_OID: string = id_ce_nameConstraints.toString();
const ANY_POLICY_OID: string = anyPolicy.toString();

export
function evaluateCertificateAssertion (
    assertion: CertificateAssertion,
    value: Certificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const tbs = value.toBeSigned;
    if (assertion.serialNumber && Buffer.compare(assertion.serialNumber, tbs.serialNumber)) {
        return false;
    }
    if (assertion.issuer && !compareName(assertion.issuer, tbs.issuer, getEqualityMatcher)) {
        return false;
    }
    if (assertion.subjectKeyIdentifier) {
        const ski: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_subjectKeyIdentifier)));
        if (!ski) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(ski.extnValue);
        if (Buffer.compare(el.octetString, assertion.subjectKeyIdentifier)) {
            return false;
        }
    }
    if (assertion.authorityKeyIdentifier) {
        const aki: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_authorityKeyIdentifier)));
        if (!aki) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(aki.extnValue);
        const storedAKI: AuthorityKeyIdentifier = _decode_AuthorityKeyIdentifier(el);
        if (!compareAuthorityKeyIdentifier(assertion.authorityKeyIdentifier, storedAKI)) {
            return false;
        }
    }

    if (assertion.certificateValid) {
        const queriedTime: Date = getDateFromTime(assertion.certificateValid);
        const storedNotBefore: Date = getDateFromTime(tbs.validity.notBefore);
        const storedNotAfter: Date = getDateFromTime(tbs.validity.notAfter);
        if (
            (queriedTime.valueOf() < storedNotBefore.valueOf())
            || (queriedTime.valueOf() > storedNotAfter.valueOf())
        ) {
            return false;
        }
    }

    if (assertion.privateKeyValid) {
        const pkupExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_privateKeyUsagePeriod)));
        if (pkupExt) {
            const el: DERElement = new DERElement();
            el.fromBytes(pkupExt.extnValue);
            const pkup: PrivateKeyUsagePeriod = _decode_PrivateKeyUsagePeriod(el);
            if (
                pkup.notBefore
                && (assertion.privateKeyValid.valueOf() < pkup.notBefore.valueOf())
            ) {
                return false;
            }
            if (
                pkup.notAfter
                && (assertion.privateKeyValid.valueOf() > pkup.notAfter.valueOf())
            ) {
                return false;
            }
        }
    }

    if (assertion.subjectPublicKeyAlgID) {
        if (assertion.subjectPublicKeyAlgID.toString() !== tbs.subjectPublicKeyInfo.algorithm.algorithm.toString()) {
            return false;
        }
    }

    if (assertion.keyUsage) {
        const kuExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_keyUsage)));
        if (!kuExt) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(kuExt.extnValue);
        const storedKU: KeyUsage = _decode_KeyUsage(el);
        if (!assertion.keyUsage.every((ku: number, index: number): boolean => (
            (ku === FALSE_BIT)
            || Boolean(storedKU[index])
        ))) {
            return false;
        }
    }

    if (assertion.subjectAltName) {
        const sanExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_subjectAltName)));
        if (!sanExt) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(sanExt.extnValue);
        const sans: GeneralNames = _decode_GeneralNames(el);
        if ("builtinNameForm" in assertion.subjectAltName) {
            const altNameType: number = assertion.subjectAltName.builtinNameForm;
            switch (altNameType) {
            case (AltNameType_builtinNameForm_rfc822Name as number): {
                if (!sans.some((san): boolean => ("rfc822Name" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_dNSName as number): {
                if (!sans.some((san): boolean => ("dNSName" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_x400Address as number): {
                if (!sans.some((san): boolean => ("x400Address" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_directoryName as number): {
                if (!sans.some((san): boolean => ("directoryName" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_ediPartyName as number): {
                if (!sans.some((san): boolean => ("ediPartyName" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_uniformResourceIdentifier as number): {
                if (!sans.some((san): boolean => ("uniformResourceIdentifier" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_iPAddress as number): {
                if (!sans.some((san): boolean => ("iPAddress" in san))) {
                    return false;
                }
                break;
            }
            case (AltNameType_builtinNameForm_registeredId as number): {
                if (!sans.some((san): boolean => ("registeredId" in san))) {
                    return false;
                }
                break;
            }
            }
        } else if ("otherNameForm" in assertion.subjectAltName) {
            if (!sans.some((san): boolean => {
                if (!("otherNameForm" in assertion.subjectAltName)) {
                    return false;
                }
                if (!("otherName" in san)) {
                    return false;
                }
                return (san.otherName.directReference.isEqualTo(assertion.subjectAltName.otherNameForm));
            })) {
                return false;
            }
        } else {
            return false;
        }
    }

    if (assertion.policy) {
        const cpExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_certificatePolicies)));
        if (!cpExt) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(cpExt.extnValue);
        const cp: CertificatePoliciesSyntax = _decode_CertificatePoliciesSyntax(el);
        const policiesHad: Set<string> = new Set<string>(
            cp.map((policy) => policy.policyIdentifier.toString()),
        );
        if ( // We only need to check if either the stored or presented policies do not have anyPolicy.
            !policiesHad.has(ANY_POLICY_OID)
            && assertion.policy.some((policy) => (policy.isEqualTo(anyPolicy)))
        ) {
            if (!assertion.policy.some((policy): boolean => (policiesHad.has(policy.toString())))) {
                return false;
            }
        }
    }

    if (assertion.pathToName) {
        const ncExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_nameConstraints)));
        if (ncExt) {
            const el: DERElement = new DERElement();
            el.fromBytes(ncExt.extnValue);
            const nc: NameConstraintsSyntax = _decode_NameConstraintsSyntax(el);
            if (nc.excludedSubtrees.some((sub): boolean => {
                if (!("directoryName" in sub.base)) {
                    return false;
                }
                return dnWithinSubtree(
                    sub.base.directoryName.rdnSequence,
                    assertion.pathToName.rdnSequence,
                    (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                    (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                );
            })) {
                return false;
            }
            if (!nc.permittedSubtrees.every((sub): boolean => {
                if (!("directoryName" in sub.base)) {
                    return true;
                }
                return dnWithinSubtree(
                    sub.base.directoryName.rdnSequence,
                    assertion.pathToName.rdnSequence,
                    (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                    (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                );
            })) {
                return false;
            }
        }
    }

    if (assertion.subject) {
        if (!compareName(assertion.subject, tbs.subject, getEqualityMatcher)) {
            return false;
        }
    }

    if (assertion.nameConstraints) {
        const nc = assertion.nameConstraints;
        if (nc.excludedSubtrees.some((sub): boolean => {
            if (!("directoryName" in sub.base)) {
                return false;
            }
            return dnWithinSubtree(
                sub.base.directoryName.rdnSequence,
                tbs.subject.rdnSequence,
                (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
            );
        })) {
            return false;
        }
        if (!nc.permittedSubtrees.every((sub): boolean => {
            if (!("directoryName" in sub.base)) {
                return true;
            }
            return dnWithinSubtree(
                sub.base.directoryName.rdnSequence,
                tbs.subject.rdnSequence,
                (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
            );
        })) {
            return false;
        }

        const sanExt: Extension | undefined = tbs.extensions
            .find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_subjectAltName)));
        if (sanExt) {
            const el: DERElement = new DERElement();
            el.fromBytes(sanExt.extnValue);
            const sans: GeneralNames = _decode_GeneralNames(el);
            if (!sans.every((san): boolean => {
                if (nc.excludedSubtrees.some((sub): boolean => {
                    if (!("directoryName" in sub.base)) {
                        return false;
                    }
                    if (!("directoryName" in san)) {
                        return false;
                    }
                    return dnWithinSubtree(
                        sub.base.directoryName.rdnSequence,
                        san.directoryName.rdnSequence,
                        (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                        (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                    );
                })) {
                    return false;
                }
                if (!nc.permittedSubtrees.every((sub): boolean => {
                    if (!("directoryName" in sub.base)) {
                        return true;
                    }
                    if (!("directoryName" in san)) {
                        return true;
                    }
                    return dnWithinSubtree(
                        sub.base.directoryName.rdnSequence,
                        san.directoryName.rdnSequence,
                        (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                        (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                    );
                })) {
                    return false;
                }
                return true;
            })) {
                return false;
            }
        }
    }

    return true;
}

export
const certificateMatch : EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: CertificateAssertion = _decode_CertificateAssertion(assertion);
    const v: Certificate = _decode_Certificate(value);
    return evaluateCertificateAssertion(a, v);
}

export default certificateMatch;
