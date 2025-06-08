import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    AttributeCertificateAssertion,
    _decode_AttributeCertificateAssertion,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificateAssertion.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import type {
    Attribute,
} from "../../modules/InformationFramework/Attribute.ta";
import compareIssuerSerial from "../../comparators/compareIssuerSerial";
import compareGeneralNames from "../../comparators/compareGeneralNames";

export
const attributeCertificateMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: AttributeCertificateAssertion = _decode_AttributeCertificateAssertion(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
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
    if (a.issuer && (!compareGeneralNames(a.issuer, v.toBeSigned.issuer.issuerName, getEqualityMatcher))) {
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
