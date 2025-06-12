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

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest */
/**
 * @summary OriginatorReportRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorReportRequest  ::=  BIT STRING {report(3), non-delivery-report(4)
 *
 * -- at most one bit shall be 'one':
 * -- report bit 'one' requests a 'report';
 * -- non-delivery-report bit 'one' requests a 'non-delivery-report';
 * -- both bits 'zero' requests 'no-report' --}(SIZE (0..ub-bit-options))
 * ```
 */
export type OriginatorReportRequest = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest_report */
/**
 * @summary OriginatorReportRequest_report
 * @constant
 */
export const OriginatorReportRequest_report: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest_report */

/* START_OF_SYMBOL_DEFINITION report */
/**
 * @summary report
 * @constant
 */
export const report: number = OriginatorReportRequest_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION report */

/* START_OF_SYMBOL_DEFINITION OriginatorReportRequest_non_delivery_report */
/**
 * @summary OriginatorReportRequest_non_delivery_report
 * @constant
 */
export const OriginatorReportRequest_non_delivery_report: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OriginatorReportRequest_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION non_delivery_report */
/**
 * @summary non_delivery_report
 * @constant
 */
export const non_delivery_report: number = OriginatorReportRequest_non_delivery_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION non_delivery_report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReportRequest */
let _cached_decoder_for_OriginatorReportRequest: $.ASN1Decoder<OriginatorReportRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorReportRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorReportRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorReportRequest} The decoded data structure.
 */
export function _decode_OriginatorReportRequest(el: _Element) {
    if (!_cached_decoder_for_OriginatorReportRequest) {
        _cached_decoder_for_OriginatorReportRequest = $._decodeBitString;
    }
    return _cached_decoder_for_OriginatorReportRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReportRequest */
let _cached_encoder_for_OriginatorReportRequest: $.ASN1Encoder<OriginatorReportRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReportRequest */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorReportRequest */
/**
 * @summary Encodes a(n) OriginatorReportRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorReportRequest, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorReportRequest(
    value: OriginatorReportRequest,
    elGetter: $.ASN1Encoder<OriginatorReportRequest>
) {
    if (!_cached_encoder_for_OriginatorReportRequest) {
        _cached_encoder_for_OriginatorReportRequest = $._encodeBitString;
    }
    return _cached_encoder_for_OriginatorReportRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorReportRequest */

/* eslint-enable */
