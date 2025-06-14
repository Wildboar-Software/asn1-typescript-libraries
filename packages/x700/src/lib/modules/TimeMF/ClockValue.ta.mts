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
/* START_OF_SYMBOL_DEFINITION ClockValue */
/**
 * @summary ClockValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockValue  ::=  GlobalTime
 * ```
 */
export type ClockValue = GlobalTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockValue */
let _cached_decoder_for_ClockValue: $.ASN1Decoder<ClockValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockValue */

/* START_OF_SYMBOL_DEFINITION _decode_ClockValue */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockValue} The decoded data structure.
 */
export function _decode_ClockValue(el: _Element) {
    if (!_cached_decoder_for_ClockValue) {
        _cached_decoder_for_ClockValue = _decode_GlobalTime;
    }
    return _cached_decoder_for_ClockValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockValue */
let _cached_encoder_for_ClockValue: $.ASN1Encoder<ClockValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockValue */

/* START_OF_SYMBOL_DEFINITION _encode_ClockValue */
/**
 * @summary Encodes a(n) ClockValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockValue, encoded as an ASN.1 Element.
 */
export function _encode_ClockValue(
    value: ClockValue,
    elGetter: $.ASN1Encoder<ClockValue>
) {
    if (!_cached_encoder_for_ClockValue) {
        _cached_encoder_for_ClockValue = _encode_GlobalTime;
    }
    return _cached_encoder_for_ClockValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockValue */

/* eslint-enable */
