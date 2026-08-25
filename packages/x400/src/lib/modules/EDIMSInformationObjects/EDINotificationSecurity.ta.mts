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
 * @summary EDINotificationSecurity
 * @description
 *
 * Security requested on a subsequent EDIN (ITU-T X.435 (1999), §8.2.3.3). Shall not be
 * requested if `EDINotificationRequests` is empty. Defined combinations with
 * `EDIReceptionSecurity` are listed on `EDINotificationRequests`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationSecurity  ::=  BIT STRING {proof(0), non-repudiation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationSecurity = BIT_STRING;

/**
 * @summary EDINotificationSecurity_proof
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` shall be requested in the
 * Message-submission-argument (X.411 §8.2.1.1.1.28).
 *
 * @constant
 */
export const EDINotificationSecurity_proof: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary proof
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` shall be requested in the
 * Message-submission-argument (X.411 §8.2.1.1.1.28).
 *
 * @constant
 */
export const proof: number = EDINotificationSecurity_proof; /* SHORT_NAMED_BIT */

/**
 * @summary EDINotificationSecurity_non_repudiation
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` shall be requested with a
 * non-repudiable certificate (X.411 §8.2.1.1.1.28).
 *
 * @constant
 */
export const EDINotificationSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary non_repudiation
 * @description
 *
 * When submitting the EDIN, `content-integrity-check` shall be requested with a
 * non-repudiable certificate (X.411 §8.2.1.1.1.28).
 *
 * @constant
 */
export const non_repudiation: number = EDINotificationSecurity_non_repudiation; /* SHORT_NAMED_BIT */


export const _decode_EDINotificationSecurity = $._decodeBitString;


export const _encode_EDINotificationSecurity = $._encodeBitString;


/* eslint-enable */
