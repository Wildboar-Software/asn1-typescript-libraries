import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";
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
import { DERElement } from "asn1-ts";

export
const acceptableCertPoliciesMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: AcceptableCertPoliciesSyntax = _decode_AcceptableCertPoliciesSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
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
