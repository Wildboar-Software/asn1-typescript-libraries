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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResponseTimeSummarizationMode */
/**
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```@enum {number}
 */
export enum _enum_for_ResponseTimeSummarizationMode {
    rawResponseTime = 0,
    responseTimePerBit = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode */
/**
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```@enum {number}
 */
export type ResponseTimeSummarizationMode = _enum_for_ResponseTimeSummarizationMode;
/* END_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode */
/**
 * @summary ResponseTimeSummarizationMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeSummarizationMode  ::=  ENUMERATED {
 *   rawResponseTime(0), responseTimePerBit(1)}
 * ```@enum {number}
 */
export const ResponseTimeSummarizationMode = _enum_for_ResponseTimeSummarizationMode;
/* END_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode_rawResponseTime */
/**
 * @summary ResponseTimeSummarizationMode_rawResponseTime
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_rawResponseTime: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.rawResponseTime; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode_rawResponseTime */

/* START_OF_SYMBOL_DEFINITION rawResponseTime */
/**
 * @summary rawResponseTime
 * @constant
 * @type {number}
 */
export const rawResponseTime: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.rawResponseTime; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION rawResponseTime */

/* START_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode_responseTimePerBit */
/**
 * @summary ResponseTimeSummarizationMode_responseTimePerBit
 * @constant
 * @type {number}
 */
export const ResponseTimeSummarizationMode_responseTimePerBit: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.responseTimePerBit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseTimeSummarizationMode_responseTimePerBit */

/* START_OF_SYMBOL_DEFINITION responseTimePerBit */
/**
 * @summary responseTimePerBit
 * @constant
 * @type {number}
 */
export const responseTimePerBit: ResponseTimeSummarizationMode =
    ResponseTimeSummarizationMode.responseTimePerBit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION responseTimePerBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTimeSummarizationMode */
let _cached_decoder_for_ResponseTimeSummarizationMode: $.ASN1Decoder<ResponseTimeSummarizationMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseTimeSummarizationMode */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTimeSummarizationMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseTimeSummarizationMode} The decoded data structure.
 */
export function _decode_ResponseTimeSummarizationMode(el: _Element) {
    if (!_cached_decoder_for_ResponseTimeSummarizationMode) {
        _cached_decoder_for_ResponseTimeSummarizationMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_ResponseTimeSummarizationMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTimeSummarizationMode */
let _cached_encoder_for_ResponseTimeSummarizationMode: $.ASN1Encoder<ResponseTimeSummarizationMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTimeSummarizationMode */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseTimeSummarizationMode */
/**
 * @summary Encodes a(n) ResponseTimeSummarizationMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTimeSummarizationMode, encoded as an ASN.1 Element.
 */
export function _encode_ResponseTimeSummarizationMode(
    value: ResponseTimeSummarizationMode,
    elGetter: $.ASN1Encoder<ResponseTimeSummarizationMode>
) {
    if (!_cached_encoder_for_ResponseTimeSummarizationMode) {
        _cached_encoder_for_ResponseTimeSummarizationMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_ResponseTimeSummarizationMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseTimeSummarizationMode */

/* eslint-enable */
