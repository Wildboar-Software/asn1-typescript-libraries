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

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField */
/**
 * @summary FNUAMSDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSDiagnosticField  ::=  INTEGER {
 *   -- This field may be used to further specify the error signalled in
 *   -- fn-ua-ms-basic-code.
 *   -- Additional information may be indicated in fn-supplementary-information.
 *   recipient-name-changed(1), recipient-name-deleted(2)}(1..ub-reason-code)
 * ```
 */
export type FNUAMSDiagnosticField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_changed */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_changed: FNUAMSDiagnosticField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_changed */

/* START_OF_SYMBOL_DEFINITION recipient_name_changed */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_changed
 * @constant
 * @type {number}
 */
export const recipient_name_changed: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_changed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_name_changed */

/* START_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_deleted */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const FNUAMSDiagnosticField_recipient_name_deleted: FNUAMSDiagnosticField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSDiagnosticField_recipient_name_deleted */

/* START_OF_SYMBOL_DEFINITION recipient_name_deleted */
/**
 * @summary FNUAMSDiagnosticField_recipient_name_deleted
 * @constant
 * @type {number}
 */
export const recipient_name_deleted: FNUAMSDiagnosticField = FNUAMSDiagnosticField_recipient_name_deleted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_name_deleted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSDiagnosticField */
let _cached_decoder_for_FNUAMSDiagnosticField: $.ASN1Decoder<FNUAMSDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSDiagnosticField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUAMSDiagnosticField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUAMSDiagnosticField} The decoded data structure.
 */
export function _decode_FNUAMSDiagnosticField(el: _Element) {
    if (!_cached_decoder_for_FNUAMSDiagnosticField) {
        _cached_decoder_for_FNUAMSDiagnosticField = $._decodeInteger;
    }
    return _cached_decoder_for_FNUAMSDiagnosticField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSDiagnosticField */
let _cached_encoder_for_FNUAMSDiagnosticField: $.ASN1Encoder<FNUAMSDiagnosticField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSDiagnosticField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSDiagnosticField */
/**
 * @summary Encodes a(n) FNUAMSDiagnosticField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUAMSDiagnosticField, encoded as an ASN.1 Element.
 */
export function _encode_FNUAMSDiagnosticField(
    value: FNUAMSDiagnosticField,
    elGetter: $.ASN1Encoder<FNUAMSDiagnosticField>
) {
    if (!_cached_encoder_for_FNUAMSDiagnosticField) {
        _cached_encoder_for_FNUAMSDiagnosticField = $._encodeInteger;
    }
    return _cached_encoder_for_FNUAMSDiagnosticField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSDiagnosticField */

/* eslint-enable */
