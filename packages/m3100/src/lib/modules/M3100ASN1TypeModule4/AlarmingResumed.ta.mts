/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION AlarmingResumed */
/**
 * @summary AlarmingResumed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmingResumed  ::=  BOOLEAN
 * ```
 */
export type AlarmingResumed = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION AlarmingResumed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmingResumed */
let _cached_decoder_for_AlarmingResumed: $.ASN1Decoder<AlarmingResumed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmingResumed */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmingResumed */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmingResumed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmingResumed} The decoded data structure.
 */
export function _decode_AlarmingResumed(el: _Element) {
    if (!_cached_decoder_for_AlarmingResumed) {
        _cached_decoder_for_AlarmingResumed = $._decodeBoolean;
    }
    return _cached_decoder_for_AlarmingResumed(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmingResumed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmingResumed */
let _cached_encoder_for_AlarmingResumed: $.ASN1Encoder<AlarmingResumed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmingResumed */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmingResumed */
/**
 * @summary Encodes a(n) AlarmingResumed into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmingResumed, encoded as an ASN.1 Element.
 */
export function _encode_AlarmingResumed(
    value: AlarmingResumed,
    elGetter: $.ASN1Encoder<AlarmingResumed>
) {
    if (!_cached_encoder_for_AlarmingResumed) {
        _cached_encoder_for_AlarmingResumed = $._encodeBoolean;
    }
    return _cached_encoder_for_AlarmingResumed(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmingResumed */

/* eslint-enable */
