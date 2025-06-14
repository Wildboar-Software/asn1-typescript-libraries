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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResponseSync */
/**
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export enum _enum_for_ResponseSync {
    singleCast = -1,
    bestEffort = 0,
    atomic = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResponseSync */

/* START_OF_SYMBOL_DEFINITION ResponseSync */
/**
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export type ResponseSync = _enum_for_ResponseSync;
/* END_OF_SYMBOL_DEFINITION ResponseSync */

/* START_OF_SYMBOL_DEFINITION ResponseSync */
/**
 * @summary ResponseSync
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseSync  ::=  ENUMERATED {singleCast(-1), bestEffort(0), atomic(1)}
 * ```@enum {number}
 */
export const ResponseSync = _enum_for_ResponseSync;
/* END_OF_SYMBOL_DEFINITION ResponseSync */

/* START_OF_SYMBOL_DEFINITION ResponseSync_singleCast */
/**
 * @summary ResponseSync_singleCast
 * @constant
 * @type {number}
 */
export const ResponseSync_singleCast: ResponseSync =
    ResponseSync.singleCast; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseSync_singleCast */

/* START_OF_SYMBOL_DEFINITION singleCast */
/**
 * @summary singleCast
 * @constant
 * @type {number}
 */
export const singleCast: ResponseSync =
    ResponseSync.singleCast; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION singleCast */

/* START_OF_SYMBOL_DEFINITION ResponseSync_bestEffort */
/**
 * @summary ResponseSync_bestEffort
 * @constant
 * @type {number}
 */
export const ResponseSync_bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseSync_bestEffort */

/* START_OF_SYMBOL_DEFINITION bestEffort */
/**
 * @summary bestEffort
 * @constant
 * @type {number}
 */
export const bestEffort: ResponseSync =
    ResponseSync.bestEffort; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bestEffort */

/* START_OF_SYMBOL_DEFINITION ResponseSync_atomic */
/**
 * @summary ResponseSync_atomic
 * @constant
 * @type {number}
 */
export const ResponseSync_atomic: ResponseSync =
    ResponseSync.atomic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseSync_atomic */

/* START_OF_SYMBOL_DEFINITION atomic */
/**
 * @summary atomic
 * @constant
 * @type {number}
 */
export const atomic: ResponseSync =
    ResponseSync.atomic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION atomic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseSync */
let _cached_decoder_for_ResponseSync: $.ASN1Decoder<ResponseSync> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseSync */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseSync */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseSync
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseSync} The decoded data structure.
 */
export function _decode_ResponseSync(el: _Element) {
    if (!_cached_decoder_for_ResponseSync) {
        _cached_decoder_for_ResponseSync = $._decodeEnumerated;
    }
    return _cached_decoder_for_ResponseSync(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseSync */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseSync */
let _cached_encoder_for_ResponseSync: $.ASN1Encoder<ResponseSync> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseSync */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseSync */
/**
 * @summary Encodes a(n) ResponseSync into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseSync, encoded as an ASN.1 Element.
 */
export function _encode_ResponseSync(
    value: ResponseSync,
    elGetter: $.ASN1Encoder<ResponseSync>
) {
    if (!_cached_encoder_for_ResponseSync) {
        _cached_encoder_for_ResponseSync = $._encodeEnumerated;
    }
    return _cached_encoder_for_ResponseSync(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseSync */

/* eslint-enable */
