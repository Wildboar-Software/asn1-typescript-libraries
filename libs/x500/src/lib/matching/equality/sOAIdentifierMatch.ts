import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta";
import {
    id_ce_sOAIdentifier,
} from "../../modules/AttributeCertificateDefinitions/id-ce-sOAIdentifier.va";

const SOUGHT_EXTENSION_OID: string = id_ce_sOAIdentifier.toString();

export
const sOAIdentifierMatch: EqualityMatcher = (
    assertion: ASN1Element, // Not used, because its NULL.
    value: ASN1Element,
): boolean => {
    const v: Certificate = _decode_Certificate(value);
    return Boolean(v.toBeSigned.extensions?.some((ext) => (ext.extnId.toString() === SOUGHT_EXTENSION_OID)));
}

export default sOAIdentifierMatch;
