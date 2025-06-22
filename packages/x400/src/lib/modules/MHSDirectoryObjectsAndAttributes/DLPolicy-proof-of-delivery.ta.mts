/* eslint-disable */
import {
    INTEGER,
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
 * @summary DLPolicy_proof_of_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-proof-of-delivery ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_proof_of_delivery = INTEGER;

/**
 * @summary DLPolicy_proof_of_delivery_dl_expansion_point
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_dl_expansion_point: DLPolicy_proof_of_delivery = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_dl_expansion_point
 * @constant
 * @type {number}
 */
export const dl_expansion_point: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_dl_expansion_point; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_dl_members
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_dl_members: DLPolicy_proof_of_delivery = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_dl_members
 * @constant
 * @type {number}
 */
export const dl_members: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_dl_members; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_both
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_both: DLPolicy_proof_of_delivery = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_both
 * @constant
 * @type {number}
 */
export const both: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_both; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_neither
 * @constant
 * @type {number}
 */
export const DLPolicy_proof_of_delivery_neither: DLPolicy_proof_of_delivery = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_proof_of_delivery_neither
 * @constant
 * @type {number}
 */
export const neither: DLPolicy_proof_of_delivery = DLPolicy_proof_of_delivery_neither; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_proof_of_delivery = $._decodeInteger;


export const _encode_DLPolicy_proof_of_delivery = $._encodeInteger;


/* eslint-enable */
