/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION RedirectHoldingTime */
/**
 * @summary RedirectHoldingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectHoldingTime  ::=  INTEGER(1..65535)
 * ```
 */
export type RedirectHoldingTime = INTEGER;
/* END_OF_SYMBOL_DEFINITION RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime */
let _cached_decoder_for_RedirectHoldingTime: $.ASN1Decoder<RedirectHoldingTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectHoldingTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectHoldingTime} The decoded data structure.
 */
export function _decode_RedirectHoldingTime(el: _Element) {
    if (!_cached_decoder_for_RedirectHoldingTime) {
        _cached_decoder_for_RedirectHoldingTime = $._decodeInteger;
    }
    return _cached_decoder_for_RedirectHoldingTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime */
let _cached_encoder_for_RedirectHoldingTime: $.ASN1Encoder<RedirectHoldingTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime */
/**
 * @summary Encodes a(n) RedirectHoldingTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectHoldingTime, encoded as an ASN.1 Element.
 */
export function _encode_RedirectHoldingTime(
    value: RedirectHoldingTime,
    elGetter: $.ASN1Encoder<RedirectHoldingTime>
) {
    if (!_cached_encoder_for_RedirectHoldingTime) {
        _cached_encoder_for_RedirectHoldingTime = $._encodeInteger;
    }
    return _cached_encoder_for_RedirectHoldingTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime */

/* eslint-enable */
