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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StrengthOfFunction
 * @description
 *
 * Common Criteria strength of function claimed for the TBB. TCG
 * Platform Certificate Profile v1.1 r19 §3.1.1.
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
const _enum_for_StrengthOfFunction = {
    basic: 0,
    medium: 1,
    high: 2,
} as const;

export
type _enum_for_StrengthOfFunction = (typeof _enum_for_StrengthOfFunction)[keyof typeof _enum_for_StrengthOfFunction];

/**
 * @summary StrengthOfFunction
 * @description
 *
 * Common Criteria strength of function claimed for the TBB. TCG
 * Platform Certificate Profile v1.1 r19 §3.1.1.
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
 * Common Criteria strength of function claimed for the TBB. TCG
 * Platform Certificate Profile v1.1 r19 §3.1.1.
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
 * @description
 *
 * Basic strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_basic: StrengthOfFunction = StrengthOfFunction.basic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basic
 * @description
 *
 * Basic strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const basic: StrengthOfFunction = StrengthOfFunction.basic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_medium
 * @description
 *
 * Medium strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_medium: StrengthOfFunction = StrengthOfFunction.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @description
 *
 * Medium strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const medium: StrengthOfFunction = StrengthOfFunction.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StrengthOfFunction_high
 * @description
 *
 * High strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const StrengthOfFunction_high: StrengthOfFunction = StrengthOfFunction.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 *
 * High strength of function. §3.1.1.
 *
 * @constant
 * @type {number}
 */
export
const high: StrengthOfFunction = StrengthOfFunction.high; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_StrengthOfFunction(el: _Element): StrengthOfFunction {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case StrengthOfFunction.basic: return StrengthOfFunction.basic;
        case StrengthOfFunction.medium: return StrengthOfFunction.medium;
        case StrengthOfFunction.high: return StrengthOfFunction.high;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for StrengthOfFunction.",
                el,
            );
    }
}


export const _encode_StrengthOfFunction: $.ASN1Encoder<StrengthOfFunction> = $._encodeEnumerated as $.ASN1Encoder<StrengthOfFunction>;


/* eslint-enable */
