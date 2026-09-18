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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ElementParamValue_category
 * @description
 *
 * Selected `CO-category` for one data element. Default
 * `"boolean"`. ISO/IEC 9040:1997 table 9, §20.2.3–§20.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementParamValue-category ::= INTEGER {
 *     character   (0),
 *     boolean     (1),
 *     symbolic    (2),
 *     integer     (3),
 *     transparent (4)
 * }
 * ```
 */
export
type ElementParamValue_category = INTEGER;

/**
 * @summary ElementParamValue_category_character
 * @description
 *
 * One string; all chars share `CO-repertoire-assignment`.
 * New value fully replaces old. Initial empty = zero-length
 * string. Size = max length (default 16).
 * ISO/IEC 9040:1997 §20.2.3–§20.2.5.
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_character: ElementParamValue_category = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_character
 * @description
 *
 * One string; all chars share `CO-repertoire-assignment`.
 * New value fully replaces old. Initial empty = zero-length
 * string. Size = max length (default 16).
 * ISO/IEC 9040:1997 §20.2.3–§20.2.5.
 * @constant
 * @type {number}
 */
export
const character: ElementParamValue_category = ElementParamValue_category_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_boolean_
 * @description
 *
 * One or more booleans, each independently updatable (mask
 * in `COupdate`). Initial each `false`. Size = max number of
 * booleans (default 16). Default category.
 * ISO/IEC 9040:1997 table 9, §20.2.3.
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_boolean_: ElementParamValue_category = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_boolean_
 * @description
 *
 * One or more booleans, each independently updatable (mask
 * in `COupdate`). Initial each `false`. Size = max number of
 * booleans (default 16). Default category.
 * ISO/IEC 9040:1997 table 9, §20.2.3.
 * @constant
 * @type {number}
 */
export
const boolean_: ElementParamValue_category = ElementParamValue_category_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_symbolic
 * @description
 *
 * One value encoded as integer 0..size-1; 0 is always
 * `"null"`. Size = max distinct values (default 256).
 * ISO/IEC 9040:1997 §20.2.6.
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_symbolic: ElementParamValue_category = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_symbolic
 * @description
 *
 * One value encoded as integer 0..size-1; 0 is always
 * `"null"`. Size = max distinct values (default 256).
 * ISO/IEC 9040:1997 §20.2.6.
 * @constant
 * @type {number}
 */
export
const symbolic: ElementParamValue_category = ElementParamValue_category_symbolic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_integer
 * @description
 *
 * Single integer 0..size. Initial 0. Size = max integer
 * value (default 65535). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_integer: ElementParamValue_category = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_integer
 * @description
 *
 * Single integer 0..size. Initial 0. Size = max integer
 * value (default 65535). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 * @type {number}
 */
export
const integer: ElementParamValue_category = ElementParamValue_category_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_transparent
 * @description
 *
 * Uninterpreted bit string. Initial all 0. Size = max bits
 * (default 16). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_transparent: ElementParamValue_category = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_transparent
 * @description
 *
 * Uninterpreted bit string. Initial all 0. Size = max bits
 * (default 16). ISO/IEC 9040:1997 §20.2.2–§20.2.4.
 * @constant
 * @type {number}
 */
export
const transparent: ElementParamValue_category = ElementParamValue_category_transparent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ElementParamValue_category = $._decodeInteger;
export const _encode_ElementParamValue_category = $._encodeInteger;


/* eslint-enable */
