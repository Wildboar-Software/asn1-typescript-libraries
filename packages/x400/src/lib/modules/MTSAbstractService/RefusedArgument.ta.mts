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
 * @summary RefusedArgument
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusedArgument  ::=  INTEGER {
 *   user-name(0), user-address(1), deliverable-content-types(2),
 *   deliverable-maximum-content-length(3),
 *   deliverable-encoded-information-types-constraints(4),
 *   deliverable-security-labels(5), recipient-assigned-redirections(6),
 *   restricted-delivery(7),
 *   retrieve-registrations(8), -- value 9 reserved for possible future extension to Register arguments
 *   restrict(10), permissible-operations(11), permissible-lowest-priority(12),
 *   permissible-encoded-information-types(13), permissible-content-types(14),
 *   permissible-maximum-content-length(15), permissible-security-context(16)
 * }(0..ub-integer-options)
 * ```
 */
export type RefusedArgument = INTEGER;

/**
 * @summary RefusedArgument_user_name
 * @constant
 * @type {number}
 */
export const RefusedArgument_user_name: 0 = 0 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_name
 * @constant
 * @type {number}
 */
export const user_name: 0 = RefusedArgument_user_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const RefusedArgument_user_address: 1 = 1 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const user_address: 1 = RefusedArgument_user_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_content_types: 2 = 2 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const deliverable_content_types: 2 = RefusedArgument_deliverable_content_types; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_maximum_content_length: 3 = 3 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const deliverable_maximum_content_length: 3 = RefusedArgument_deliverable_maximum_content_length; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_encoded_information_types_constraints: 4 = 4 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const deliverable_encoded_information_types_constraints: 4 = RefusedArgument_deliverable_encoded_information_types_constraints; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_security_labels: 5 = 5 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const deliverable_security_labels: 5 = RefusedArgument_deliverable_security_labels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const RefusedArgument_recipient_assigned_redirections: 6 = 6 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const recipient_assigned_redirections: 6 = RefusedArgument_recipient_assigned_redirections; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const RefusedArgument_restricted_delivery: 7 = 7 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const restricted_delivery: 7 = RefusedArgument_restricted_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const RefusedArgument_retrieve_registrations: 8 = 8 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const retrieve_registrations: 8 = RefusedArgument_retrieve_registrations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const RefusedArgument_restrict: 10 = 10 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const restrict: 10 = RefusedArgument_restrict; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_operations: 11 = 11 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const permissible_operations: 11 = RefusedArgument_permissible_operations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_lowest_priority: 12 = 12 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const permissible_lowest_priority: 12 = RefusedArgument_permissible_lowest_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_encoded_information_types: 13 = 13 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const permissible_encoded_information_types: 13 = RefusedArgument_permissible_encoded_information_types; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_content_types: 14 = 14 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const permissible_content_types: 14 = RefusedArgument_permissible_content_types; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_maximum_content_length: 15 = 15 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const permissible_maximum_content_length: 15 = RefusedArgument_permissible_maximum_content_length; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_security_context: 16 = 16 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const permissible_security_context: 16 = RefusedArgument_permissible_security_context; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RefusedArgument: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_RefusedArgument: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
