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

/* START_OF_SYMBOL_DEFINITION RefusedArgument */
/**
 * @summary RefusedArgument
 * @description
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
/* END_OF_SYMBOL_DEFINITION RefusedArgument */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_user_name */
/**
 * @summary RefusedArgument_user_name
 * @constant
 * @type {number}
 */
export const RefusedArgument_user_name: RefusedArgument = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_user_name */

/* START_OF_SYMBOL_DEFINITION user_name */
/**
 * @summary RefusedArgument_user_name
 * @constant
 * @type {number}
 */
export const user_name: RefusedArgument = RefusedArgument_user_name; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_name */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_user_address */
/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const RefusedArgument_user_address: RefusedArgument = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_user_address */

/* START_OF_SYMBOL_DEFINITION user_address */
/**
 * @summary RefusedArgument_user_address
 * @constant
 * @type {number}
 */
export const user_address: RefusedArgument = RefusedArgument_user_address; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_address */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_content_types */
/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_content_types: RefusedArgument = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_content_types */

/* START_OF_SYMBOL_DEFINITION deliverable_content_types */
/**
 * @summary RefusedArgument_deliverable_content_types
 * @constant
 * @type {number}
 */
export const deliverable_content_types: RefusedArgument = RefusedArgument_deliverable_content_types; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deliverable_content_types */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_maximum_content_length */
/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_maximum_content_length: RefusedArgument = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_maximum_content_length */

/* START_OF_SYMBOL_DEFINITION deliverable_maximum_content_length */
/**
 * @summary RefusedArgument_deliverable_maximum_content_length
 * @constant
 * @type {number}
 */
export const deliverable_maximum_content_length: RefusedArgument = RefusedArgument_deliverable_maximum_content_length; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deliverable_maximum_content_length */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_encoded_information_types_constraints */
/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_encoded_information_types_constraints: RefusedArgument = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_encoded_information_types_constraints */

/* START_OF_SYMBOL_DEFINITION deliverable_encoded_information_types_constraints */
/**
 * @summary RefusedArgument_deliverable_encoded_information_types_constraints
 * @constant
 * @type {number}
 */
export const deliverable_encoded_information_types_constraints: RefusedArgument = RefusedArgument_deliverable_encoded_information_types_constraints; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deliverable_encoded_information_types_constraints */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_security_labels */
/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const RefusedArgument_deliverable_security_labels: RefusedArgument = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_deliverable_security_labels */

/* START_OF_SYMBOL_DEFINITION deliverable_security_labels */
/**
 * @summary RefusedArgument_deliverable_security_labels
 * @constant
 * @type {number}
 */
export const deliverable_security_labels: RefusedArgument = RefusedArgument_deliverable_security_labels; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deliverable_security_labels */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_recipient_assigned_redirections */
/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const RefusedArgument_recipient_assigned_redirections: RefusedArgument = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_recipient_assigned_redirections */

/* START_OF_SYMBOL_DEFINITION recipient_assigned_redirections */
/**
 * @summary RefusedArgument_recipient_assigned_redirections
 * @constant
 * @type {number}
 */
export const recipient_assigned_redirections: RefusedArgument = RefusedArgument_recipient_assigned_redirections; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_assigned_redirections */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_restricted_delivery */
/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const RefusedArgument_restricted_delivery: RefusedArgument = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_restricted_delivery */

/* START_OF_SYMBOL_DEFINITION restricted_delivery */
/**
 * @summary RefusedArgument_restricted_delivery
 * @constant
 * @type {number}
 */
export const restricted_delivery: RefusedArgument = RefusedArgument_restricted_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION restricted_delivery */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_retrieve_registrations */
/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const RefusedArgument_retrieve_registrations: RefusedArgument = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_retrieve_registrations */

/* START_OF_SYMBOL_DEFINITION retrieve_registrations */
/**
 * @summary RefusedArgument_retrieve_registrations
 * @constant
 * @type {number}
 */
