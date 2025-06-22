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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary EDINotificationSecurity
 * @description
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
 * @constant
 */
export const EDINotificationSecurity_proof: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary proof
 * @constant
 */
export const proof: number = EDINotificationSecurity_proof; /* SHORT_NAMED_BIT */

/**
 * @summary EDINotificationSecurity_non_repudiation
 * @constant
 */
export const EDINotificationSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary non_repudiation
 * @constant
 */
export const non_repudiation: number = EDINotificationSecurity_non_repudiation; /* SHORT_NAMED_BIT */


export const _decode_EDINotificationSecurity = $._decodeBitString;


export const _encode_EDINotificationSecurity = $._encodeBitString;


/* eslint-enable */
