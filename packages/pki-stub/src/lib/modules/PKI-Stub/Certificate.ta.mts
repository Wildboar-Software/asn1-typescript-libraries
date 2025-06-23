/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta.mjs";
import {
    TBSCertificate,
    _decode_TBSCertificate,
    _encode_TBSCertificate,
} from "../PKI-Stub/TBSCertificate.ta.mjs";

/**
 * @summary Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificate  ::=  SIGNED{TBSCertificate}
 * ```
 */
export type Certificate = SIGNED<TBSCertificate>; // DefinedType

let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificate} The decoded data structure.
 */
export function _decode_Certificate(el: _Element): Certificate {
    if (!_cached_decoder_for_Certificate) {
        _cached_decoder_for_Certificate =
            _get_decoder_for_SIGNED<TBSCertificate>(_decode_TBSCertificate);
    }
    return _cached_decoder_for_Certificate(el);
}

let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;

/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export function _encode_Certificate(value: Certificate, elGetter: $.ASN1Encoder<Certificate>): _Element {
    if (!_cached_encoder_for_Certificate) {
        _cached_encoder_for_Certificate =
            _get_encoder_for_SIGNED<TBSCertificate>(_encode_TBSCertificate);
    }
    return _cached_encoder_for_Certificate(value, elGetter);
}


/* eslint-enable */
