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
 * @summary EDINotificationRequests
 * @description
 *
 * `EDINotificationRequests`. The EDI Notification Requests component (Default: no
 * notifications, no notification security and no reception security) may make certain
 * requests of the preferred recipient deNOTEd by the Recipient field. NOTE 1 – The fact
 * that a message can be redirected or forwarded is reflected in the word "preferred"
 * above. See ITU-T X.435 (1999), §8.2.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationRequests  ::=  BIT STRING {pn(0), nn(1), fn(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationRequests = BIT_STRING;

/**
 * @summary EDINotificationRequests_pn
 * @constant
 */
export const EDINotificationRequests_pn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pn
 * @constant
 */
export const pn: number = EDINotificationRequests_pn; /* SHORT_NAMED_BIT */

/**
 * @summary EDINotificationRequests_nn
 * @constant
 */
export const EDINotificationRequests_nn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nn
 * @constant
 */
export const nn: number = EDINotificationRequests_nn; /* SHORT_NAMED_BIT */

/**
 * @summary EDINotificationRequests_fn
 * @constant
 */
export const EDINotificationRequests_fn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fn
 * @constant
 */
export const fn: number = EDINotificationRequests_fn; /* SHORT_NAMED_BIT */


export const _decode_EDINotificationRequests = $._decodeBitString;


export const _encode_EDINotificationRequests = $._encodeBitString;


/* eslint-enable */
