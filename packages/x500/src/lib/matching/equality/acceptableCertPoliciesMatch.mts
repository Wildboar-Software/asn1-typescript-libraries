import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    id_ce_acceptableCertPolicies,
} from "../../modules/AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va.mjs";
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
} from "../../modules/AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta.mjs";
import {
    AttributeCertificate,
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
export
function acceptableCertPoliciesMatch (
    assertion: ASN1Element | AcceptableCertPoliciesSyntax,
    value: ASN1Element | AttributeCertificate,
): boolean {
    return acceptableCertPoliciesMatchTyped(
        readDecoded(assertion, _decode_AcceptableCertPoliciesSyntax),
        readDecoded(value, _decode_AttributeCertificate),
    );
}

/**
 * `acceptableCertPoliciesMatch` on a decoded policy list and AC.
 *
 * @param a Presented acceptable policies.
 * @param v Stored attribute certificate.
 * @returns `true` when every presented policy is stored.
 */
export
function acceptableCertPoliciesMatchTyped (
    a: AcceptableCertPoliciesSyntax,
    v: AttributeCertificate,
): boolean {
    const ext: Extension | undefined = v.toBeSigned.extensions
        ?.find((ext: Extension): boolean => ext.extnId.isEqualTo(id_ce_acceptableCertPolicies));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: AcceptableCertPoliciesSyntax = _decode_AcceptableCertPoliciesSyntax(el);
    const storedPolicies: Set<string> = new Set(storedValue.map((oid) => oid.toString()));
    return a.every((oid) => storedPolicies.has(oid.toString()));
}

export default acceptableCertPoliciesMatch;
