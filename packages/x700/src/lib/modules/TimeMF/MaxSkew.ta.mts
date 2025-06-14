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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MaxSkew */
/**
 * @summary MaxSkew
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxSkew  ::=  TimeInterval
 * ```
 */
export type MaxSkew = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION MaxSkew */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxSkew */
let _cached_decoder_for_MaxSkew: $.ASN1Decoder<MaxSkew> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxSkew */

/* START_OF_SYMBOL_DEFINITION _decode_MaxSkew */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxSkew
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxSkew} The decoded data structure.
 */
export function _decode_MaxSkew(el: _Element) {
    if (!_cached_decoder_for_MaxSkew) {
        _cached_decoder_for_MaxSkew = _decode_TimeInterval;
    }
    return _cached_decoder_for_MaxSkew(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxSkew */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxSkew */
let _cached_encoder_for_MaxSkew: $.ASN1Encoder<MaxSkew> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxSkew */

/* START_OF_SYMBOL_DEFINITION _encode_MaxSkew */
/**
 * @summary Encodes a(n) MaxSkew into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxSkew, encoded as an ASN.1 Element.
 */
export function _encode_MaxSkew(
    value: MaxSkew,
    elGetter: $.ASN1Encoder<MaxSkew>
) {
    if (!_cached_encoder_for_MaxSkew) {
        _cached_encoder_for_MaxSkew = _encode_TimeInterval;
    }
    return _cached_encoder_for_MaxSkew(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxSkew */

/* eslint-enable */
