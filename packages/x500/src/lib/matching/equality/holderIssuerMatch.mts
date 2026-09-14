import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
} from "../../modules/AttributeCertificateDefinitions/HolderIssuerAssertion.ta.mjs";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer.mjs";
import compareHolder from "../../comparators/compareHolder.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.3 `holderIssuerMatch`.
 *
 * TRUE iff every present `HolderIssuerAssertion` component (`holder`
 * and/or `issuer`) equals the corresponding component of the
 * stored `AttributeCertificate`.
 */
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
    if (a.issuer && !compareAttCertIssuer(a.issuer, v.toBeSigned.issuer, getEqualityMatcher)) {
        return false;
    }
    return true;
}

export default holderIssuerMatch;
