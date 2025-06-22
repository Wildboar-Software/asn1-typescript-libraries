import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    id_ce_sOAIdentifier,
} from "../../modules/AttributeCertificateDefinitions/id-ce-sOAIdentifier.va.mjs";

export
const sOAIdentifierMatch: EqualityMatcher = (
    assertion: ASN1Element, // Not used, because its NULL.
    value: ASN1Element,
): boolean => {
    const v: Certificate = _decode_Certificate(value);
    return Boolean(v.toBeSigned.extensions?.some((ext) => ext.extnId.isEqualTo(id_ce_sOAIdentifier)));
}

export default sOAIdentifierMatch;
