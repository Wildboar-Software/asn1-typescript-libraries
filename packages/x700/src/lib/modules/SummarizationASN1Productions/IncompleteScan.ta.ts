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

/* START_OF_SYMBOL_DEFINITION IncompleteScan */
/**
 * @summary IncompleteScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteScan  ::=  INTEGER {sizeExceeded(0), timeExceeded(1), other(2)}
 * ```
 */
export type IncompleteScan = INTEGER;
/* END_OF_SYMBOL_DEFINITION IncompleteScan */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_sizeExceeded */
/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_sizeExceeded: IncompleteScan = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_sizeExceeded */

/* START_OF_SYMBOL_DEFINITION sizeExceeded */
/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const sizeExceeded: IncompleteScan = IncompleteScan_sizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sizeExceeded */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_timeExceeded */
/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_timeExceeded: IncompleteScan = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_timeExceeded */

/* START_OF_SYMBOL_DEFINITION timeExceeded */
/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const timeExceeded: IncompleteScan = IncompleteScan_timeExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timeExceeded */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_other */
/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const IncompleteScan_other: IncompleteScan = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const other: IncompleteScan = IncompleteScan_other; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteScan */
let _cached_decoder_for_IncompleteScan: $.ASN1Decoder<IncompleteScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _decode_IncompleteScan */
/**
 * @summary Decodes an ASN.1 element into a(n) IncompleteScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncompleteScan} The decoded data structure.
 */
export function _decode_IncompleteScan(el: _Element) {
    if (!_cached_decoder_for_IncompleteScan) {
        _cached_decoder_for_IncompleteScan = $._decodeInteger;
    }
    return _cached_decoder_for_IncompleteScan(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteScan */
let _cached_encoder_for_IncompleteScan: $.ASN1Encoder<IncompleteScan> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _encode_IncompleteScan */
/**
 * @summary Encodes a(n) IncompleteScan into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncompleteScan, encoded as an ASN.1 Element.
 */
export function _encode_IncompleteScan(
    value: IncompleteScan,
    elGetter: $.ASN1Encoder<IncompleteScan>
) {
    if (!_cached_encoder_for_IncompleteScan) {
        _cached_encoder_for_IncompleteScan = $._encodeInteger;
    }
    return _cached_encoder_for_IncompleteScan(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IncompleteScan */

/* eslint-enable */
