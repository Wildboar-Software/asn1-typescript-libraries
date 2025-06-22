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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from '@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs';


/**
 * @summary AttributeCertificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificates  ::=  SEQUENCE SIZE (1..MAX) OF AttributeCertificate
 * ```
 */
export type AttributeCertificates = AttributeCertificate[]; // SequenceOfType


let _cached_decoder_for_AttributeCertificates: $.ASN1Decoder<AttributeCertificates> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificates} The decoded data structure.
 */
export function _decode_AttributeCertificates(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificates) {
        _cached_decoder_for_AttributeCertificates = $._decodeSequenceOf<AttributeCertificate>(
            () => _decode_AttributeCertificate
        );
    }
    return _cached_decoder_for_AttributeCertificates(el);
}


let _cached_encoder_for_AttributeCertificates: $.ASN1Encoder<AttributeCertificates> | null = null;


/**
 * @summary Encodes a(n) AttributeCertificates into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificates, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificates(
    value: AttributeCertificates,
    elGetter: $.ASN1Encoder<AttributeCertificates>
) {
    if (!_cached_encoder_for_AttributeCertificates) {
        _cached_encoder_for_AttributeCertificates = $._encodeSequenceOf<AttributeCertificate>(
            () => _encode_AttributeCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeCertificates(value, elGetter);
}


/* eslint-enable */
