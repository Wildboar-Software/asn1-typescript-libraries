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
 * @summary Release_response_reason
 * @description
 *
 * A-RELEASE response: `normal` (0), `not-finished` (1),
 * `user-defined` (30). Example: `not-finished` when the acceptor is
 * forced to release (no Negotiated Release) but still has data to
 * send or receive. ITU-T Rec. X.217 (1995) §9.2.1.1; X.217 bis (1998)
 * §8.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {
 *   normal(0), not-finished(1), user-defined(30)}(0 | 1 | 30, ...)
 * ```
 */
export type Release_response_reason = INTEGER;

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal = 0 satisfies Release_response_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const normal = Release_response_reason_normal satisfies Release_response_reason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const Release_response_reason_not_finished = 1 satisfies Release_response_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const not_finished = Release_response_reason_not_finished satisfies Release_response_reason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_response_reason_user_defined = 30 satisfies Release_response_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined = Release_response_reason_user_defined satisfies Release_response_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_response_reason = $._decodeInteger;


export const _encode_Release_response_reason = $._encodeInteger;


/* eslint-enable */
