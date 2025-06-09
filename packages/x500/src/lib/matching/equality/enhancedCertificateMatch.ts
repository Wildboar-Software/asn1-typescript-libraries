import type EqualityMatcher from "../../types/EqualityMatcher.js";
import { ASN1Element, DERElement, FALSE_BIT, OBJECT_IDENTIFIER } from "asn1-ts";
import compareName from "../../comparators/compareName.js";
import {
    EnhancedCertificateAssertion,
    _decode_EnhancedCertificateAssertion,
} from "../../modules/CertificateExtensions/EnhancedCertificateAssertion.ta.js";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.js";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.js";
import {
    id_ce_subjectKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-subjectKeyIdentifier.va.js";
import {
    id_ce_authorityKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.js";
import {
    id_ce_privateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/id-ce-privateKeyUsagePeriod.va.js";
import {
    id_ce_subjectAltName,
} from "../../modules/CertificateExtensions/id-ce-subjectAltName.va.js";
import {
    id_ce_certificatePolicies,
} from "../../modules/CertificateExtensions/id-ce-certificatePolicies.va.js";
import {
    id_ce_nameConstraints,
} from "../../modules/CertificateExtensions/id-ce-nameConstraints.va.js";
import {
    id_ce_keyUsage,
} from "../../modules/CertificateExtensions/id-ce-keyUsage.va.js";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.js";
import {
    PrivateKeyUsagePeriod,
    _decode_PrivateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/PrivateKeyUsagePeriod.ta.js";
import {
    KeyUsage,
    _decode_KeyUsage,
} from "../../modules/CertificateExtensions/KeyUsage.ta.js";
import {
    GeneralNames,
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.js";
import {
    AltNameType_builtinNameForm_rfc822Name,
    AltNameType_builtinNameForm_dNSName,
    AltNameType_builtinNameForm_x400Address,
    AltNameType_builtinNameForm_directoryName,
    AltNameType_builtinNameForm_ediPartyName,
    AltNameType_builtinNameForm_uniformResourceIdentifier,
    AltNameType_builtinNameForm_iPAddress,
    AltNameType_builtinNameForm_registeredId,
} from "../../modules/CertificateExtensions/AltNameType.ta.js";
import compareAuthorityKeyIdentifier from "../../comparators/compareAuthorityKeyIdentifier.js";
import compareGeneralName from "../../comparators/compareGeneralName.js";
import getDateFromTime from "../../utils/getDateFromTime.js";
import {
    CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.js";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.js";
import {
    anyPolicy,
} from "../../modules/CertificateExtensions/anyPolicy.va.js";
import dnWithinSubtree from "../../utils/dnWithinSubtree.js";
import compareGeneralNames from "../../comparators/compareGeneralNames.js";

const AKI_OID: string = id_ce_authorityKeyIdentifier.toString();
const SKI_OID: string = id_ce_subjectKeyIdentifier.toString();
const PKUP_OID: string = id_ce_privateKeyUsagePeriod.toString();
const KU_OID: string = id_ce_keyUsage.toString();
const SAN_OID: string = id_ce_subjectAltName.toString();
const CP_OID: string = id_ce_certificatePolicies.toString();
const NC_OID: string = id_ce_nameConstraints.toString();
const ANY_POLICY_OID: string = anyPolicy.toString();

export
function evaluateEnhancedCertificateAssertion (
    assertion: EnhancedCertificateAssertion,
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
        if (assertion.subjectAltName.altNameValue) {
            if (!sans.some((san): boolean => compareGeneralName(san, assertion.subjectAltName.altNameValue, getEqualityMatcher))) {
                return false;
            }
        } else if ("builtinNameForm" in assertion.subjectAltName.altnameType) {
            const altNameType: number = assertion.subjectAltName.altnameType.builtinNameForm;
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
        } else if ("otherNameForm" in assertion.subjectAltName.altnameType) {
            if (!sans.some((san): boolean => {
                if (!("otherNameForm" in assertion.subjectAltName.altnameType)) {
                    return false;
                }
                const otherName: OBJECT_IDENTIFIER = assertion.subjectAltName.altnameType.otherNameForm;
                if (!("otherName" in san)) {
                    return false;
                }
                return (san.otherName.directReference.isEqualTo(otherName));
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

            assertion.pathToName.every((path) => {
                if (!("directoryName" in path)) {
                    return true;
                }
                if (nc.excludedSubtrees.some((sub): boolean => {
                    if (!("directoryName" in sub.base)) {
                        return false;
                    }
                    return dnWithinSubtree(
                        sub.base.directoryName.rdnSequence,
                        path.directoryName.rdnSequence,
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
                        path.directoryName.rdnSequence,
                        (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                        (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                    );
                })) {
                    return false;
                }
                return true;
            });


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
const enhancedCertificateMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: EnhancedCertificateAssertion = _decode_EnhancedCertificateAssertion(assertion);
    const v: Certificate = _decode_Certificate(value);
    return evaluateEnhancedCertificateAssertion(a, v);
}

export default enhancedCertificateMatch;
