import { readDecoded, readInteger } from "../readValue.mjs";
import { ASN1Element, DERElement, FALSE_BIT, type INTEGER, TRUE_BIT, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { compareName } from "@wildboar/dn";
import {
    CertificateListAssertion,
    _decode_CertificateListAssertion,
} from "../../modules/CertificateExtensions/CertificateListAssertion.ta.mjs";
import {
    type CertificateList,
    _decode_CertificateList,
} from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_authorityKeyIdentifier,
} from "../../modules/CertificateExtensions/id-ce-authorityKeyIdentifier.va.mjs";
import {
    id_ce_issuingDistributionPoint,
} from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import { id_ce_cRLNumber } from "../../modules/CertificateExtensions/id-ce-cRLNumber.va.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
} from "../../modules/CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    _decode_GeneralNames,
} from "../../modules/CertificateExtensions/GeneralNames.ta.mjs";
import compareAuthorityKeyIdentifier from "../../comparators/compareAuthorityKeyIdentifier.mjs";
import { getDateFromTime } from "@wildboar/pki-stub";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
} from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import { generalNameToKey } from "@wildboar/gn";
import { compareRelativeDistinguishedName } from "@wildboar/dn";
import compareElements from "../../comparators/compareElements.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.6 `certificateListMatch`.
 *
 * Selects one or more CRLs. TRUE iff every present
 * `CertificateListAssertion` component matches: issuer name;
 * `minCRLNumber` / `maxCRLNumber` against the CRL number
 * extension; `reasonFlags` against IDP `onlySomeReasons` (or match
 * if IDP/`reasonFlags` absent); `dateAndTime` in
 * `[thisUpdate, nextUpdate)`; distribution point name; authority
 * key identifier. Missing CRL number or `nextUpdate` where
 * required is not a match.
 */
/**
 * `certificateListMatch` on a decoded assertion and CRL.
 *
 * @param a Presented CRL assertion.
 * @param value Stored certificate list, or that list already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function certificateListMatchTyped (
    a: CertificateListAssertion,
    value: CertificateList | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_CertificateList);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const crlNumberExt: Extension | undefined = v.toBeSigned.crlExtensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_cRLNumber)));
    const idpExt: Extension | undefined = v.toBeSigned.crlExtensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_issuingDistributionPoint)));
    const idp: IssuingDistPointSyntax | undefined = idpExt
        ? ((): IssuingDistPointSyntax => {
            const el: DERElement = new DERElement();
            el.fromBytes(idpExt.extnValue);
            return _decode_IssuingDistPointSyntax(el);
        })()
        : undefined;

    const crlNumber: INTEGER | undefined = crlNumberExt
        ? ((): INTEGER => {
            const el: DERElement = new DERElement();
            el.fromBytes(crlNumberExt.extnValue);
            return el.integer;
        })()
        : undefined;

    if (a.issuer && !compareName(a.issuer, v.toBeSigned.issuer, getEqualityMatcher)) {
        return false;
    }

    const approximate = (flags & MATCH_FLAG_APPROXIMATE) !== 0;

    if (a.minCRLNumber !== undefined) {
        if (crlNumber === undefined) {
            return false;
        }
        const min = BigInt(readInteger(a.minCRLNumber));
        if (readInteger(crlNumber) < (min - (approximate ? 1n : 0n))) {
            return false;
        }
    }

    if (a.maxCRLNumber !== undefined) {
        if (crlNumber === undefined) {
            return false;
        }
        const max = BigInt(readInteger(a.maxCRLNumber));
        if (readInteger(crlNumber) > (max + (approximate ? 1n : 0n))) {
            return false;
        }
    }

    if (
        a.reasonFlags
        && idp?.onlySomeReasons
        && !a.reasonFlags.some((reason: number, index: number) => (
            (reason === TRUE_BIT)
            && (reason === ((idp.onlySomeReasons ?? [])[index] ?? FALSE_BIT))
        ))
    ) {
        return false;
    }

    if (a.dateAndTime) {
        if (!v.toBeSigned.nextUpdate) {
            return false;
        }
        const date: Date = getDateFromTime(a.dateAndTime);
        const thisUpdate: Date = getDateFromTime(v.toBeSigned.thisUpdate);
        const nextUpdate: Date = getDateFromTime(v.toBeSigned.nextUpdate);
        const tol = approximate ? 1000 : 0;
        if (date.valueOf() < thisUpdate.valueOf() - tol) {
            return false;
        }
        if (date.valueOf() > nextUpdate.valueOf() + tol) {
            return false;
        }
    }

    if (a.distributionPoint) {
        const distributionPoint = idp?.distributionPoint;
        if (!distributionPoint) {
            return false;
        }
        if ("fullName" in a.distributionPoint) {
            if (!("fullName" in distributionPoint)) {
                return false;
            }
            // X.509 13.3.6 requires a shared name in at least one name form.
            // Use built-in keys for unordered matching, as in exact CRL
            // matching, rather than a quadratic pairwise name search.
            const storedNames = new Set(distributionPoint.fullName.map(generalNameToKey));
            if (!a.distributionPoint.fullName.some((name) => storedNames.has(generalNameToKey(name)))) {
                return false;
            }
        } else if ("nameRelativeToCRLIssuer" in a.distributionPoint) {
            if (!("nameRelativeToCRLIssuer" in distributionPoint)) {
                return false;
            }
            if (!compareRelativeDistinguishedName(
                a.distributionPoint.nameRelativeToCRLIssuer,
                distributionPoint.nameRelativeToCRLIssuer,
                getEqualityMatcher,
            )) {
                return false;
            }
        } else if (
            !ASN1Element.isElement(distributionPoint)
            || !compareElements(a.distributionPoint, distributionPoint)
        ) {
            // Unknown CHOICE alternatives must also agree, not fall through
            // as a match against an unrelated (or recognized) alternative.
            return false;
        }
    }

    if (a.authorityKeyIdentifier) {
        const aki: Extension | undefined = v.toBeSigned.crlExtensions
            ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_authorityKeyIdentifier)));
        if (!aki) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(aki.extnValue);
        const storedAKI: AuthorityKeyIdentifier = _decode_AuthorityKeyIdentifier(el);
        if (!compareAuthorityKeyIdentifier(a.authorityKeyIdentifier, storedAKI)) {
            return false;
        }
    }

    return true;
}

certificateListMatchTyped satisfies TypedEquationFunction<CertificateListAssertion>;

/**
 * `certificateListMatch` as a `Matcher`.
 */
export
const certificateListMatch: Matcher = createEqualityMatcher(
    _decode_CertificateListAssertion,
    certificateListMatchTyped,
    undefined,
    true,
);

export default certificateListMatch;