export const retrieve_registrations: RefusedArgument = RefusedArgument_retrieve_registrations; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION retrieve_registrations */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_restrict */
/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const RefusedArgument_restrict: RefusedArgument = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_restrict */

/* START_OF_SYMBOL_DEFINITION restrict */
/**
 * @summary RefusedArgument_restrict
 * @constant
 * @type {number}
 */
export const restrict: RefusedArgument = RefusedArgument_restrict; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION restrict */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_operations */
/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_operations: RefusedArgument = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_operations */

/* START_OF_SYMBOL_DEFINITION permissible_operations */
/**
 * @summary RefusedArgument_permissible_operations
 * @constant
 * @type {number}
 */
export const permissible_operations: RefusedArgument = RefusedArgument_permissible_operations; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_operations */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_lowest_priority */
/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_lowest_priority: RefusedArgument = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_lowest_priority */

/* START_OF_SYMBOL_DEFINITION permissible_lowest_priority */
/**
 * @summary RefusedArgument_permissible_lowest_priority
 * @constant
 * @type {number}
 */
export const permissible_lowest_priority: RefusedArgument = RefusedArgument_permissible_lowest_priority; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_lowest_priority */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_encoded_information_types */
/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_encoded_information_types: RefusedArgument = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_encoded_information_types */

/* START_OF_SYMBOL_DEFINITION permissible_encoded_information_types */
/**
 * @summary RefusedArgument_permissible_encoded_information_types
 * @constant
 * @type {number}
 */
export const permissible_encoded_information_types: RefusedArgument = RefusedArgument_permissible_encoded_information_types; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_encoded_information_types */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_content_types */
/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_content_types: RefusedArgument = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_content_types */

/* START_OF_SYMBOL_DEFINITION permissible_content_types */
/**
 * @summary RefusedArgument_permissible_content_types
 * @constant
 * @type {number}
 */
export const permissible_content_types: RefusedArgument = RefusedArgument_permissible_content_types; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_content_types */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_maximum_content_length */
/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_maximum_content_length: RefusedArgument = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_maximum_content_length */

/* START_OF_SYMBOL_DEFINITION permissible_maximum_content_length */
/**
 * @summary RefusedArgument_permissible_maximum_content_length
 * @constant
 * @type {number}
 */
export const permissible_maximum_content_length: RefusedArgument = RefusedArgument_permissible_maximum_content_length; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_maximum_content_length */

/* START_OF_SYMBOL_DEFINITION RefusedArgument_permissible_security_context */
/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const RefusedArgument_permissible_security_context: RefusedArgument = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusedArgument_permissible_security_context */

/* START_OF_SYMBOL_DEFINITION permissible_security_context */
/**
 * @summary RefusedArgument_permissible_security_context
 * @constant
 * @type {number}
 */
export const permissible_security_context: RefusedArgument = RefusedArgument_permissible_security_context; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permissible_security_context */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedArgument */
let _cached_decoder_for_RefusedArgument: $.ASN1Decoder<RefusedArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedArgument */

/* START_OF_SYMBOL_DEFINITION _decode_RefusedArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) RefusedArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusedArgument} The decoded data structure.
 */
export function _decode_RefusedArgument(el: _Element) {
    if (!_cached_decoder_for_RefusedArgument) {
        _cached_decoder_for_RefusedArgument = $._decodeInteger;
    }
    return _cached_decoder_for_RefusedArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefusedArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedArgument */
let _cached_encoder_for_RefusedArgument: $.ASN1Encoder<RefusedArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedArgument */

/* START_OF_SYMBOL_DEFINITION _encode_RefusedArgument */
/**
 * @summary Encodes a(n) RefusedArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusedArgument, encoded as an ASN.1 Element.
 */
export function _encode_RefusedArgument(
    value: RefusedArgument,
    elGetter: $.ASN1Encoder<RefusedArgument>
) {
    if (!_cached_encoder_for_RefusedArgument) {
        _cached_encoder_for_RefusedArgument = $._encodeInteger;
    }
    return _cached_encoder_for_RefusedArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RefusedArgument */

/* eslint-enable */
