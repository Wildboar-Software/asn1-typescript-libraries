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

/* START_OF_SYMBOL_DEFINITION ActivateReply_responseCode */
/**
 * @summary ActivateReply_responseCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivateReply-responseCode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ActivateReply_responseCode = INTEGER;
/* END_OF_SYMBOL_DEFINITION ActivateReply_responseCode */

/* START_OF_SYMBOL_DEFINITION ActivateReply_responseCode_successResponse */
/**
 * @summary ActivateReply_responseCode_successResponse
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_successResponse: ActivateReply_responseCode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivateReply_responseCode_successResponse */

/* START_OF_SYMBOL_DEFINITION successResponse */
/**
 * @summary ActivateReply_responseCode_successResponse
 * @constant
 * @type {number}
 */
export const successResponse: ActivateReply_responseCode = ActivateReply_responseCode_successResponse; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION successResponse */

/* START_OF_SYMBOL_DEFINITION ActivateReply_responseCode_serviceProviderErrorResponse */
/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_serviceProviderErrorResponse: ActivateReply_responseCode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ActivateReply_responseCode_serviceProviderErrorResponse */

/* START_OF_SYMBOL_DEFINITION serviceProviderErrorResponse */
/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @constant
 * @type {number}
 */
export const serviceProviderErrorResponse: ActivateReply_responseCode = ActivateReply_responseCode_serviceProviderErrorResponse; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION serviceProviderErrorResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivateReply_responseCode */
let _cached_decoder_for_ActivateReply_responseCode: $.ASN1Decoder<ActivateReply_responseCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivateReply_responseCode */

/* START_OF_SYMBOL_DEFINITION _decode_ActivateReply_responseCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivateReply_responseCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivateReply_responseCode} The decoded data structure.
 */
export function _decode_ActivateReply_responseCode(el: _Element) {
    if (!_cached_decoder_for_ActivateReply_responseCode) {
        _cached_decoder_for_ActivateReply_responseCode = $._decodeInteger;
    }
    return _cached_decoder_for_ActivateReply_responseCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivateReply_responseCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivateReply_responseCode */
let _cached_encoder_for_ActivateReply_responseCode: $.ASN1Encoder<ActivateReply_responseCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivateReply_responseCode */

/* START_OF_SYMBOL_DEFINITION _encode_ActivateReply_responseCode */
/**
 * @summary Encodes a(n) ActivateReply_responseCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateReply_responseCode, encoded as an ASN.1 Element.
 */
export function _encode_ActivateReply_responseCode(
    value: ActivateReply_responseCode,
    elGetter: $.ASN1Encoder<ActivateReply_responseCode>
) {
    if (!_cached_encoder_for_ActivateReply_responseCode) {
        _cached_encoder_for_ActivateReply_responseCode = $._encodeInteger;
    }
    return _cached_encoder_for_ActivateReply_responseCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivateReply_responseCode */

/* eslint-enable */
