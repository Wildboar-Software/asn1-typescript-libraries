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

/* START_OF_SYMBOL_DEFINITION DeletionTime */
/**
 * @summary DeletionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeletionTime  ::=  UTCTime
 * ```
 */
export type DeletionTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DeletionTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeletionTime */
let _cached_decoder_for_DeletionTime: $.ASN1Decoder<DeletionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeletionTime */
/**
 * @summary Decodes an ASN.1 element into a(n) DeletionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeletionTime} The decoded data structure.
 */
export function _decode_DeletionTime(el: _Element) {
    if (!_cached_decoder_for_DeletionTime) {
        _cached_decoder_for_DeletionTime = $._decodeUTCTime;
    }
    return _cached_decoder_for_DeletionTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeletionTime */
let _cached_encoder_for_DeletionTime: $.ASN1Encoder<DeletionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeletionTime */
/**
 * @summary Encodes a(n) DeletionTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeletionTime, encoded as an ASN.1 Element.
 */
export function _encode_DeletionTime(
    value: DeletionTime,
    elGetter: $.ASN1Encoder<DeletionTime>
) {
    if (!_cached_encoder_for_DeletionTime) {
        _cached_encoder_for_DeletionTime = $._encodeUTCTime;
    }
    return _cached_encoder_for_DeletionTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeletionTime */

/* eslint-enable */
