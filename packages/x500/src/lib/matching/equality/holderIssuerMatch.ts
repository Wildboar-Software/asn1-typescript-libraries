import type EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
} from "../../modules/AttributeCertificateDefinitions/HolderIssuerAssertion.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer";
import compareHolder from "../../comparators/compareHolder";

export
const holderIssuerMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: HolderIssuerAssertion = _decode_HolderIssuerAssertion(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    if (a.holder && !compareHolder(a.holder, v.toBeSigned.holder, getEqualityMatcher)) {
        return false;
    }
    if (a.issuer && !compareAttCertIssuer(a.issuer, v.toBeSigned.issuer)) {
        return false;
    }
    return true;
}

export default holderIssuerMatch;
