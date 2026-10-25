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
 * @summary NNUserBasicCodeField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
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
export const NNUserBasicCodeField_unspecified: 0 = 0 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: 0 = NNUserBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_syntax_error: 1 = 1 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const syntax_error: 1 = NNUserBasicCodeField_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_sender_unknown: 2 = 2 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown: 2 = NNUserBasicCodeField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_recipient_unknown: 3 = 3 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const interchange_recipient_unknown: 3 = NNUserBasicCodeField_interchange_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_heading_field: 4 = 4 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const invalid_heading_field: 4 = NNUserBasicCodeField_invalid_heading_field; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_bodypart_type: 5 = 5 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const invalid_bodypart_type: 5 = NNUserBasicCodeField_invalid_bodypart_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_message_type: 6 = 6 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const invalid_message_type: 6 = NNUserBasicCodeField_invalid_message_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_functional_group_not_supported: 7 = 7 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const functional_group_not_supported: 7 = NNUserBasicCodeField_functional_group_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_subscription_terminated: 8 = 8 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const subscription_terminated: 8 = NNUserBasicCodeField_subscription_terminated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_no_bilateral_agreement: 9 = 9 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const no_bilateral_agreement: 9 = NNUserBasicCodeField_no_bilateral_agreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_user_defined_reason: 10 = 10 satisfies NNUserBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const user_defined_reason: 10 = NNUserBasicCodeField_user_defined_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNUserBasicCodeField: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_NNUserBasicCodeField: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
