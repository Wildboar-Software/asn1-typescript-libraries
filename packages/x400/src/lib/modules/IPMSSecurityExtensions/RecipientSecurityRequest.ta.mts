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
 * @summary RecipientSecurityRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientSecurityRequest  ::=  BIT STRING {
 *   content-non-repudiation(0), content-proof(1), ipn-non-repudiation(2),
 *   ipn-proof(3)}
 * ```
 */
export type RecipientSecurityRequest = BIT_STRING;

/**
 * @summary RecipientSecurityRequest_content_non_repudiation
 * @constant
 */
export const RecipientSecurityRequest_content_non_repudiation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary content_non_repudiation
 * @constant
 */
export const content_non_repudiation: number = RecipientSecurityRequest_content_non_repudiation; /* SHORT_NAMED_BIT */

/**
 * @summary RecipientSecurityRequest_content_proof
 * @constant
 */
export const RecipientSecurityRequest_content_proof: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary content_proof
 * @constant
 */
export const content_proof: number = RecipientSecurityRequest_content_proof; /* SHORT_NAMED_BIT */

/**
 * @summary RecipientSecurityRequest_ipn_non_repudiation
 * @constant
 */
export const RecipientSecurityRequest_ipn_non_repudiation: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipn_non_repudiation
 * @constant
 */
export const ipn_non_repudiation: number = RecipientSecurityRequest_ipn_non_repudiation; /* SHORT_NAMED_BIT */

/**
 * @summary RecipientSecurityRequest_ipn_proof
 * @constant
 */
export const RecipientSecurityRequest_ipn_proof: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ipn_proof
 * @constant
 */
export const ipn_proof: number = RecipientSecurityRequest_ipn_proof; /* SHORT_NAMED_BIT */


export const _decode_RecipientSecurityRequest = $._decodeBitString;


export const _encode_RecipientSecurityRequest = $._encodeBitString;


/* eslint-enable */
