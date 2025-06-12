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

/* START_OF_SYMBOL_DEFINITION _enum_for_DenialResponse */
/**
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```@enum {number}
 */
export enum _enum_for_DenialResponse {
    denyWithResponse = 0,
    denyWithoutResponse = 1,
    abortAssociation = 2,
    denyWithFalseResponse = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DenialResponse */

/* START_OF_SYMBOL_DEFINITION DenialResponse */
/**
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```@enum {number}
 */
export type DenialResponse = _enum_for_DenialResponse;
/* END_OF_SYMBOL_DEFINITION DenialResponse */

/* START_OF_SYMBOL_DEFINITION DenialResponse */
/**
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```@enum {number}
 */
export const DenialResponse = _enum_for_DenialResponse;
/* END_OF_SYMBOL_DEFINITION DenialResponse */

/* START_OF_SYMBOL_DEFINITION DenialResponse_denyWithResponse */
/**
 * @summary DenialResponse_denyWithResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialResponse_denyWithResponse */

/* START_OF_SYMBOL_DEFINITION denyWithResponse */
/**
 * @summary denyWithResponse
 * @constant
 * @type {number}
 */
export const denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithResponse */

/* START_OF_SYMBOL_DEFINITION DenialResponse_denyWithoutResponse */
/**
 * @summary DenialResponse_denyWithoutResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialResponse_denyWithoutResponse */

/* START_OF_SYMBOL_DEFINITION denyWithoutResponse */
/**
 * @summary denyWithoutResponse
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithoutResponse */

/* START_OF_SYMBOL_DEFINITION DenialResponse_abortAssociation */
/**
 * @summary DenialResponse_abortAssociation
 * @constant
 * @type {number}
 */
export const DenialResponse_abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialResponse_abortAssociation */

/* START_OF_SYMBOL_DEFINITION abortAssociation */
/**
 * @summary abortAssociation
 * @constant
 * @type {number}
 */
export const abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abortAssociation */

/* START_OF_SYMBOL_DEFINITION DenialResponse_denyWithFalseResponse */
/**
 * @summary DenialResponse_denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialResponse_denyWithFalseResponse */

/* START_OF_SYMBOL_DEFINITION denyWithFalseResponse */
/**
 * @summary denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION denyWithFalseResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialResponse */
let _cached_decoder_for_DenialResponse: $.ASN1Decoder<DenialResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialResponse */

/* START_OF_SYMBOL_DEFINITION _decode_DenialResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) DenialResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DenialResponse} The decoded data structure.
 */
export function _decode_DenialResponse(el: _Element) {
    if (!_cached_decoder_for_DenialResponse) {
        _cached_decoder_for_DenialResponse = $._decodeEnumerated;
    }
    return _cached_decoder_for_DenialResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DenialResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialResponse */
let _cached_encoder_for_DenialResponse: $.ASN1Encoder<DenialResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialResponse */

/* START_OF_SYMBOL_DEFINITION _encode_DenialResponse */
/**
 * @summary Encodes a(n) DenialResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DenialResponse, encoded as an ASN.1 Element.
 */
export function _encode_DenialResponse(
    value: DenialResponse,
    elGetter: $.ASN1Encoder<DenialResponse>
) {
    if (!_cached_encoder_for_DenialResponse) {
        _cached_encoder_for_DenialResponse = $._encodeEnumerated;
    }
    return _cached_encoder_for_DenialResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DenialResponse */

/* eslint-enable */
