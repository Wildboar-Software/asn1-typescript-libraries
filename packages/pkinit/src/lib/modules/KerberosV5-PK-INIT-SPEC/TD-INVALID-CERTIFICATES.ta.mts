/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalPrincipalIdentifier, _decode_ExternalPrincipalIdentifier, _encode_ExternalPrincipalIdentifier } from "../KerberosV5-PK-INIT-SPEC/ExternalPrincipalIdentifier.ta.mjs";


/**
 * @summary TD_INVALID_CERTIFICATES
 * @description
 *
 * Typed-data value for `data-type`
 * {@link td_invalid_certificates}. Each entry names a
 * certificate the client sent whose signature did not verify.
 * It is the e-data of `KDC_ERR_INVALID_CERTIFICATE` (71). The
 * same identification is used for
 * `KDC_ERR_REVOKED_CERTIFICATE` (72) and, when the KDC tried and
 * could not determine revocation status,
 * `KDC_ERR_REVOCATION_STATUS_UNKNOWN` (73).
 *
 * If several signatures are invalid, the KDC may include one
 * `IssuerAndSerialNumber` per invalid signature.
 * `issuerAndSerialNumber` is required on each entry. The list
 * names only certificates from the request.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TD-INVALID-CERTIFICATES  ::=  SEQUENCE OF
 *                 ExternalPrincipalIdentifier
 * ```
 */
export
type TD_INVALID_CERTIFICATES = ExternalPrincipalIdentifier[]; // SequenceOfType

let _cached_decoder_for_TD_INVALID_CERTIFICATES: $.ASN1Decoder<TD_INVALID_CERTIFICATES> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TD_INVALID_CERTIFICATES
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TD_INVALID_CERTIFICATES (el: _Element): TD_INVALID_CERTIFICATES {
    if (!_cached_decoder_for_TD_INVALID_CERTIFICATES) { _cached_decoder_for_TD_INVALID_CERTIFICATES = $._decodeSequenceOf<ExternalPrincipalIdentifier>(() => _decode_ExternalPrincipalIdentifier); }
    return _cached_decoder_for_TD_INVALID_CERTIFICATES(el);
}

let _cached_encoder_for_TD_INVALID_CERTIFICATES: $.ASN1Encoder<TD_INVALID_CERTIFICATES> | null = null;

/**
 * @summary Encodes a(n) TD_INVALID_CERTIFICATES into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TD_INVALID_CERTIFICATES, encoded as an ASN.1 Element.
 */
export
function _encode_TD_INVALID_CERTIFICATES (value: TD_INVALID_CERTIFICATES, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TD_INVALID_CERTIFICATES) { _cached_encoder_for_TD_INVALID_CERTIFICATES = $._encodeSequenceOf<ExternalPrincipalIdentifier>(() => _encode_ExternalPrincipalIdentifier, $.BER); }
    return _cached_encoder_for_TD_INVALID_CERTIFICATES(value, elGetter);
}


/* eslint-enable */
