/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ProofOfDeliveryRequest {
    proof_of_delivery_not_requested = 0,
    proof_of_delivery_requested = 1,
}

/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```
 * 
 * @enum {number}
 */
export type ProofOfDeliveryRequest = _enum_for_ProofOfDeliveryRequest;

/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```
 * 
 * @enum {number}
 */
export const ProofOfDeliveryRequest = _enum_for_ProofOfDeliveryRequest;

/**
 * @summary ProofOfDeliveryRequest_proof_of_delivery_not_requested
 * @constant
 * @type {number}
 */
export const ProofOfDeliveryRequest_proof_of_delivery_not_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proof_of_delivery_not_requested
 * @constant
 * @type {number}
 */
export const proof_of_delivery_not_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProofOfDeliveryRequest_proof_of_delivery_requested
 * @constant
 * @type {number}
 */
export const ProofOfDeliveryRequest_proof_of_delivery_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proof_of_delivery_requested
 * @constant
 * @type {number}
 */
export const proof_of_delivery_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_requested; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ProofOfDeliveryRequest = $._decodeEnumerated;


export const _encode_ProofOfDeliveryRequest = $._encodeEnumerated;


/* eslint-enable */
