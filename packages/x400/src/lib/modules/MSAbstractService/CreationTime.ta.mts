/* eslint-disable */
import {
    UTCTime,
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

/* START_OF_SYMBOL_DEFINITION CreationTime */
/**
 * @summary CreationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreationTime  ::=  UTCTime
 * ```
 */
export type CreationTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION CreationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreationTime */
let _cached_decoder_for_CreationTime: $.ASN1Decoder<CreationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreationTime */

/* START_OF_SYMBOL_DEFINITION _decode_CreationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) CreationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreationTime} The decoded data structure.
 */
export function _decode_CreationTime(el: _Element) {
    if (!_cached_decoder_for_CreationTime) {
        _cached_decoder_for_CreationTime = $._decodeUTCTime;
    }
    return _cached_decoder_for_CreationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreationTime */
let _cached_encoder_for_CreationTime: $.ASN1Encoder<CreationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreationTime */

/* START_OF_SYMBOL_DEFINITION _encode_CreationTime */
/**
 * @summary Encodes a(n) CreationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreationTime, encoded as an ASN.1 Element.
 */
export function _encode_CreationTime(
    value: CreationTime,
    elGetter: $.ASN1Encoder<CreationTime>
) {
    if (!_cached_encoder_for_CreationTime) {
        _cached_encoder_for_CreationTime = $._encodeUTCTime;
    }
    return _cached_encoder_for_CreationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreationTime */

/* eslint-enable */
