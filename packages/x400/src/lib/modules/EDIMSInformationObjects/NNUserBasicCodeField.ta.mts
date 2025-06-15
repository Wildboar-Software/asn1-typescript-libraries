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

/**
 * @summary NNUserBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUserBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   syntax-error(1), -- used when the user discovers a syntax error
 *
 *   -- within the EDI interchange
 *   interchange-sender-unknown(2),
 *   interchange-recipient-unknown(3), -- used when the UA cannot find a valid
 *
 *   -- interchange recipient in the Recipient
 *   -- Specifier
 *   invalid-heading-field(4), invalid-bodypart-type(5), invalid-message-type(6),
 *   functional-group-not-supported(7),
 *   subscription-terminated(8), -- unknown to EDIMS-User service
 *   no-bilateral-agreement(9), user-defined-reason(10)}(0..ub-reason-code)
 * ```
 */
export type NNUserBasicCodeField = INTEGER;

/**
 * @summary NNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_unspecified: NNUserBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: NNUserBasicCodeField = NNUserBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_syntax_error: NNUserBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const syntax_error: NNUserBasicCodeField = NNUserBasicCodeField_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_sender_unknown: NNUserBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown: NNUserBasicCodeField = NNUserBasicCodeField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_recipient_unknown: NNUserBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const interchange_recipient_unknown: NNUserBasicCodeField = NNUserBasicCodeField_interchange_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_heading_field: NNUserBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const invalid_heading_field: NNUserBasicCodeField = NNUserBasicCodeField_invalid_heading_field; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_bodypart_type: NNUserBasicCodeField = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const invalid_bodypart_type: NNUserBasicCodeField = NNUserBasicCodeField_invalid_bodypart_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_message_type: NNUserBasicCodeField = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const invalid_message_type: NNUserBasicCodeField = NNUserBasicCodeField_invalid_message_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_functional_group_not_supported: NNUserBasicCodeField = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const functional_group_not_supported: NNUserBasicCodeField = NNUserBasicCodeField_functional_group_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_subscription_terminated: NNUserBasicCodeField = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const subscription_terminated: NNUserBasicCodeField = NNUserBasicCodeField_subscription_terminated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_no_bilateral_agreement: NNUserBasicCodeField = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const no_bilateral_agreement: NNUserBasicCodeField = NNUserBasicCodeField_no_bilateral_agreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_user_defined_reason: NNUserBasicCodeField = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const user_defined_reason: NNUserBasicCodeField = NNUserBasicCodeField_user_defined_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNUserBasicCodeField = $._decodeInteger;


export const _encode_NNUserBasicCodeField = $._encodeInteger;


/* eslint-enable */
