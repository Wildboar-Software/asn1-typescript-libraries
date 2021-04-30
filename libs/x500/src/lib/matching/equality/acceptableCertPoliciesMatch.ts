import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    id_ce_acceptableCertPolicies,
} from "../../modules/AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va";
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
} from "../../modules/AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta";
import { DERElement } from "asn1-ts";

const SOUGHT_OID: string = id_ce_acceptableCertPolicies.toString();

export
const acceptableCertPoliciesMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: AcceptableCertPoliciesSyntax = _decode_AcceptableCertPoliciesSyntax(assertion);
    const v: AttributeCertificate = _decode_AttributeCertificate(value);
    const ext: Extension | undefined = v.toBeSigned.extensions
        .find((ext: Extension): boolean => (ext.extnId.toString() === SOUGHT_OID));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: AcceptableCertPoliciesSyntax = _decode_AcceptableCertPoliciesSyntax(el);
    return a.every((oid, index) => (oid.toString() === storedValue[index]?.toString()));
}

export default acceptableCertPoliciesMatch;
