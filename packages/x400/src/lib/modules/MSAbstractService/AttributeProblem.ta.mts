/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary AttributeProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeProblem  ::=  INTEGER {
 *   invalid-attribute-value(0), unavailable-attribute-type(1),
 *   inappropriate-matching(2), attribute-type-not-subscribed(3),
 *   inappropriate-for-operation(4),
 *   -- 1994 extensions
 *   inappropriate-modification(5), single-valued-attribute(6)
 * }(0..ub-error-reasons)
 * ```
 */
export type AttributeProblem = INTEGER;

/**
 * @summary AttributeProblem_invalid_attribute_value
 * @constant
 * @type {number}
 */
export const AttributeProblem_invalid_attribute_value: 0 = 0 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_invalid_attribute_value
 * @constant
 * @type {number}
 */
export const invalid_attribute_value: 0 = AttributeProblem_invalid_attribute_value; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_unavailable_attribute_type
 * @constant
 * @type {number}
 */
export const AttributeProblem_unavailable_attribute_type: 1 = 1 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_unavailable_attribute_type
 * @constant
 * @type {number}
 */
export const unavailable_attribute_type: 1 = AttributeProblem_unavailable_attribute_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_matching
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_matching: 2 = 2 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_matching
 * @constant
 * @type {number}
 */
export const inappropriate_matching: 2 = AttributeProblem_inappropriate_matching; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attribute_type_not_subscribed
 * @constant
 * @type {number}
 */
export const AttributeProblem_attribute_type_not_subscribed: 3 = 3 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_attribute_type_not_subscribed
 * @constant
 * @type {number}
 */
export const attribute_type_not_subscribed: 3 = AttributeProblem_attribute_type_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_for_operation
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_for_operation: 4 = 4 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_for_operation
 * @constant
 * @type {number}
 */
export const inappropriate_for_operation: 4 = AttributeProblem_inappropriate_for_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_modification
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_modification: 5 = 5 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_inappropriate_modification
 * @constant
 * @type {number}
 */
export const inappropriate_modification: 5 = AttributeProblem_inappropriate_modification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_single_valued_attribute
 * @constant
 * @type {number}
 */
export const AttributeProblem_single_valued_attribute: 6 = 6 satisfies AttributeProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AttributeProblem_single_valued_attribute
 * @constant
 * @type {number}
 */
export const single_valued_attribute: 6 = AttributeProblem_single_valued_attribute; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AttributeProblem: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AttributeProblem: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
