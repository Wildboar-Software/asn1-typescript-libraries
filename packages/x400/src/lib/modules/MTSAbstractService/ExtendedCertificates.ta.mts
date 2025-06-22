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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from '../MTSAbstractService/ExtendedCertificate.ta.mjs';
/**
 * @summary ExtendedCertificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificates  ::=  SET SIZE (1..ub-certificates) OF ExtendedCertificate
 * ```
 */
export type ExtendedCertificates = ExtendedCertificate[]; // SetOfType

let _cached_decoder_for_ExtendedCertificates: $.ASN1Decoder<ExtendedCertificates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificates} The decoded data structure.
 */
export function _decode_ExtendedCertificates(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificates) {
        _cached_decoder_for_ExtendedCertificates = $._decodeSetOf<ExtendedCertificate>(
            () => _decode_ExtendedCertificate
        );
    }
    return _cached_decoder_for_ExtendedCertificates(el);
}

let _cached_encoder_for_ExtendedCertificates: $.ASN1Encoder<ExtendedCertificates> | null = null;

/**
 * @summary Encodes a(n) ExtendedCertificates into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificates, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificates(
    value: ExtendedCertificates,
    elGetter: $.ASN1Encoder<ExtendedCertificates>
) {
    if (!_cached_encoder_for_ExtendedCertificates) {
        _cached_encoder_for_ExtendedCertificates = $._encodeSetOf<ExtendedCertificate>(
            () => _encode_ExtendedCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedCertificates(value, elGetter);
}


/* eslint-enable */
