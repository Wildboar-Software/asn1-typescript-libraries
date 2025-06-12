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

/* START_OF_SYMBOL_DEFINITION NNUserDiagnosticField */
/**
 * @summary NNUserDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUserDiagnosticField  ::=  INTEGER {
 *   compression-unsupported(1) -- the received compression is not supported --
 * }(1..ub-reason-code)
 * ```
 */
export type NNUserDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION NNUserDiagnosticField_compression_unsupported */
/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const NNUserDiagnosticField_compression_unsupported: NNUserDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserDiagnosticField_compression_unsupported */

/* START_OF_SYMBOL_DEFINITION compression_unsupported */
/**
 * @summary NNUserDiagnosticField_compression_unsupported
 * @constant
 * @type {number}
 */
export const compression_unsupported: NNUserDiagnosticField = NNUserDiagnosticField_compression_unsupported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION compression_unsupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserDiagnosticField */
let _cached_decoder_for_NNUserDiagnosticField: $.ASN1Decoder<NNUserDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUserDiagnosticField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUserDiagnosticField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUserDiagnosticField} The decoded data structure.
 */
export function _decode_NNUserDiagnosticField(el: _Element) {
    if (!_cached_decoder_for_NNUserDiagnosticField) {
        _cached_decoder_for_NNUserDiagnosticField = $._decodeInteger;
    }
    return _cached_decoder_for_NNUserDiagnosticField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserDiagnosticField */
let _cached_encoder_for_NNUserDiagnosticField: $.ASN1Encoder<NNUserDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUserDiagnosticField */
/**
 * @summary Encodes a(n) NNUserDiagnosticField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUserDiagnosticField, encoded as an ASN.1 Element.
 */
export function _encode_NNUserDiagnosticField(
    value: NNUserDiagnosticField,
    elGetter: $.ASN1Encoder<NNUserDiagnosticField>
) {
    if (!_cached_encoder_for_NNUserDiagnosticField) {
        _cached_encoder_for_NNUserDiagnosticField = $._encodeInteger;
    }
    return _cached_encoder_for_NNUserDiagnosticField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUserDiagnosticField */

/* eslint-enable */
