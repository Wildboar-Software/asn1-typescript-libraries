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

/* START_OF_SYMBOL_DEFINITION Type */
/**
 * @summary Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Type  ::=  INTEGER {connectionOriented(0), connectionless(1)}
 * ```
 */
export type Type = INTEGER;
/* END_OF_SYMBOL_DEFINITION Type */

/* START_OF_SYMBOL_DEFINITION Type_connectionOriented */
/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const Type_connectionOriented: Type = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_connectionOriented */

/* START_OF_SYMBOL_DEFINITION connectionOriented */
/**
 * @summary Type_connectionOriented
 * @constant
 * @type {number}
 */
export const connectionOriented: Type = Type_connectionOriented; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION connectionOriented */

/* START_OF_SYMBOL_DEFINITION Type_connectionless */
/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const Type_connectionless: Type = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Type_connectionless */

/* START_OF_SYMBOL_DEFINITION connectionless */
/**
 * @summary Type_connectionless
 * @constant
 * @type {number}
 */
export const connectionless: Type = Type_connectionless; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION connectionless */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Type */
let _cached_decoder_for_Type: $.ASN1Decoder<Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Type */

/* START_OF_SYMBOL_DEFINITION _decode_Type */
/**
 * @summary Decodes an ASN.1 element into a(n) Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Type} The decoded data structure.
 */
export function _decode_Type(el: _Element) {
    if (!_cached_decoder_for_Type) {
        _cached_decoder_for_Type = $._decodeInteger;
    }
    return _cached_decoder_for_Type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Type */
let _cached_encoder_for_Type: $.ASN1Encoder<Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Type */

/* START_OF_SYMBOL_DEFINITION _encode_Type */
/**
 * @summary Encodes a(n) Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Type, encoded as an ASN.1 Element.
 */
export function _encode_Type(value: Type, elGetter: $.ASN1Encoder<Type>) {
    if (!_cached_encoder_for_Type) {
        _cached_encoder_for_Type = $._encodeInteger;
    }
    return _cached_encoder_for_Type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Type */

/* eslint-enable */
