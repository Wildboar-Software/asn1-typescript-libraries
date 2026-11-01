import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    HolderIssuerAssertion,
    _decode_HolderIssuerAssertion,
} from "../../modules/AttributeCertificateDefinitions/HolderIssuerAssertion.ta.mjs";
import {
    type AttributeCertificate,
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
/**
 * `holderIssuerMatch` on decoded values.
 *
 * @param a Presented holder and issuer.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when every present component matches.
 */
export
function holderIssuerMatchTyped (
    a: HolderIssuerAssertion,
    value: AttributeCertificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    const v = readDecoded(value, _decode_AttributeCertificate);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher);
    if (a.holder && !compareHolder(a.holder, v.toBeSigned.holder, getEqualityMatcher)) {
        return false;
    }
    if (a.issuer && !compareAttCertIssuer(a.issuer, v.toBeSigned.issuer, getEqualityMatcher)) {
        return false;
    }
    return true;
}

holderIssuerMatchTyped satisfies TypedEquationFunction<HolderIssuerAssertion>;

/**
 * `holderIssuerMatch` as a `Matcher`.
 */
export
const holderIssuerMatch: Matcher = createEqualityMatcher(
    _decode_HolderIssuerAssertion,
    holderIssuerMatchTyped,
    undefined,
    true,
);

export default holderIssuerMatch;
