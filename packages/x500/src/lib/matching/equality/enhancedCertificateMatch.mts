import { ASN1Element, FALSE_BIT, type DERElement } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { compareName } from "@wildboar/dn";
import {
    EnhancedCertificateAssertion,
    _decode_EnhancedCertificateAssertion,
} from "../../modules/CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
import {
    type Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
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
import { compareGeneralName } from "@wildboar/gn";
import { getDateFromTime } from "@wildboar/pki-stub";
import { namesWithinNameConstraints } from "./nameConstraints.mjs";
import { Buffer } from "node:buffer";
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
    id_ce_keyUsage,
} from "../../modules/CertificateExtensions/id-ce-keyUsage.va.mjs";
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
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    _decode_PrivateKeyUsagePeriod,
} from "../../modules/CertificateExtensions/PrivateKeyUsagePeriod.ta.mjs";
import {
    _decode_KeyUsage,
} from "../../modules/CertificateExtensions/KeyUsage.ta.mjs";
import {
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import {
    _decode_CertificatePoliciesSyntax,
} from "../../modules/CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import {
    _decode_NameConstraintsSyntax,
} from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    certificateExtensionReader,
    certificatePoliciesIntersect,
} from "./certificateExtensionIndex.mjs";

const SKI_ID = id_ce_subjectKeyIdentifier;
const AKI_ID = id_ce_authorityKeyIdentifier;
const PKUP_ID = id_ce_privateKeyUsagePeriod;
const KU_ID = id_ce_keyUsage;
const SAN_ID = id_ce_subjectAltName;
const CP_ID = id_ce_certificatePolicies;
const NC_ID = id_ce_nameConstraints;
const decodeAKI = _decode_AuthorityKeyIdentifier;
const decodePKUP = _decode_PrivateKeyUsagePeriod;
const decodeKU = _decode_KeyUsage;
const decodeSAN = _decode_GeneralNames;
const decodeCP = _decode_CertificatePoliciesSyntax;
const decodeNC = _decode_NameConstraintsSyntax;
const decodeSKI = (el: DERElement): Uint8Array => el.octetString;
const extensionReader = certificateExtensionReader;
const policiesIntersect = certificatePoliciesIntersect;

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.10 component matching.
 *
 * Same component semantics as `certificateMatch` except
 * `subjectAltName` may include an optional `altNameValue` (match
 * type-only or type-and-value) and `pathToName` is `GeneralNames`
 * (fails if name constraints inhibit a path to any presented name).
 * At least one assertion component shall be present.
 */
