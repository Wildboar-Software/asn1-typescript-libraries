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
    type AttCertPath,
    _decode_AttCertPath,
} from "../../modules/AttributeCertificateDefinitions/AttCertPath.ta.mjs";
import {
    DelMatchSyntax,
    _decode_DelMatchSyntax,
} from "../../modules/AttributeCertificateDefinitions/DelMatchSyntax.ta.mjs";
import type {
    AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import compareAttCertIssuer from "../../comparators/compareAttCertIssuer.mjs";
import compareHolder from "../../comparators/compareHolder.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.4 `delegationPathMatch`.
 *
 * Selects a stored `delegationPath` from an SOA-issued certificate
 * to the AA that issued the end-entity holder certificate being
 * validated. TRUE iff `firstIssuer` matches the issuer of the
 * first AC in the SEQUENCE and `lastHolder` matches the holder of
 * the last. FALSE if either comparison fails.
 *
 * `assertion` may be an element or a `DelMatchSyntax`. `value` may
 * be an element or an `AttCertPath`.
 */
/**
 * `delegationPathMatch` on decoded values.
 *
 * @param a Presented endpoints.
 * @param value Stored attribute-certificate path, or that path already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the first issuer and last holder match.
 */
export
function delegationPathMatchTyped (
    a: DelMatchSyntax,
    value: AttCertPath | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean {
    const v = readDecoded(value, _decode_AttCertPath);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher);
    const firstCert: AttributeCertificate = v[0];
    const lastCert: AttributeCertificate = v[v.length - 1];
    if (!compareAttCertIssuer(a.firstIssuer, firstCert.toBeSigned.issuer, getEqualityMatcher)) {
        return false;
    }
    return compareHolder(a.lastHolder, lastCert.toBeSigned.holder, getEqualityMatcher);
}

delegationPathMatchTyped satisfies TypedEquationFunction<DelMatchSyntax>;

/**
 * `delegationPathMatch` as a `Matcher`.
 */
export
const delegationPathMatch: Matcher = createEqualityMatcher(
    _decode_DelMatchSyntax,
    delegationPathMatchTyped,
);

export default delegationPathMatch;
