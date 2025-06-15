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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORNamePattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORNamePattern  ::=  ORName
 * ```
 */
export type ORNamePattern = ORName; // DefinedType

let _cached_decoder_for_ORNamePattern: $.ASN1Decoder<ORNamePattern> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ORNamePattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORNamePattern} The decoded data structure.
 */
export function _decode_ORNamePattern(el: _Element) {
    if (!_cached_decoder_for_ORNamePattern) {
        _cached_decoder_for_ORNamePattern = _decode_ORName;
    }
    return _cached_decoder_for_ORNamePattern(el);
}

let _cached_encoder_for_ORNamePattern: $.ASN1Encoder<ORNamePattern> | null = null;

/**
 * @summary Encodes a(n) ORNamePattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORNamePattern, encoded as an ASN.1 Element.
 */
export function _encode_ORNamePattern(
    value: ORNamePattern,
    elGetter: $.ASN1Encoder<ORNamePattern>
) {
    if (!_cached_encoder_for_ORNamePattern) {
        _cached_encoder_for_ORNamePattern = _encode_ORName;
    }
    return _cached_encoder_for_ORNamePattern(value, elGetter);
}


/* eslint-enable */
