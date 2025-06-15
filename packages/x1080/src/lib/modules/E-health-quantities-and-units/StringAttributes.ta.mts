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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_StringAttributes */
export const _decode_StringAttributes = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StringAttributes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StringAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_StringAttributes */
export const _encode_StringAttributes = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_StringAttributes */

/* eslint-enable */
