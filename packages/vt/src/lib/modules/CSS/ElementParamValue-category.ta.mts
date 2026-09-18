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
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_character: ElementParamValue_category = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_character
 * @constant
 * @type {number}
 */
export
const character: ElementParamValue_category = ElementParamValue_category_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_boolean_
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_boolean_: ElementParamValue_category = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: ElementParamValue_category = ElementParamValue_category_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_symbolic
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_symbolic: ElementParamValue_category = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_symbolic
 * @constant
 * @type {number}
 */
export
const symbolic: ElementParamValue_category = ElementParamValue_category_symbolic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_integer
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_integer: ElementParamValue_category = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_integer
 * @constant
 * @type {number}
 */
export
const integer: ElementParamValue_category = ElementParamValue_category_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_transparent
 * @constant
 * @type {number}
 */
export
const ElementParamValue_category_transparent: ElementParamValue_category = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ElementParamValue_category_transparent
 * @constant
 * @type {number}
 */
export
const transparent: ElementParamValue_category = ElementParamValue_category_transparent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ElementParamValue_category = $._decodeInteger;
export const _encode_ElementParamValue_category = $._encodeInteger;


/* eslint-enable */
