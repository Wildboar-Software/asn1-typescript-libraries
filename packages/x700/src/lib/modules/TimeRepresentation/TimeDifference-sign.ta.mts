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

/* START_OF_SYMBOL_DEFINITION _enum_for_TimeDifference_sign */
/**
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_TimeDifference_sign {
    positive = 0,
    negative = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION TimeDifference_sign */
/**
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type TimeDifference_sign = _enum_for_TimeDifference_sign;
/* END_OF_SYMBOL_DEFINITION TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION TimeDifference_sign */
/**
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const TimeDifference_sign = _enum_for_TimeDifference_sign;
/* END_OF_SYMBOL_DEFINITION TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION TimeDifference_sign_positive */
/**
 * @summary TimeDifference_sign_positive
 * @constant
 * @type {number}
 */
export const TimeDifference_sign_positive: TimeDifference_sign =
    TimeDifference_sign.positive; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeDifference_sign_positive */

/* START_OF_SYMBOL_DEFINITION positive */
/**
 * @summary positive
 * @constant
 * @type {number}
 */
export const positive: TimeDifference_sign =
    TimeDifference_sign.positive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION positive */

/* START_OF_SYMBOL_DEFINITION TimeDifference_sign_negative */
/**
 * @summary TimeDifference_sign_negative
 * @constant
 * @type {number}
 */
export const TimeDifference_sign_negative: TimeDifference_sign =
    TimeDifference_sign.negative; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeDifference_sign_negative */

/* START_OF_SYMBOL_DEFINITION negative */
/**
 * @summary negative
 * @constant
 * @type {number}
 */
export const negative: TimeDifference_sign =
    TimeDifference_sign.negative; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION negative */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeDifference_sign */
let _cached_decoder_for_TimeDifference_sign: $.ASN1Decoder<TimeDifference_sign> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION _decode_TimeDifference_sign */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeDifference_sign
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeDifference_sign} The decoded data structure.
 */
export function _decode_TimeDifference_sign(el: _Element) {
    if (!_cached_decoder_for_TimeDifference_sign) {
        _cached_decoder_for_TimeDifference_sign = $._decodeEnumerated;
    }
    return _cached_decoder_for_TimeDifference_sign(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeDifference_sign */
let _cached_encoder_for_TimeDifference_sign: $.ASN1Encoder<TimeDifference_sign> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeDifference_sign */

/* START_OF_SYMBOL_DEFINITION _encode_TimeDifference_sign */
/**
 * @summary Encodes a(n) TimeDifference_sign into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeDifference_sign, encoded as an ASN.1 Element.
 */
export function _encode_TimeDifference_sign(
    value: TimeDifference_sign,
    elGetter: $.ASN1Encoder<TimeDifference_sign>
) {
    if (!_cached_encoder_for_TimeDifference_sign) {
        _cached_encoder_for_TimeDifference_sign = $._encodeEnumerated;
    }
    return _cached_encoder_for_TimeDifference_sign(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeDifference_sign */

/* eslint-enable */
