import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    id_ce_acceptableCertPolicies,
} from "../../modules/AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va.mjs";
import {
    type AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
} from "../../modules/AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.mjs";
import {
    type AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.5.2.3.2
 * `acceptableCertPoliciesMatch`.
 *
 * TRUE iff the stored AC contains `acceptableCertPolicies` and
 * every component present in the presented
 * `AcceptableCertPoliciesSyntax` matches the stored policy set.
 */
/**
 * `acceptableCertPoliciesMatch` on a decoded policy list and AC.
 *
 * @param a Presented acceptable policies.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @returns `true` when every presented policy is stored.
 */
export
function acceptableCertPoliciesMatchTyped (
    a: AcceptableCertPoliciesSyntax,
    value: AttributeCertificate | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_AttributeCertificate);
    const ext: Extension | undefined = v.toBeSigned.extensions
        ?.find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_acceptableCertPolicies));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: AcceptableCertPoliciesSyntax = _decode_AcceptableCertPoliciesSyntax(el);
    const storedPolicies: Set<string> = new Set(storedValue.map((oid) => oid.toString()));
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    let matched = true;
    for (let i = 0; i < a.length; i++) {
        if (!storedPolicies.has(a[i].toString())) {
            if (!constantTime) {
                return false;
            }
            matched = false;
        }
    }
    return matched;
}

acceptableCertPoliciesMatchTyped satisfies TypedEquationFunction<AcceptableCertPoliciesSyntax>;

/**
 * `acceptableCertPoliciesMatch` as a `Matcher`.
 */
export
const acceptableCertPoliciesMatch: Matcher = createEqualityMatcher(
    _decode_AcceptableCertPoliciesSyntax,
    acceptableCertPoliciesMatchTyped,
    undefined,
    true,
);

export default acceptableCertPoliciesMatch;
