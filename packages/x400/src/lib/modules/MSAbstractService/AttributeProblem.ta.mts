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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AttributeProblem */
/**
 * @summary AttributeProblem
 * @description
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
/* END_OF_SYMBOL_DEFINITION AttributeProblem */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_invalid_attribute_value */
/**
 * @summary AttributeProblem_invalid_attribute_value
 * @constant
 * @type {number}
 */
export const AttributeProblem_invalid_attribute_value: AttributeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_invalid_attribute_value */

/* START_OF_SYMBOL_DEFINITION invalid_attribute_value */
/**
 * @summary AttributeProblem_invalid_attribute_value
 * @constant
 * @type {number}
 */
export const invalid_attribute_value: AttributeProblem = AttributeProblem_invalid_attribute_value; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_attribute_value */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_unavailable_attribute_type */
/**
 * @summary AttributeProblem_unavailable_attribute_type
 * @constant
 * @type {number}
 */
export const AttributeProblem_unavailable_attribute_type: AttributeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_unavailable_attribute_type */

/* START_OF_SYMBOL_DEFINITION unavailable_attribute_type */
/**
 * @summary AttributeProblem_unavailable_attribute_type
 * @constant
 * @type {number}
 */
export const unavailable_attribute_type: AttributeProblem = AttributeProblem_unavailable_attribute_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable_attribute_type */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_matching */
/**
 * @summary AttributeProblem_inappropriate_matching
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_matching: AttributeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_matching */

/* START_OF_SYMBOL_DEFINITION inappropriate_matching */
/**
 * @summary AttributeProblem_inappropriate_matching
 * @constant
 * @type {number}
 */
export const inappropriate_matching: AttributeProblem = AttributeProblem_inappropriate_matching; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriate_matching */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_attribute_type_not_subscribed */
/**
 * @summary AttributeProblem_attribute_type_not_subscribed
 * @constant
 * @type {number}
 */
export const AttributeProblem_attribute_type_not_subscribed: AttributeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_attribute_type_not_subscribed */

/* START_OF_SYMBOL_DEFINITION attribute_type_not_subscribed */
/**
 * @summary AttributeProblem_attribute_type_not_subscribed
 * @constant
 * @type {number}
 */
export const attribute_type_not_subscribed: AttributeProblem = AttributeProblem_attribute_type_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute_type_not_subscribed */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_for_operation */
/**
 * @summary AttributeProblem_inappropriate_for_operation
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_for_operation: AttributeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_for_operation */

/* START_OF_SYMBOL_DEFINITION inappropriate_for_operation */
/**
 * @summary AttributeProblem_inappropriate_for_operation
 * @constant
 * @type {number}
 */
export const inappropriate_for_operation: AttributeProblem = AttributeProblem_inappropriate_for_operation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriate_for_operation */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_modification */
/**
 * @summary AttributeProblem_inappropriate_modification
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriate_modification: AttributeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_inappropriate_modification */

/* START_OF_SYMBOL_DEFINITION inappropriate_modification */
/**
 * @summary AttributeProblem_inappropriate_modification
 * @constant
 * @type {number}
 */
export const inappropriate_modification: AttributeProblem = AttributeProblem_inappropriate_modification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION inappropriate_modification */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_single_valued_attribute */
/**
 * @summary AttributeProblem_single_valued_attribute
 * @constant
 * @type {number}
 */
export const AttributeProblem_single_valued_attribute: AttributeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_single_valued_attribute */

/* START_OF_SYMBOL_DEFINITION single_valued_attribute */
/**
 * @summary AttributeProblem_single_valued_attribute
 * @constant
 * @type {number}
 */
export const single_valued_attribute: AttributeProblem = AttributeProblem_single_valued_attribute; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION single_valued_attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeProblem */
export const _decode_AttributeProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeProblem */
export const _encode_AttributeProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeProblem */

/* eslint-enable */
