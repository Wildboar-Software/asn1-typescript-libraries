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
 * @summary ParameterValues_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-category ::= INTEGER {
 *     character   (0),
 *     boolean     (1),
 *     symbolic    (2),
 *     integer     (3),
 *     transparent (4)
 * }
 * ```
 */
export
type ParameterValues_category = INTEGER;

/**
 * @summary ParameterValues_category_character
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_character: ParameterValues_category = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_character
 * @constant
 * @type {number}
 */
export
const character: ParameterValues_category = ParameterValues_category_character; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_boolean_
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_boolean_: ParameterValues_category = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_boolean_
 * @constant
 * @type {number}
 */
export
const boolean_: ParameterValues_category = ParameterValues_category_boolean_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_symbolic
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_symbolic: ParameterValues_category = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_symbolic
 * @constant
 * @type {number}
 */
export
const symbolic: ParameterValues_category = ParameterValues_category_symbolic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_integer
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_integer: ParameterValues_category = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_integer
 * @constant
 * @type {number}
 */
export
const integer: ParameterValues_category = ParameterValues_category_integer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_transparent
 * @constant
 * @type {number}
 */
export
const ParameterValues_category_transparent: ParameterValues_category = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ParameterValues_category_transparent
 * @constant
 * @type {number}
 */
export
const transparent: ParameterValues_category = ParameterValues_category_transparent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ParameterValues_category = $._decodeInteger;
export const _encode_ParameterValues_category = $._encodeInteger;


/* eslint-enable */