export
function evaluateEnhancedCertificateAssertion (
    assertion: EnhancedCertificateAssertion,
    value: Certificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    if (ASN1Element.isElement(value)) {
        return evaluateEnhancedCertificateAssertion(
            assertion,
            _decode_Certificate(value),
            getMatcher,
            flags,
        );
    }
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const tbs = value.toBeSigned;
    if (assertion.serialNumber && Buffer.compare(assertion.serialNumber, tbs.serialNumber)) {
        return false;
    }
    if (assertion.issuer && !compareName(assertion.issuer, tbs.issuer, getEqualityMatcher)) {
        return false;
    }
    const ext = extensionReader(tbs.extensions);
    if (assertion.subjectKeyIdentifier) {
        const ski = ext(SKI_ID, decodeSKI);
        if (!ski || Buffer.compare(ski, assertion.subjectKeyIdentifier)) {
            return false;
        }
    }
    if (assertion.authorityKeyIdentifier) {
        const storedAKI = ext(AKI_ID, decodeAKI);
        if (!storedAKI || !compareAuthorityKeyIdentifier(assertion.authorityKeyIdentifier, storedAKI)) {
            return false;
        }
    }

    const timeTol = (flags & MATCH_FLAG_APPROXIMATE) ? 1000 : 0;

    if (assertion.certificateValid) {
        const queriedTime: Date = getDateFromTime(assertion.certificateValid);
        const storedNotBefore: Date = getDateFromTime(tbs.validity.notBefore);
        const storedNotAfter: Date = getDateFromTime(tbs.validity.notAfter);
        if (
            (queriedTime.valueOf() < storedNotBefore.valueOf() - timeTol)
            || (queriedTime.valueOf() > storedNotAfter.valueOf() + timeTol)
        ) {
            return false;
        }
    }

    if (assertion.privateKeyValid) {
        const pkup = ext(PKUP_ID, decodePKUP);
        if (pkup) {
            if (
                pkup.notBefore
                && (assertion.privateKeyValid.valueOf() < pkup.notBefore.valueOf() - timeTol)
            ) {
                return false;
            }
            if (
                pkup.notAfter
                && (assertion.privateKeyValid.valueOf() > pkup.notAfter.valueOf() + timeTol)
            ) {
                return false;
            }
        }
    }

    if (assertion.subjectPublicKeyAlgID) {
        if (!assertion.subjectPublicKeyAlgID.isEqualTo(tbs.subjectPublicKeyInfo.algorithm.algorithm)) {
            return false;
        }
    }

    if (assertion.keyUsage) {
        const storedKU = ext(KU_ID, decodeKU);
        if (storedKU && !assertion.keyUsage.every((ku: number, index: number): boolean => (
            (ku === FALSE_BIT)
            || Boolean(storedKU[index])
        ))) {
            return false;
        }
    }

    const subjectAltName = assertion.subjectAltName;
    if (subjectAltName) {
        const sans = ext(SAN_ID, decodeSAN);
        if (!sans) {
            return false;
        }
        const altNameValue = subjectAltName.altNameValue;
        if (altNameValue) {
            if (!sans.some((san): boolean => compareGeneralName(san, altNameValue, getEqualityMatcher))) {
                return false;
            }
        } else if ("builtinNameForm" in subjectAltName.altnameType) {
            const altNameType: number = subjectAltName.altnameType.builtinNameForm;
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
                if (!sans.some((san): boolean => ("registeredID" in san))) {
                    return false;
                }
                break;
            }
            default: {
                if (flags & MATCH_FLAG_DEBUG) {
                    console.error(
                        `@wildboar/x500: debug: enhancedCertificateMatch: unrecognized builtinNameForm ${altNameType}`,
                    );
                }
                return false;
            }
            }
        } else if ("otherNameForm" in subjectAltName.altnameType) {
            const otherName = subjectAltName.altnameType.otherNameForm;
            if (!sans.some((san): boolean => {
                if (!("otherName" in san)) {
                    return false;
                }
                const directReference = san.otherName.directReference;
                return !!directReference && directReference.isEqualTo(otherName);
            })) {
                return false;
            }
        } else {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    "@wildboar/x500: debug: enhancedCertificateMatch: unrecognized AltNameType alternative",
                );
            }
            return false;
        }
    }

    if (assertion.policy) {
        const cp = ext(CP_ID, decodeCP);
        if (!cp || !policiesIntersect(assertion.policy, cp)) {
            return false;
        }
    }

    if (assertion.pathToName) {
        const nc = ext(NC_ID, decodeNC);
        if (nc && !namesWithinNameConstraints(assertion.pathToName, nc, getEqualityMatcher)) {
            return false;
        }
    }

    if (assertion.subject) {
        if (!compareName(assertion.subject, tbs.subject, getEqualityMatcher)) {
            return false;
        }
    }

    if (assertion.nameConstraints) {
        const sans = ext(SAN_ID, decodeSAN);
        if (!namesWithinNameConstraints([
            ...(tbs.subject.rdnSequence.length ? [{ directoryName: tbs.subject }] : []),
            ...(sans ?? []),
        ], assertion.nameConstraints, getEqualityMatcher)) {
            return false;
        }
    }

    return true;
}

/**
 * `enhancedCertificateMatch` on a decoded assertion and certificate.
 * Alias of {@link evaluateEnhancedCertificateAssertion}.
 */
evaluateEnhancedCertificateAssertion satisfies TypedEquationFunction<EnhancedCertificateAssertion>;

export const enhancedCertificateMatchTyped: typeof evaluateEnhancedCertificateAssertion = evaluateEnhancedCertificateAssertion;

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.10
 * `enhancedCertificateMatch`.
 *
 * More precise certificate selection than `certificateMatch`. TRUE
 * iff all presented `EnhancedCertificateAssertion` components
 * match as described by
 * {@link evaluateEnhancedCertificateAssertion}. Multiple
 * assertions may be combined in a search filter with AND/OR.
 */
export
const enhancedCertificateMatch: Matcher = createEqualityMatcher(
    _decode_EnhancedCertificateAssertion,
    evaluateEnhancedCertificateAssertion,
    undefined,
    true,
);

export default enhancedCertificateMatch;
