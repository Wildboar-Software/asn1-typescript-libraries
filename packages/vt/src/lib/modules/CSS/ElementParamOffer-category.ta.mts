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
 * @constant
 */
export
const ElementParamOffer_category_character: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary character
 * @constant
 */
export
const character: number = ElementParamOffer_category_character; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_boolean_
 * @constant
 */
export
const ElementParamOffer_category_boolean_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary boolean_
 * @constant
 */
export
const boolean_: number = ElementParamOffer_category_boolean_; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_symbolic
 * @constant
 */
export
const ElementParamOffer_category_symbolic: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary symbolic
 * @constant
 */
export
const symbolic: number = ElementParamOffer_category_symbolic; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_integer
 * @constant
 */
export
const ElementParamOffer_category_integer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary integer
 * @constant
 */
export
const integer: number = ElementParamOffer_category_integer; /* SHORT_NAMED_BIT */

/**
 * @summary ElementParamOffer_category_transparent
 * @constant
 */
export
const ElementParamOffer_category_transparent: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary transparent
 * @constant
 */
export
const transparent: number = ElementParamOffer_category_transparent; /* SHORT_NAMED_BIT */
export const _decode_ElementParamOffer_category = $._decodeBitString;
export const _encode_ElementParamOffer_category = $._encodeBitString;


/* eslint-enable */
