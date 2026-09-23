import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    Certificate,
    _decode_Certificate,
} from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    id_ce_sOAIdentifier,
} from "../../modules/AttributeCertificateDefinitions/id-ce-sOAIdentifier.va.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.3.2.1.2
 * `sOAIdentifierMatch`.
 *
 * Assertion syntax is NULL. TRUE iff the stored public-key
 * certificate contains a `sOAIdentifier` extension.
 */
export
function sOAIdentifierMatch (
    _assertion: ASN1Element | null,
    value: ASN1Element | Certificate,
): boolean {
    return sOAIdentifierMatchTyped(readDecoded(value, _decode_Certificate));
}

/**
 * `sOAIdentifierMatch` on a decoded certificate. The NULL assertion
 * is ignored.
 *
 * @param value Stored certificate.
 * @returns `true` when the `sOAIdentifier` extension is present.
 */
export
function sOAIdentifierMatchTyped (value: Certificate): boolean {
    return Boolean(value.toBeSigned.extensions?.some((ext) => ext.extnId.isEqualTo(id_ce_sOAIdentifier)));
}

export default sOAIdentifierMatch;
