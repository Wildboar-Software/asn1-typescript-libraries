import { ASN1Element, FALSE_BIT } from "@wildboar/asn1";
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
    CertificateAssertion,
    _decode_CertificateAssertion,
} from "../../modules/CertificateExtensions/CertificateAssertion.ta.mjs";
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
import { getDateFromTime } from "@wildboar/pki-stub";
import dnWithinSubtree from "../../utils/dnWithinSubtree.mjs";
import { Buffer } from "node:buffer";
import {
    CertificateExtensionIndex,
    certificatePoliciesIntersect,
} from "./certificateExtensionIndex.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.2 component matching.
 *
 * TRUE if every present `CertificateAssertion` component matches
 * the corresponding part of `cert`. Absent assertion components
 * are ignored. Extension-based components fail if the extension is
 * missing where the spec requires it (e.g. subject key identifier,
 * certificate policies). `keyUsage` and `privateKeyValid` succeed
 * if the corresponding extension is absent. `policy` also succeeds
 * if either side contains `anyPolicy`. `pathToName` fails if name
 * constraints inhibit a path to the presented name.
 */
export
function evaluateCertificateAssertion (
    assertion: CertificateAssertion,
    value: Certificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    if (ASN1Element.isElement(value)) {
        return evaluateCertificateAssertion(
            assertion,
            _decode_Certificate(value),
            getMatcher,
            flags,
        );
    }
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const tbs = value.toBeSigned;
    const extensions = new CertificateExtensionIndex(tbs.extensions);
    if (assertion.serialNumber && Buffer.compare(assertion.serialNumber, tbs.serialNumber)) {
        return false;
    }
    if (assertion.issuer && !compareName(assertion.issuer, tbs.issuer, getEqualityMatcher)) {
        return false;
    }
    if (assertion.subjectKeyIdentifier) {
        const ski = extensions.subjectKeyIdentifier;
        if (!ski || Buffer.compare(ski, assertion.subjectKeyIdentifier)) {
            return false;
        }
    }
    if (assertion.authorityKeyIdentifier) {
        const storedAKI = extensions.authorityKeyIdentifier;
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
        const pkup = extensions.privateKeyUsagePeriod;
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
        const storedKU = extensions.keyUsage;
        if (!storedKU) {
            return false;
        }
        if (!assertion.keyUsage.every((ku: number, index: number): boolean => (
            (ku === FALSE_BIT)
            || Boolean(storedKU[index])
        ))) {
            return false;
        }
    }

    const subjectAltName = assertion.subjectAltName;
    if (subjectAltName) {
        const sans = extensions.subjectAltName;
        if (!sans) {
            return false;
        }
        if ("builtinNameForm" in subjectAltName) {
            const altNameType: number = subjectAltName.builtinNameForm;
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
            default: {
                if (flags & MATCH_FLAG_DEBUG) {
                    console.error(
                        `@wildboar/x500: debug: certificateMatch: unrecognized builtinNameForm ${altNameType}`,
                    );
                }
                return false;
            }
            }
        } else if ("otherNameForm" in subjectAltName) {
            const otherNameForm = subjectAltName.otherNameForm;
            if (!sans.some((san): boolean => {
                if (!("otherName" in san)) {
                    return false;
                }
                const directReference = san.otherName.directReference;
                return !!directReference && directReference.isEqualTo(otherNameForm);
            })) {
                return false;
            }
        } else {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    "@wildboar/x500: debug: certificateMatch: unrecognized AltNameType alternative",
                );
            }
            return false;
        }
    }

    if (assertion.policy) {
        const cp = extensions.certificatePolicies;
        if (!cp || !certificatePoliciesIntersect(assertion.policy, cp)) {
            return false;
        }
    }

    const pathToName = assertion.pathToName;
    if (pathToName) {
        const nc = extensions.nameConstraints;
        if (nc) {
            if (nc.excludedSubtrees?.some((sub): boolean => {
                if (!("directoryName" in sub.base)) {
                    return false;
                }
                return dnWithinSubtree(
                    pathToName.rdnSequence,
                    sub.base.directoryName.rdnSequence,
                    (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                    (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                );
            })) {
                return false;
            }
            if (nc.permittedSubtrees && !nc.permittedSubtrees.every((sub): boolean => {
                if (!("directoryName" in sub.base)) {
                    return true;
                }
                return dnWithinSubtree(
                    pathToName.rdnSequence,
                    sub.base.directoryName.rdnSequence,
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
        if (nc.excludedSubtrees?.some((sub): boolean => {
            if (!("directoryName" in sub.base)) {
                return false;
            }
            return dnWithinSubtree(
                tbs.subject.rdnSequence,
                sub.base.directoryName.rdnSequence,
                (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
            );
        })) {
            return false;
        }
        if (nc.permittedSubtrees && !nc.permittedSubtrees.every((sub): boolean => {
            if (!("directoryName" in sub.base)) {
                return true;
            }
            return dnWithinSubtree(
                tbs.subject.rdnSequence,
                sub.base.directoryName.rdnSequence,
                (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
            );
        })) {
            return false;
        }

        const sans = extensions.subjectAltName;
        if (sans) {
            if (!sans.every((san): boolean => {
                if (nc.excludedSubtrees?.some((sub): boolean => {
                    if (!("directoryName" in sub.base)) {
                        return false;
                    }
                    if (!("directoryName" in san)) {
                        return false;
                    }
                    return dnWithinSubtree(
                        san.directoryName.rdnSequence,
                        sub.base.directoryName.rdnSequence,
                        (sub.minimum !== undefined) ? Number(sub.minimum) : undefined,
                        (sub.maximum !== undefined) ? Number(sub.maximum) : undefined,
                    );
                })) {
                    return false;
                }
                if (nc.permittedSubtrees && !nc.permittedSubtrees.every((sub): boolean => {
                    if (!("directoryName" in sub.base)) {
                        return true;
                    }
                    if (!("directoryName" in san)) {
                        return true;
                    }
                    return dnWithinSubtree(
                        san.directoryName.rdnSequence,
                        sub.base.directoryName.rdnSequence,
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

/**
 * `certificateMatch` on a decoded assertion and certificate.
 * Alias of {@link evaluateCertificateAssertion}.
 */
evaluateCertificateAssertion satisfies TypedEquationFunction<CertificateAssertion>;

export const certificateMatchTyped: typeof evaluateCertificateAssertion = evaluateCertificateAssertion;

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.2 `certificateMatch`.
 *
 * Selects one or more `Certificate` values by the characteristics
 * present in `CertificateAssertion`. TRUE iff all presented
 * components match as described by
 * {@link evaluateCertificateAssertion}.
 */
export
const certificateMatch: Matcher = createEqualityMatcher(
    _decode_CertificateAssertion,
    evaluateCertificateAssertion,
    undefined,
    true,
);

export default certificateMatch;
