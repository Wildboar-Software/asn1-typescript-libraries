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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StrengthOfFunction {
    basic = 0,
    medium = 1,
    high = 2,
}

/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```
 * 
 * @enum {number}
 */
export
type StrengthOfFunction = _enum_for_StrengthOfFunction;

/**
 * @summary StrengthOfFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrengthOfFunction  ::=  ENUMERATED {
 *     basic (0),
 *     medium (1),
 *     high (2) }
 * ```
 * 
 * @enum {number}
 */
export
const StrengthOfFunction = _enum_for_StrengthOfFunction;

/**
 * @summary StrengthOfFunction_basic
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_basic: StrengthOfFunction = StrengthOfFunction.basic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basic
 * @constant
 * @type {number}
 */
export
const basic: StrengthOfFunction = StrengthOfFunction.basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_medium
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_medium: StrengthOfFunction = StrengthOfFunction.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: StrengthOfFunction = StrengthOfFunction.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_high
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_high: StrengthOfFunction = StrengthOfFunction.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: StrengthOfFunction = StrengthOfFunction.high; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_StrengthOfFunction = $._decodeEnumerated;


export const _encode_StrengthOfFunction = $._encodeEnumerated;


/* eslint-enable */
