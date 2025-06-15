/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION StringAttributes */
/**
 * @summary StringAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StringAttributes  ::=  BIT STRING {italic(0), betweenParenthesis(1)}
 * ```
 */
export type StringAttributes = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION StringAttributes */

/* START_OF_SYMBOL_DEFINITION StringAttributes_italic */
/**
 * @summary StringAttributes_italic
 * @constant
 */
export const StringAttributes_italic: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION StringAttributes_italic */

/* START_OF_SYMBOL_DEFINITION italic */
/**
 * @summary italic
 * @constant
 */
export const italic: number = StringAttributes_italic; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION italic */

/* START_OF_SYMBOL_DEFINITION StringAttributes_betweenParenthesis */
/**
 * @summary StringAttributes_betweenParenthesis
 * @constant
 */
export const StringAttributes_betweenParenthesis: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION StringAttributes_betweenParenthesis */

/* START_OF_SYMBOL_DEFINITION betweenParenthesis */
/**
 * @summary betweenParenthesis
 * @constant
 */
export const betweenParenthesis: number = StringAttributes_betweenParenthesis; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION betweenParenthesis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StringAttributes */
let _cached_decoder_for_StringAttributes: $.ASN1Decoder<StringAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_StringAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) StringAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StringAttributes} The decoded data structure.
 */
export function _decode_StringAttributes(el: _Element) {
    if (!_cached_decoder_for_StringAttributes) {
        _cached_decoder_for_StringAttributes = $._decodeBitString;
    }
    return _cached_decoder_for_StringAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StringAttributes */
let _cached_encoder_for_StringAttributes: $.ASN1Encoder<StringAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_StringAttributes */
/**
 * @summary Encodes a(n) StringAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringAttributes, encoded as an ASN.1 Element.
 */
export function _encode_StringAttributes(
    value: StringAttributes,
    elGetter: $.ASN1Encoder<StringAttributes>
) {
    if (!_cached_encoder_for_StringAttributes) {
        _cached_encoder_for_StringAttributes = $._encodeBitString;
    }
    return _cached_encoder_for_StringAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StringAttributes */

/* eslint-enable */
