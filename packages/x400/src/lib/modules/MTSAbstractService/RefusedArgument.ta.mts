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
export const RefusedArgument_user_name = 0 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_name
 * @constant
 * @type {number}
 */
export const user_name = RefusedArgument_user_name satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const RefusedArgument_user_address = 1 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const user_address = RefusedArgument_user_address satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_content_types = 2 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const deliverable_content_types = RefusedArgument_deliverable_content_types satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_maximum_content_length = 3 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const deliverable_maximum_content_length = RefusedArgument_deliverable_maximum_content_length satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_encoded_information_types_constraints = 4 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const deliverable_encoded_information_types_constraints = RefusedArgument_deliverable_encoded_information_types_constraints satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_security_labels = 5 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const deliverable_security_labels = RefusedArgument_deliverable_security_labels satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const RefusedArgument_recipient_assigned_redirections = 6 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const recipient_assigned_redirections = RefusedArgument_recipient_assigned_redirections satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const RefusedArgument_restricted_delivery = 7 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const restricted_delivery = RefusedArgument_restricted_delivery satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const RefusedArgument_retrieve_registrations = 8 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const retrieve_registrations = RefusedArgument_retrieve_registrations satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const RefusedArgument_restrict = 10 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const restrict = RefusedArgument_restrict satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_operations = 11 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const permissible_operations = RefusedArgument_permissible_operations satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_lowest_priority = 12 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const permissible_lowest_priority = RefusedArgument_permissible_lowest_priority satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_encoded_information_types = 13 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const permissible_encoded_information_types = RefusedArgument_permissible_encoded_information_types satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_content_types = 14 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const permissible_content_types = RefusedArgument_permissible_content_types satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_maximum_content_length = 15 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const permissible_maximum_content_length = RefusedArgument_permissible_maximum_content_length satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_security_context = 16 satisfies RefusedArgument; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const permissible_security_context = RefusedArgument_permissible_security_context satisfies RefusedArgument; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RefusedArgument = $._decodeInteger;


export const _encode_RefusedArgument = $._encodeInteger;


/* eslint-enable */
