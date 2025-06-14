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

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo */
/**
 * @summary LoopbackFailInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackFailInfo  ::=  INTEGER {
 *   errorRatioThresholdExceeded(0), loopbackTimeoutExceeded(1)}
 * ```
 */
export type LoopbackFailInfo = INTEGER;
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo_errorRatioThresholdExceeded */
/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_errorRatioThresholdExceeded: LoopbackFailInfo = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo_errorRatioThresholdExceeded */

/* START_OF_SYMBOL_DEFINITION errorRatioThresholdExceeded */
/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const errorRatioThresholdExceeded: LoopbackFailInfo = LoopbackFailInfo_errorRatioThresholdExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION errorRatioThresholdExceeded */

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo_loopbackTimeoutExceeded */
/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_loopbackTimeoutExceeded: LoopbackFailInfo = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo_loopbackTimeoutExceeded */

/* START_OF_SYMBOL_DEFINITION loopbackTimeoutExceeded */
/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const loopbackTimeoutExceeded: LoopbackFailInfo = LoopbackFailInfo_loopbackTimeoutExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackTimeoutExceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackFailInfo */
let _cached_decoder_for_LoopbackFailInfo: $.ASN1Decoder<LoopbackFailInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackFailInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackFailInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackFailInfo} The decoded data structure.
 */
export function _decode_LoopbackFailInfo(el: _Element) {
    if (!_cached_decoder_for_LoopbackFailInfo) {
        _cached_decoder_for_LoopbackFailInfo = $._decodeInteger;
    }
    return _cached_decoder_for_LoopbackFailInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackFailInfo */
let _cached_encoder_for_LoopbackFailInfo: $.ASN1Encoder<LoopbackFailInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackFailInfo */
/**
 * @summary Encodes a(n) LoopbackFailInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackFailInfo, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackFailInfo(
    value: LoopbackFailInfo,
    elGetter: $.ASN1Encoder<LoopbackFailInfo>
) {
    if (!_cached_encoder_for_LoopbackFailInfo) {
        _cached_encoder_for_LoopbackFailInfo = $._encodeInteger;
    }
    return _cached_encoder_for_LoopbackFailInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackFailInfo */

/* eslint-enable */
