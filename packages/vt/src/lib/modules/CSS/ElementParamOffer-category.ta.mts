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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ElementParamOffer_category
 * @description
 *
 * Offered `CO-category` for one data element. Set bits are
 * offered. Default category is `"boolean"`.
 * ISO/IEC 9040:1997 table 9, §20.2.3–§20.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamOffer-category ::= BIT STRING {
 *     character   (0),
 *     boolean     (1),
 *     symbolic    (2),
 *     integer     (3),
 *     transparent (4)
 * }
 * ```
 */
export
type ElementParamOffer_category = BIT_STRING;

/**
 * @summary ElementParamOffer_category_character
 * @description
 *
 * One string; all chars share `CO-repertoire-assignment`.
 * New value fully replaces old. Initial empty = zero-length
 * string. Size = max length (default 16).
 * ISO/IEC 9040:1997 §20.2.3–§20.2.5.
 * @constant
 */
export
const ElementParamOffer_category_character: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary character
 * @description
 *
 * One string; all chars share `CO-repertoire-assignment`.
 * New value fully replaces old. Initial empty = zero-length
 * string. Size = max length (default 16).
 * ISO/IEC 9040:1997 §20.2.3–§20.2.5.
 * @constant
 */
export
const character: number = ElementParamOffer_category_character; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_boolean_
 * @description
 *
 * One or more booleans, each independently updatable (mask
 * in `COupdate`). Initial each `false`. Size = max number of
 * booleans (default 16). Default category.
 * ISO/IEC 9040:1997 table 9, §20.2.3.
 * @constant
 */
export
const ElementParamOffer_category_boolean_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary boolean_
 * @description
 *
 * One or more booleans, each independently updatable (mask
 * in `COupdate`). Initial each `false`. Size = max number of
 * booleans (default 16). Default category.
 * ISO/IEC 9040:1997 table 9, §20.2.3.
 * @constant
 */
export
const boolean_: number = ElementParamOffer_category_boolean_; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_symbolic
 * @description
 *
 * One value encoded as integer 0..size-1; 0 is always
 * `"null"`. Size = max distinct values (default 256).
 * ISO/IEC 9040:1997 §20.2.6.
 * @constant
 */
export
const ElementParamOffer_category_symbolic: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary symbolic
 * @description
 *
 * One value encoded as integer 0..size-1; 0 is always
 * `"null"`. Size = max distinct values (default 256).
 * ISO/IEC 9040:1997 §20.2.6.
 * @constant
 */
export
const symbolic: number = ElementParamOffer_category_symbolic; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_integer
 * @description
 *
 * Single integer 0..size. Initial 0. Size = max integer
 * value (default 65535). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 */
export
const ElementParamOffer_category_integer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary integer
 * @description
 *
 * Single integer 0..size. Initial 0. Size = max integer
 * value (default 65535). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 */
export
const integer: number = ElementParamOffer_category_integer; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_transparent
 * @description
 *
 * Uninterpreted bit string. Initial all 0. Size = max bits
 * (default 16). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 */
export
const ElementParamOffer_category_transparent: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary transparent
 * @description
 *
 * Uninterpreted bit string. Initial all 0. Size = max bits
 * (default 16). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 */
export
const transparent: number = ElementParamOffer_category_transparent; /* SHORT_NAMED_BIT */
export const _decode_ElementParamOffer_category = $._decodeBitString;
export const _encode_ElementParamOffer_category = $._encodeBitString;


/* eslint-enable */
