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
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ResponseTimeout */
/**
 * @summary ResponseTimeout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeout  ::=  TimeoutPeriod
 * ```
 */
export type ResponseTimeout = TimeoutPeriod; // DefinedType
/* END_OF_SYMBOL_DEFINITION ResponseTimeout */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTimeout */
let _cached_decoder_for_ResponseTimeout: $.ASN1Decoder<ResponseTimeout> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTimeout */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseTimeout */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTimeout
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseTimeout} The decoded data structure.
 */
export function _decode_ResponseTimeout(el: _Element) {
    if (!_cached_decoder_for_ResponseTimeout) {
        _cached_decoder_for_ResponseTimeout = _decode_TimeoutPeriod;
    }
    return _cached_decoder_for_ResponseTimeout(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseTimeout */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTimeout */
let _cached_encoder_for_ResponseTimeout: $.ASN1Encoder<ResponseTimeout> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTimeout */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseTimeout */
/**
 * @summary Encodes a(n) ResponseTimeout into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTimeout, encoded as an ASN.1 Element.
 */
export function _encode_ResponseTimeout(
    value: ResponseTimeout,
    elGetter: $.ASN1Encoder<ResponseTimeout>
) {
    if (!_cached_encoder_for_ResponseTimeout) {
        _cached_encoder_for_ResponseTimeout = _encode_TimeoutPeriod;
    }
    return _cached_encoder_for_ResponseTimeout(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseTimeout */

/* eslint-enable */
