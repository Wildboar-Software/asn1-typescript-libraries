import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
 *
 * `assertion` may be an element or a `HolderIssuerAssertion`.
 * `value` may be an element or an `AttributeCertificate`.
 */
export
function holderIssuerMatch (
    assertion: ASN1Element | HolderIssuerAssertion,
    value: ASN1Element | AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return holderIssuerMatchTyped(
        readDecoded(assertion, _decode_HolderIssuerAssertion),
        readDecoded(value, _decode_AttributeCertificate),
        getEqualityMatcher,
    );
}

/**
 * `holderIssuerMatch` on decoded values.
 *
 * @param a Presented holder and issuer.
 * @param v Stored attribute certificate.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function holderIssuerMatchTyped (
    a: HolderIssuerAssertion,
    v: AttributeCertificate,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.holder && !compareHolder(a.holder, v.toBeSigned.holder, getEqualityMatcher)) {
        return false;
    }
    if (a.issuer && !compareAttCertIssuer(a.issuer, v.toBeSigned.issuer, getEqualityMatcher)) {
        return false;
    }
    return true;
}

export default holderIssuerMatch;
