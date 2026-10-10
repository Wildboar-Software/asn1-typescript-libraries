/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary TD_TRUSTED_CERTIFIERS
 * @description
 *
 * Typed-data value for `data-type` {@link td_trusted_certifiers}.
 * It is the e-data of `KDC_ERR_CANT_VERIFY_CERTIFICATE` (70),
 * sent when the KDC cannot build a certification path for the
 * client certificate. Each entry is a CA, or a CA certificate,
 * that the KDC trusts. `issuerAndSerialNumber` is required and
 * `subjectKeyIdentifier` is recommended.
 *
 * The client should retry only with a different set of
 * certificates that form a path, or a partial path, from one of
 * these trust anchors to its own certificate.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TD-TRUSTED-CERTIFIERS  ::=  SEQUENCE OF
 *                 ExternalPrincipalIdentifier
 * ```
 */
export
type TD_TRUSTED_CERTIFIERS = ExternalPrincipalIdentifier[]; // SequenceOfType

let _cached_decoder_for_TD_TRUSTED_CERTIFIERS: $.ASN1Decoder<TD_TRUSTED_CERTIFIERS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TD_TRUSTED_CERTIFIERS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TD_TRUSTED_CERTIFIERS (el: _Element): TD_TRUSTED_CERTIFIERS {
    if (!_cached_decoder_for_TD_TRUSTED_CERTIFIERS) { _cached_decoder_for_TD_TRUSTED_CERTIFIERS = $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier); }
    return _cached_decoder_for_TD_TRUSTED_CERTIFIERS(el);
}

let _cached_encoder_for_TD_TRUSTED_CERTIFIERS: $.ASN1Encoder<TD_TRUSTED_CERTIFIERS> | null = null;

/**
 * @summary Encodes a(n) TD_TRUSTED_CERTIFIERS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TD_TRUSTED_CERTIFIERS, encoded as an ASN.1 Element.
 */
export
function _encode_TD_TRUSTED_CERTIFIERS (value: TD_TRUSTED_CERTIFIERS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TD_TRUSTED_CERTIFIERS) { _cached_encoder_for_TD_TRUSTED_CERTIFIERS = $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER); }
    return _cached_encoder_for_TD_TRUSTED_CERTIFIERS(value, elGetter);
}


/* eslint-enable */
