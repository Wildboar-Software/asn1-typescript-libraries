/* eslint-disable */
import {
  type INTEGER,
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
 * @summary Release_request_reason
 * @description
 *
 * A-RELEASE request urgency: `normal` (0), `urgent` (1),
 * `user-defined` (30). Example: `urgent` when session Negotiated
 * Release was selected and the requestor wants immediate release.
 * ITU-T Rec. X.217 (1995) §9.2.1.1; X.217 bis (1998) §8.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }(0 | 1 | 30, ...)
 * ```
 */
export type Release_request_reason = INTEGER;

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: 0 = 0 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: 0 = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const Release_request_reason_urgent: 1 = 1 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const urgent: 1 = Release_request_reason_urgent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_request_reason_user_defined: 30 = 30 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined: 30 = Release_request_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_request_reason: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Release_request_reason: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
