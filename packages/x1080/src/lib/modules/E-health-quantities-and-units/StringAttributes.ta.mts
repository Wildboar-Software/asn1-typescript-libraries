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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary StringAttributes_italic
 * @constant
 */
export const StringAttributes_italic: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary italic
 * @constant
 */
export const italic: number = StringAttributes_italic; /* SHORT_NAMED_BIT */


/**
 * @summary StringAttributes_betweenParenthesis
 * @constant
 */
export const StringAttributes_betweenParenthesis: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary betweenParenthesis
 * @constant
 */
export const betweenParenthesis: number = StringAttributes_betweenParenthesis; /* SHORT_NAMED_BIT */




export const _decode_StringAttributes = $._decodeBitString;




export const _encode_StringAttributes = $._encodeBitString;


/* eslint-enable */
