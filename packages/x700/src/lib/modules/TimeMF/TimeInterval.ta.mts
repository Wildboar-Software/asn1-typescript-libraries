/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION TimeInterval */
/**
 * @summary TimeInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeInterval  ::=  OCTET STRING(SIZE (8))
 * ```
 */
export type TimeInterval = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION TimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeInterval */
let _cached_decoder_for_TimeInterval: $.ASN1Decoder<TimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _decode_TimeInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeInterval} The decoded data structure.
 */
export function _decode_TimeInterval(el: _Element) {
    if (!_cached_decoder_for_TimeInterval) {
        _cached_decoder_for_TimeInterval = $._decodeOctetString;
    }
    return _cached_decoder_for_TimeInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeInterval */
let _cached_encoder_for_TimeInterval: $.ASN1Encoder<TimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeInterval */

/* START_OF_SYMBOL_DEFINITION _encode_TimeInterval */
/**
 * @summary Encodes a(n) TimeInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeInterval, encoded as an ASN.1 Element.
 */
export function _encode_TimeInterval(
    value: TimeInterval,
    elGetter: $.ASN1Encoder<TimeInterval>
) {
    if (!_cached_encoder_for_TimeInterval) {
        _cached_encoder_for_TimeInterval = $._encodeOctetString;
    }
    return _cached_encoder_for_TimeInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeInterval */

/* eslint-enable */
