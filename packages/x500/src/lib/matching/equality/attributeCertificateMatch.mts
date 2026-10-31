import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    AttributeCertificateAssertion,
    _decode_AttributeCertificateAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateAssertion.ta.mjs";
import {
    type AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Attribute,
} from "../../modules/InformationFramework/Attribute.ta.mjs";
import compareIssuerSerial from "../../comparators/compareIssuerSerial.mjs";
import compareGeneralNames from "../../comparators/compareGeneralNames.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.2
 * `attributeCertificateMatch`.
 *
 * Broader AC selection than exact match. TRUE iff every present
 * `AttributeCertificateAssertion` component matches: holder
 * `baseCertificateID` vs `IssuerSerial`, or `holderName` vs holder
 * entity names; issuer `GeneralNames`; `attCertValidity` within
 * the AC validity period; each asserted `attType` present in the
 * AC `attributes`. At least one component shall be present.
 */
/**
 * `attributeCertificateMatch` on decoded values.
 *
 * @param a Presented assertion.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function attributeCertificateMatchTyped (
    a: AttributeCertificateAssertion,
    value: AttributeCertificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    const v = readDecoded(value, _decode_AttributeCertificate);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher);
    if (a.holder) {
        if (("baseCertificateID" in a.holder)) {
            if (!v.toBeSigned.holder.baseCertificateID) {
                return false;
            }
            if (!compareIssuerSerial(
                a.holder.baseCertificateID,
                v.toBeSigned.holder.baseCertificateID,
                getEqualityMatcher
            )) {
                return false;
            }
        } else if ("holderName" in a.holder) {
            if (!v.toBeSigned.holder.entityName) {
                return false;
            }
            if (!compareGeneralNames(a.holder.holderName, v.toBeSigned.holder.entityName, getEqualityMatcher)) {
                return false;
            }
        }
    }
    const issuerName = v.toBeSigned.issuer.issuerName;
    if (a.issuer && (!issuerName || !compareGeneralNames(a.issuer, issuerName, getEqualityMatcher))) {
        return false;
    }
    if (
        a.attCertValidity
        && (
            (a.attCertValidity.valueOf() < v.toBeSigned.attrCertValidityPeriod.notBeforeTime.valueOf())
            && (a.attCertValidity.valueOf() > v.toBeSigned.attrCertValidityPeriod.notAfterTime.valueOf())
        )
    ) {
        return false;
    }
    if (
        a.attType
        && !a.attType
            .every((at: OBJECT_IDENTIFIER): boolean => v.toBeSigned.attributes
            .some((attr: Attribute): boolean => (attr.type_.isEqualTo(at))))
    ) {
        return false;
    }
    return true;
}

attributeCertificateMatchTyped satisfies TypedEquationFunction<AttributeCertificateAssertion>;

/**
 * `attributeCertificateMatch` as a `Matcher`.
 */
export
const attributeCertificateMatch: Matcher = createEqualityMatcher(
    _decode_AttributeCertificateAssertion,
    attributeCertificateMatchTyped,
);

export default attributeCertificateMatch;
