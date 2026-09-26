import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    AttributeCertificateAssertion,
    _decode_AttributeCertificateAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateAssertion.ta.mjs";
import {
    AttributeCertificate,
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
export
function attributeCertificateMatch (
    assertion: ASN1Element | AttributeCertificateAssertion,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return attributeCertificateMatchTyped(
        readDecoded(assertion, _decode_AttributeCertificateAssertion),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `attributeCertificateMatch` on decoded values.
 *
 * @param a Presented assertion.
 * @param v Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function attributeCertificateMatchTyped (
    a: AttributeCertificateAssertion,
    v: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
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

export default attributeCertificateMatch;
