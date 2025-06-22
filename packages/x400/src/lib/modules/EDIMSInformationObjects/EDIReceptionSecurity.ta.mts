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
 * @summary EDIReceptionSecurity
 * @description
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
 * @constant
 */
export const EDIReceptionSecurity_proof: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary proof
 * @constant
 */
export const proof: number = EDIReceptionSecurity_proof; /* SHORT_NAMED_BIT */

/**
 * @summary EDIReceptionSecurity_non_repudiation
 * @constant
 */
export const EDIReceptionSecurity_non_repudiation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary non_repudiation
 * @constant
 */
export const non_repudiation: number = EDIReceptionSecurity_non_repudiation; /* SHORT_NAMED_BIT */


export const _decode_EDIReceptionSecurity = $._decodeBitString;


export const _encode_EDIReceptionSecurity = $._encodeBitString;


/* eslint-enable */
