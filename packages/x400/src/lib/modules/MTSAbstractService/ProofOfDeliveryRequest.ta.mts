/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * This argument indicates whether or not the originator of the message requires
 * proof-of-delivery (to provide the Proof of Delivery element-of-service as defined in
 * recipient of the message. This argument may have one of the following values:
 * proof-of-delivery-requested or proof-of-delivery-not- requested. See ITU-T X.411 (1999),
 * §8.2.1.1.1.32.
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


export function _decode_ProofOfDeliveryRequest(el: _Element): ProofOfDeliveryRequest {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ProofOfDeliveryRequest.proof_of_delivery_not_requested: return ProofOfDeliveryRequest.proof_of_delivery_not_requested;
        case ProofOfDeliveryRequest.proof_of_delivery_requested: return ProofOfDeliveryRequest.proof_of_delivery_requested;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ProofOfDeliveryRequest.',
                el,
            );
    }
}


export const _encode_ProofOfDeliveryRequest: $.ASN1Encoder<ProofOfDeliveryRequest> = $._encodeEnumerated as $.ASN1Encoder<ProofOfDeliveryRequest>;


/* eslint-enable */
