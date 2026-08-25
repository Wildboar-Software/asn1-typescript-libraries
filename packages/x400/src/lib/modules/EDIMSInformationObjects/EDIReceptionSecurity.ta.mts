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
 * @summary EDIReceptionSecurity
 * @description
 *
 * Proof or non-repudiation of reception of this EDIM by the recipient (ITU-T X.435 (1999),
 * §8.2.3.3). Shall not be requested if `EDINotificationRequests` is empty. Defined
 * combinations with `EDINotificationSecurity` are listed on `EDINotificationRequests`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIReceptionSecurity  ::=  BIT STRING {proof(0), non-repudiation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDIReceptionSecurity = BIT_STRING;

/**
 * @summary EDIReceptionSecurity_proof
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` (possibly in the message token) or
 * `message-origin-authentication-check` (depending on the security policy) shall be
 * requested, and the notification shall be signed on submission (X.411 §8.2.1.1.1.26,
 * §8.2.1.1.1.28, §8.2.1.1.1.29).
 *
 * @constant
 */
export const EDIReceptionSecurity_proof: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary proof
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` (possibly in the message token) or
 * `message-origin-authentication-check` (depending on the security policy) shall be
 * requested, and the notification shall be signed on submission (X.411 §8.2.1.1.1.26,
 * §8.2.1.1.1.28, §8.2.1.1.1.29).
 *
 * @constant
 */
export const proof: number = EDIReceptionSecurity_proof; /* SHORT_NAMED_BIT */

/**
 * @summary EDIReceptionSecurity_non_repudiation
 * @description
 *
 * When submitting the EDIN, a non-repudiable `content-integrity-check` (possibly in the
 * message token) or `message-origin-authentication-check` (depending on the security
 * policy) shall be requested, and the notification shall be signed on submission (X.411
 * §8.2.1.1.1.26, §8.2.1.1.1.28, §8.2.1.1.1.29).
 *
 * @constant
 */
export const EDIReceptionSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary non_repudiation
 * @description
 *
 * When submitting the EDIN, a non-repudiable `content-integrity-check` (possibly in the
 * message token) or `message-origin-authentication-check` (depending on the security
 * policy) shall be requested, and the notification shall be signed on submission (X.411
 * §8.2.1.1.1.26, §8.2.1.1.1.28, §8.2.1.1.1.29).
 *
 * @constant
 */
export const non_repudiation: number = EDIReceptionSecurity_non_repudiation; /* SHORT_NAMED_BIT */


export const _decode_EDIReceptionSecurity = $._decodeBitString;


export const _encode_EDIReceptionSecurity = $._encodeBitString;


/* eslint-enable */
