import { readDecoded } from "../readValue.mjs";
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
import { compareGeneralName } from "@wildboar/gn";
import { compareRelativeDistinguishedName } from "@wildboar/dn";

/**
 * `a < b` for `INTEGER`. Two numbers stay numbers. A mixed pair converts
 * only the number, because `number < bigint` throws.
 */
function integerLessThan (a: INTEGER, b: INTEGER): boolean {
    if ((typeof a === "number") && (typeof b === "number")) {
        return a < b;
    }
    if ((typeof a === "bigint") && (typeof b === "bigint")) {
        return a < b;
    }
    const av = (typeof a === "bigint") ? a : BigInt(a);
    const bv = (typeof b === "bigint") ? b : BigInt(b);
    return av < bv;
}

/** Add `delta` without changing a number into a bigint. */
function shiftInteger (value: INTEGER, delta: number): INTEGER {
    if (delta === 0) {
        return value;
    }
    if (typeof value === "bigint") {
        return value + BigInt(delta);
    }
    return value + delta;
}

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

    if (a.minCRLNumber) {
        if (crlNumber === undefined) {
            return false;
        }
        if (integerLessThan(crlNumber, shiftInteger(a.minCRLNumber, approximate ? -1 : 0))) {
            return false;
        }
    }

    if (a.maxCRLNumber) {
        if (crlNumber === undefined) {
            return false;
        }
        if (integerLessThan(shiftInteger(a.maxCRLNumber, approximate ? 1 : 0), crlNumber)) {
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
        if (("fullName" in a.distributionPoint) && ("fullName" in distributionPoint)) {
            if (
                !a.distributionPoint.fullName.some((dpn1) => (
                    ("fullName" in distributionPoint)
                    && (distributionPoint.fullName
                        .some((dpn2): boolean => compareGeneralName(dpn1, dpn2, getEqualityMatcher)))
            ))) {
                return false;
            }
        } else if (
            ("nameRelativeToCRLIssuer" in a.distributionPoint)
            && ("nameRelativeToCRLIssuer" in distributionPoint)
            && !compareRelativeDistinguishedName(
                a.distributionPoint.nameRelativeToCRLIssuer,
                distributionPoint.nameRelativeToCRLIssuer,
                getEqualityMatcher,
            )
        ) {
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
