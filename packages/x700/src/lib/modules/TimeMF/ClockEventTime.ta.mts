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
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../TimeMF/GlobalTime.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ClockEventTime */
/**
 * @summary ClockEventTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventTime  ::=  GlobalTime
 * ```
 */
export type ClockEventTime = GlobalTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventTime */
let _cached_decoder_for_ClockEventTime: $.ASN1Decoder<ClockEventTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _decode_ClockEventTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockEventTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEventTime} The decoded data structure.
 */
export function _decode_ClockEventTime(el: _Element) {
    if (!_cached_decoder_for_ClockEventTime) {
        _cached_decoder_for_ClockEventTime = _decode_GlobalTime;
    }
    return _cached_decoder_for_ClockEventTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventTime */
let _cached_encoder_for_ClockEventTime: $.ASN1Encoder<ClockEventTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _encode_ClockEventTime */
/**
 * @summary Encodes a(n) ClockEventTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEventTime, encoded as an ASN.1 Element.
 */
export function _encode_ClockEventTime(
    value: ClockEventTime,
    elGetter: $.ASN1Encoder<ClockEventTime>
) {
    if (!_cached_encoder_for_ClockEventTime) {
        _cached_encoder_for_ClockEventTime = _encode_GlobalTime;
    }
    return _cached_encoder_for_ClockEventTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockEventTime */

/* eslint-enable */
