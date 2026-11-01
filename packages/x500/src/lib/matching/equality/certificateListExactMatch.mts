import { readDecoded } from "../readValue.mjs";
import { ASN1Element, DERElement } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { compareName } from "@wildboar/dn";
import {
    CertificateListExactAssertion,
    _decode_CertificateListExactAssertion,
} from "../../modules/CertificateExtensions/CertificateListExactAssertion.ta.mjs";
import {
    type CertificateList,
    _decode_CertificateList,
} from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    id_ce_issuingDistributionPoint,
} from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
} from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import compareGeneralNames from "../../comparators/compareGeneralNames.mjs";
import { compareRelativeDistinguishedName } from "@wildboar/dn";
import compareElements from "../../comparators/compareElements.mjs";

const SOUGHT_EXTENSION_OID: string = id_ce_issuingDistributionPoint.toString();

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.5
 * `certificateListExactMatch`.
 *
 * Uniquely selects a single CRL (`CertificateList`). TRUE iff
 * issuer `Name` and `thisUpdate` match. If `distributionPoint` is
 * presented, the CRL must have an issuing distribution point
 * extension whose name equals the assertion in at least one name
 * form.
 */
/**
 * `certificateListExactMatch` on a decoded assertion and CRL.
 *
 * @param a Presented exact assertion.
 * @param value Stored certificate list, or that list already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when issuer, thisUpdate, and distribution point match.
 */
export
function certificateListExactMatchTyped (
    a: CertificateListExactAssertion,
    value: CertificateList | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_CertificateList);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    if (!compareName(v.toBeSigned.issuer, a.issuer, getEqualityMatcher)) {
        return false;
    }
    const time = ((): Date => {
        if ("utcTime" in a.thisUpdate) {
            return a.thisUpdate.utcTime;
        } else {
            return a.thisUpdate.generalizedTime;
        }
    })();
    if (time.valueOf() !== v.toBeSigned.thisUpdate.valueOf()) {
        return false;
    }
    if (a.distributionPoint) {
        const ext: Extension | undefined = v.toBeSigned.crlExtensions
            ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_issuingDistributionPoint)));
        if (!ext) {
            return false;
        }
        const el: DERElement = new DERElement();
        el.fromBytes(ext.extnValue);
        const ips: IssuingDistPointSyntax = _decode_IssuingDistPointSyntax(el);
        const stored = ips.distributionPoint;
        if (!stored) {
            return false;
        }
        if ("fullName" in stored) {
            if (!("fullName" in a.distributionPoint)) {
                return false;
            }
            if (!compareGeneralNames(stored.fullName, stored.fullName, getEqualityMatcher)) {
                return false;
            }
        } else if ("nameRelativeToCRLIssuer" in stored) {
            if (!("nameRelativeToCRLIssuer" in a.distributionPoint)) {
                return false;
            }
            if (!compareRelativeDistinguishedName(
                stored.nameRelativeToCRLIssuer,
                a.distributionPoint.nameRelativeToCRLIssuer,
                getEqualityMatcher,
            )) {
                return false;
            }
        } else {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    "@wildboar/x500: debug: certificateListExactMatch: unrecognized DistributionPointName alternative",
                );
            }
            if (!("tagClass" in a.distributionPoint)) {
                return false;
            }
            if (!compareElements(stored, a.distributionPoint)) {
                return false;
            }
        }
    }
    return true;
}

certificateListExactMatchTyped satisfies TypedEquationFunction<CertificateListExactAssertion>;

/**
 * `certificateListExactMatch` as a `Matcher`.
 */
export
const certificateListExactMatch: Matcher = createEqualityMatcher(
    _decode_CertificateListExactAssertion,
    certificateListExactMatchTyped,
    undefined,
    true,
);

export default certificateListExactMatch;
