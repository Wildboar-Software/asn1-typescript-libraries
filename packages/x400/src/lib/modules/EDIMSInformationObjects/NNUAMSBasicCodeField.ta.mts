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
 * @summary NNUAMSBasicCodeField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUAMSBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   cannot-deliver-to-user(1), -- the EDI Interchange can not be passed on to the
 *
 *   -- user
 *   delivery-timeout(2), -- the EDI Interchange could not be passed on to the
 *
 *   -- user within a specified time limit
 *   message-discarded(3), -- the UA/MS discarded the message before handoff to
 *
 *   -- user
 *   subscription-terminated(4), -- recipient's subscription terminated after delivery
 *
 *   -- but before handoff to user
 *   forwarding-error(5), -- EDI Forwarding was attempted, but failed
 *   security-error(6) -- security error
 * -- physical delivery errors indicated by "cannot-deliver-to-user"
 * }(0..ub-reason-code)
 * ```
 */
export type NNUAMSBasicCodeField = INTEGER;

/**
 * @summary NNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_unspecified = 0 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified = NNUAMSBasicCodeField_unspecified satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_cannot_deliver_to_user
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_cannot_deliver_to_user = 1 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_cannot_deliver_to_user
 * @constant
 * @type {number}
 */
export const cannot_deliver_to_user = NNUAMSBasicCodeField_cannot_deliver_to_user satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_delivery_timeout
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_delivery_timeout = 2 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_delivery_timeout
 * @constant
 * @type {number}
 */
export const delivery_timeout = NNUAMSBasicCodeField_delivery_timeout satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_message_discarded
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_message_discarded = 3 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_message_discarded
 * @constant
 * @type {number}
 */
export const message_discarded = NNUAMSBasicCodeField_message_discarded satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_subscription_terminated = 4 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const subscription_terminated = NNUAMSBasicCodeField_subscription_terminated satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_forwarding_error
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_forwarding_error = 5 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_forwarding_error
 * @constant
 * @type {number}
 */
export const forwarding_error = NNUAMSBasicCodeField_forwarding_error satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_security_error
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_security_error = 6 satisfies NNUAMSBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNUAMSBasicCodeField_security_error
 * @constant
 * @type {number}
 */
export const security_error = NNUAMSBasicCodeField_security_error satisfies NNUAMSBasicCodeField; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNUAMSBasicCodeField = $._decodeInteger;


export const _encode_NNUAMSBasicCodeField = $._encodeInteger;


/* eslint-enable */
