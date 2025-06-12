/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProofOfDeliveryRequest */
/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```@enum {number}
 */
export enum _enum_for_ProofOfDeliveryRequest {
    proof_of_delivery_not_requested = 0,
    proof_of_delivery_requested = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest */
/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```@enum {number}
 */
export type ProofOfDeliveryRequest = _enum_for_ProofOfDeliveryRequest;
/* END_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest */
/**
 * @summary ProofOfDeliveryRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfDeliveryRequest  ::=  ENUMERATED {
 *   proof-of-delivery-not-requested(0), proof-of-delivery-requested(1)}
 * ```@enum {number}
 */
export const ProofOfDeliveryRequest = _enum_for_ProofOfDeliveryRequest;
/* END_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest_proof_of_delivery_not_requested */
/**
 * @summary ProofOfDeliveryRequest_proof_of_delivery_not_requested
 * @constant
 * @type {number}
 */
export const ProofOfDeliveryRequest_proof_of_delivery_not_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest_proof_of_delivery_not_requested */

/* START_OF_SYMBOL_DEFINITION proof_of_delivery_not_requested */
/**
 * @summary proof_of_delivery_not_requested
 * @constant
 * @type {number}
 */
export const proof_of_delivery_not_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION proof_of_delivery_not_requested */

/* START_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest_proof_of_delivery_requested */
/**
 * @summary ProofOfDeliveryRequest_proof_of_delivery_requested
 * @constant
 * @type {number}
 */
export const ProofOfDeliveryRequest_proof_of_delivery_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProofOfDeliveryRequest_proof_of_delivery_requested */

/* START_OF_SYMBOL_DEFINITION proof_of_delivery_requested */
/**
 * @summary proof_of_delivery_requested
 * @constant
 * @type {number}
 */
export const proof_of_delivery_requested: ProofOfDeliveryRequest =
    ProofOfDeliveryRequest.proof_of_delivery_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION proof_of_delivery_requested */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProofOfDeliveryRequest */
let _cached_decoder_for_ProofOfDeliveryRequest: $.ASN1Decoder<ProofOfDeliveryRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ProofOfDeliveryRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ProofOfDeliveryRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProofOfDeliveryRequest} The decoded data structure.
 */
export function _decode_ProofOfDeliveryRequest(el: _Element) {
    if (!_cached_decoder_for_ProofOfDeliveryRequest) {
        _cached_decoder_for_ProofOfDeliveryRequest = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProofOfDeliveryRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfDeliveryRequest */
let _cached_encoder_for_ProofOfDeliveryRequest: $.ASN1Encoder<ProofOfDeliveryRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfDeliveryRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ProofOfDeliveryRequest */
/**
 * @summary Encodes a(n) ProofOfDeliveryRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProofOfDeliveryRequest, encoded as an ASN.1 Element.
 */
export function _encode_ProofOfDeliveryRequest(
    value: ProofOfDeliveryRequest,
    elGetter: $.ASN1Encoder<ProofOfDeliveryRequest>
) {
    if (!_cached_encoder_for_ProofOfDeliveryRequest) {
        _cached_encoder_for_ProofOfDeliveryRequest = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProofOfDeliveryRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProofOfDeliveryRequest */

/* eslint-enable */
