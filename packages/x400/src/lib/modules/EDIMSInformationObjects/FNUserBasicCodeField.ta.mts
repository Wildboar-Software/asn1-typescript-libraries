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
 * @summary FNUserBasicCodeField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUserBasicCodeField  ::=  INTEGER {
 *   unspecified(0), forwarded-for-archiving(1), forwarded-for-information(2),
 *   forwarded-for-additional-action(3), subscription-changed(4),
 *   heading-field-not-supported(5), bodypart-type-not-supported(6),
 *   message-type-not-supported(7), syntax-identifier-not-supported(8),
 *   interchange-sender-unknown(9), user-defined-reason(10)}(0..ub-reason-code)
 * ```
 */
export type FNUserBasicCodeField = INTEGER;

/**
 * @summary FNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_unspecified = 0 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified = FNUserBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_archiving
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_archiving = 1 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_archiving
 * @constant
 * @type {number}
 */
export const forwarded_for_archiving = FNUserBasicCodeField_forwarded_for_archiving; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_information
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_information = 2 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_information
 * @constant
 * @type {number}
 */
export const forwarded_for_information = FNUserBasicCodeField_forwarded_for_information; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_additional_action
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_additional_action = 3 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_forwarded_for_additional_action
 * @constant
 * @type {number}
 */
export const forwarded_for_additional_action = FNUserBasicCodeField_forwarded_for_additional_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_subscription_changed
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_subscription_changed = 4 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_subscription_changed
 * @constant
 * @type {number}
 */
export const subscription_changed = FNUserBasicCodeField_subscription_changed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_heading_field_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_heading_field_not_supported = 5 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_heading_field_not_supported
 * @constant
 * @type {number}
 */
export const heading_field_not_supported = FNUserBasicCodeField_heading_field_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_bodypart_type_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_bodypart_type_not_supported = 6 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_bodypart_type_not_supported
 * @constant
 * @type {number}
 */
export const bodypart_type_not_supported = FNUserBasicCodeField_bodypart_type_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_message_type_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_message_type_not_supported = 7 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_message_type_not_supported
 * @constant
 * @type {number}
 */
export const message_type_not_supported = FNUserBasicCodeField_message_type_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_syntax_identifier_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_syntax_identifier_not_supported = 8 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_syntax_identifier_not_supported
 * @constant
 * @type {number}
 */
export const syntax_identifier_not_supported = FNUserBasicCodeField_syntax_identifier_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_interchange_sender_unknown = 9 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown = FNUserBasicCodeField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_user_defined_reason = 10 satisfies FNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const user_defined_reason = FNUserBasicCodeField_user_defined_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FNUserBasicCodeField = $._decodeInteger;


export const _encode_FNUserBasicCodeField = $._encodeInteger;


/* eslint-enable */
