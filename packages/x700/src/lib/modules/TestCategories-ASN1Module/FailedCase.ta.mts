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

/* START_OF_SYMBOL_DEFINITION _enum_for_FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export enum _enum_for_FailedCase {
    lineDisconnected = 0,
    counterOverflow = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export type FailedCase = _enum_for_FailedCase;
/* END_OF_SYMBOL_DEFINITION FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase */
/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```@enum {number}
 */
export const FailedCase = _enum_for_FailedCase;
/* END_OF_SYMBOL_DEFINITION FailedCase */

/* START_OF_SYMBOL_DEFINITION FailedCase_lineDisconnected */
/**
 * @summary FailedCase_lineDisconnected
 * @constant
 * @type {number}
 */
export const FailedCase_lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FailedCase_lineDisconnected */

/* START_OF_SYMBOL_DEFINITION lineDisconnected */
/**
 * @summary lineDisconnected
 * @constant
 * @type {number}
 */
export const lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION lineDisconnected */

/* START_OF_SYMBOL_DEFINITION FailedCase_counterOverflow */
/**
 * @summary FailedCase_counterOverflow
 * @constant
 * @type {number}
 */
export const FailedCase_counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FailedCase_counterOverflow */

/* START_OF_SYMBOL_DEFINITION counterOverflow */
/**
 * @summary counterOverflow
 * @constant
 * @type {number}
 */
export const counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION counterOverflow */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FailedCase */
let _cached_decoder_for_FailedCase: $.ASN1Decoder<FailedCase> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION _decode_FailedCase */
/**
 * @summary Decodes an ASN.1 element into a(n) FailedCase
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FailedCase} The decoded data structure.
 */
export function _decode_FailedCase(el: _Element) {
    if (!_cached_decoder_for_FailedCase) {
        _cached_decoder_for_FailedCase = $._decodeEnumerated;
    }
    return _cached_decoder_for_FailedCase(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FailedCase */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FailedCase */
let _cached_encoder_for_FailedCase: $.ASN1Encoder<FailedCase> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FailedCase */

/* START_OF_SYMBOL_DEFINITION _encode_FailedCase */
/**
 * @summary Encodes a(n) FailedCase into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailedCase, encoded as an ASN.1 Element.
 */
export function _encode_FailedCase(
    value: FailedCase,
    elGetter: $.ASN1Encoder<FailedCase>
) {
    if (!_cached_encoder_for_FailedCase) {
        _cached_encoder_for_FailedCase = $._encodeEnumerated;
    }
    return _cached_encoder_for_FailedCase(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FailedCase */

/* eslint-enable */
