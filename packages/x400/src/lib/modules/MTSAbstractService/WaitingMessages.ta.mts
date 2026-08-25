/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
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
 * @summary WaitingMessages
 * @description
 *
 * Kind of messages held because of prevailing controls (ITU-T X.411 (1999), §8.2.1.4.2.2
 * on submission; §8.3.1.3.2.2 on delivery). Absent result means none are held for these
 * reasons.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitingMessages  ::=  BIT STRING {
 *   long-content(0), low-priority(1), other-security-labels(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type WaitingMessages = BIT_STRING;

/**
 * @summary WaitingMessages_long_content
 * @description
 *
 * Messages are held that exceed the `permissible-maximum-content-length` control currently
 * in force.
 *
 * @constant
 */
export const WaitingMessages_long_content: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary long_content
 * @description
 *
 * Messages are held that exceed the `permissible-maximum-content-length` control currently
 * in force.
 *
 * @constant
 */
export const long_content: number = WaitingMessages_long_content; /* SHORT_NAMED_BIT */

/**
 * @summary WaitingMessages_low_priority
 * @description
 *
 * Messages are held of a lower priority than the `permissible-lowest-priority` control
 * currently in force.
 *
 * @constant
 */
export const WaitingMessages_low_priority: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary low_priority
 * @description
 *
 * Messages are held of a lower priority than the `permissible-lowest-priority` control
 * currently in force.
 *
 * @constant
 */
export const low_priority: number = WaitingMessages_low_priority; /* SHORT_NAMED_BIT */

/**
 * @summary WaitingMessages_other_security_labels
 * @description
 *
 * Messages are held bearing message-security-labels other than those permitted by the
 * current security-context.
 *
 * @constant
 */
export const WaitingMessages_other_security_labels: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary other_security_labels
 * @description
 *
 * Messages are held bearing message-security-labels other than those permitted by the
 * current security-context.
 *
 * @constant
 */
export const other_security_labels: number = WaitingMessages_other_security_labels; /* SHORT_NAMED_BIT */


export const _decode_WaitingMessages = $._decodeBitString;


export const _encode_WaitingMessages = $._encodeBitString;


/* eslint-enable */
