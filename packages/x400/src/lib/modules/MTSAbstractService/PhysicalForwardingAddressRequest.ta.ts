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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingAddressRequest */
/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```@enum {number}
 */
export enum _enum_for_PhysicalForwardingAddressRequest {
    physical_forwarding_address_not_requested = 0,
    physical_forwarding_address_requested = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest */
/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```@enum {number}
 */
export type PhysicalForwardingAddressRequest = _enum_for_PhysicalForwardingAddressRequest;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest */
/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```@enum {number}
 */
export const PhysicalForwardingAddressRequest = _enum_for_PhysicalForwardingAddressRequest;
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested */
/**
 * @summary PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested
 * @constant
 * @type {number}
 */
export const PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_address_not_requested */
/**
 * @summary physical_forwarding_address_not_requested
 * @constant
 * @type {number}
 */
export const physical_forwarding_address_not_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_address_not_requested */

/* START_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest_physical_forwarding_address_requested */
/**
 * @summary PhysicalForwardingAddressRequest_physical_forwarding_address_requested
 * @constant
 * @type {number}
 */
export const PhysicalForwardingAddressRequest_physical_forwarding_address_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PhysicalForwardingAddressRequest_physical_forwarding_address_requested */

/* START_OF_SYMBOL_DEFINITION physical_forwarding_address_requested */
/**
 * @summary physical_forwarding_address_requested
 * @constant
 * @type {number}
 */
export const physical_forwarding_address_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_forwarding_address_requested */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingAddressRequest */
let _cached_decoder_for_PhysicalForwardingAddressRequest: $.ASN1Decoder<PhysicalForwardingAddressRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingAddressRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalForwardingAddressRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalForwardingAddressRequest} The decoded data structure.
 */
export function _decode_PhysicalForwardingAddressRequest(el: _Element) {
    if (!_cached_decoder_for_PhysicalForwardingAddressRequest) {
        _cached_decoder_for_PhysicalForwardingAddressRequest =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_PhysicalForwardingAddressRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingAddressRequest */
let _cached_encoder_for_PhysicalForwardingAddressRequest: $.ASN1Encoder<PhysicalForwardingAddressRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalForwardingAddressRequest */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingAddressRequest */
/**
 * @summary Encodes a(n) PhysicalForwardingAddressRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalForwardingAddressRequest, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalForwardingAddressRequest(
    value: PhysicalForwardingAddressRequest,
    elGetter: $.ASN1Encoder<PhysicalForwardingAddressRequest>
) {
    if (!_cached_encoder_for_PhysicalForwardingAddressRequest) {
        _cached_encoder_for_PhysicalForwardingAddressRequest =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_PhysicalForwardingAddressRequest(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalForwardingAddressRequest */

/* eslint-enable */
