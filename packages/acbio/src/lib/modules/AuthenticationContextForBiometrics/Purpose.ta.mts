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

/* START_OF_SYMBOL_DEFINITION _enum_for_Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```@enum {number}
 */
export enum _enum_for_Purpose {
    reference = 1,
    sample = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```@enum {number}
 */
export type Purpose = _enum_for_Purpose;
/* END_OF_SYMBOL_DEFINITION Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose */
/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```@enum {number}
 */
export const Purpose = _enum_for_Purpose;
/* END_OF_SYMBOL_DEFINITION Purpose */

/* START_OF_SYMBOL_DEFINITION Purpose_reference */
/**
 * @summary Purpose_reference
 * @constant
 * @type {number}
 */
export const Purpose_reference: Purpose =
    Purpose.reference; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_reference */

/* START_OF_SYMBOL_DEFINITION reference */
/**
 * @summary reference
 * @constant
 * @type {number}
 */
export const reference: Purpose =
    Purpose.reference; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reference */

/* START_OF_SYMBOL_DEFINITION Purpose_sample */
/**
 * @summary Purpose_sample
 * @constant
 * @type {number}
 */
export const Purpose_sample: Purpose =
    Purpose.sample; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Purpose_sample */

/* START_OF_SYMBOL_DEFINITION sample */
/**
 * @summary sample
 * @constant
 * @type {number}
 */
export const sample: Purpose =
    Purpose.sample; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sample */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Purpose */
let _cached_decoder_for_Purpose: $.ASN1Decoder<Purpose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Purpose */

/* START_OF_SYMBOL_DEFINITION _decode_Purpose */
/**
 * @summary Decodes an ASN.1 element into a(n) Purpose
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Purpose} The decoded data structure.
 */
export function _decode_Purpose(el: _Element) {
    if (!_cached_decoder_for_Purpose) {
        _cached_decoder_for_Purpose = $._decodeEnumerated;
    }
    return _cached_decoder_for_Purpose(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Purpose */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Purpose */
let _cached_encoder_for_Purpose: $.ASN1Encoder<Purpose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Purpose */

/* START_OF_SYMBOL_DEFINITION _encode_Purpose */
/**
 * @summary Encodes a(n) Purpose into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Purpose, encoded as an ASN.1 Element.
 */
export function _encode_Purpose(
    value: Purpose,
    elGetter: $.ASN1Encoder<Purpose>
) {
    if (!_cached_encoder_for_Purpose) {
        _cached_encoder_for_Purpose = $._encodeEnumerated;
    }
    return _cached_encoder_for_Purpose(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Purpose */

/* eslint-enable */
