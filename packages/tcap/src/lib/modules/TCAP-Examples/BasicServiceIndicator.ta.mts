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

/* START_OF_SYMBOL_DEFINITION _enum_for_BasicServiceIndicator */
/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```@enum {number}
 */
export enum _enum_for_BasicServiceIndicator {
    speech = 0,
    unrestrictedDigital = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION BasicServiceIndicator */
/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```@enum {number}
 */
export type BasicServiceIndicator = _enum_for_BasicServiceIndicator;
/* END_OF_SYMBOL_DEFINITION BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION BasicServiceIndicator */
/**
 * @summary BasicServiceIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicServiceIndicator  ::=  ENUMERATED {speech(0), unrestrictedDigital(1)}
 * ```@enum {number}
 */
export const BasicServiceIndicator = _enum_for_BasicServiceIndicator;
/* END_OF_SYMBOL_DEFINITION BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION BasicServiceIndicator_speech */
/**
 * @summary BasicServiceIndicator_speech
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_speech: BasicServiceIndicator =
    BasicServiceIndicator.speech; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BasicServiceIndicator_speech */

/* START_OF_SYMBOL_DEFINITION speech */
/**
 * @summary speech
 * @constant
 * @type {number}
 */
export const speech: BasicServiceIndicator =
    BasicServiceIndicator.speech; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION speech */

/* START_OF_SYMBOL_DEFINITION BasicServiceIndicator_unrestrictedDigital */
/**
 * @summary BasicServiceIndicator_unrestrictedDigital
 * @constant
 * @type {number}
 */
export const BasicServiceIndicator_unrestrictedDigital: BasicServiceIndicator =
    BasicServiceIndicator.unrestrictedDigital; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BasicServiceIndicator_unrestrictedDigital */

/* START_OF_SYMBOL_DEFINITION unrestrictedDigital */
/**
 * @summary unrestrictedDigital
 * @constant
 * @type {number}
 */
export const unrestrictedDigital: BasicServiceIndicator =
    BasicServiceIndicator.unrestrictedDigital; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unrestrictedDigital */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicServiceIndicator */
let _cached_decoder_for_BasicServiceIndicator: $.ASN1Decoder<BasicServiceIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_BasicServiceIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) BasicServiceIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicServiceIndicator} The decoded data structure.
 */
export function _decode_BasicServiceIndicator(el: _Element) {
    if (!_cached_decoder_for_BasicServiceIndicator) {
        _cached_decoder_for_BasicServiceIndicator = $._decodeEnumerated;
    }
    return _cached_decoder_for_BasicServiceIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicServiceIndicator */
let _cached_encoder_for_BasicServiceIndicator: $.ASN1Encoder<BasicServiceIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicServiceIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_BasicServiceIndicator */
/**
 * @summary Encodes a(n) BasicServiceIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicServiceIndicator, encoded as an ASN.1 Element.
 */
export function _encode_BasicServiceIndicator(
    value: BasicServiceIndicator,
    elGetter: $.ASN1Encoder<BasicServiceIndicator>
) {
    if (!_cached_encoder_for_BasicServiceIndicator) {
        _cached_encoder_for_BasicServiceIndicator = $._encodeEnumerated;
    }
    return _cached_encoder_for_BasicServiceIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BasicServiceIndicator */

/* eslint-enable */
