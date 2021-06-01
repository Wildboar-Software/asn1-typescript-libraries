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

/* START_OF_SYMBOL_DEFINITION ProcessingPriorityCodeField */
/**
 * @summary ProcessingPriorityCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingPriorityCodeField  ::=
 *   TeletexString(SIZE (1..ub-processing-priority-code))
 * ```
 */
export type ProcessingPriorityCodeField = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION ProcessingPriorityCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingPriorityCodeField */
let _cached_decoder_for_ProcessingPriorityCodeField: $.ASN1Decoder<ProcessingPriorityCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessingPriorityCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessingPriorityCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingPriorityCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProcessingPriorityCodeField} The decoded data structure.
 */
export function _decode_ProcessingPriorityCodeField(el: _Element) {
    if (!_cached_decoder_for_ProcessingPriorityCodeField) {
        _cached_decoder_for_ProcessingPriorityCodeField =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_ProcessingPriorityCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProcessingPriorityCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingPriorityCodeField */
let _cached_encoder_for_ProcessingPriorityCodeField: $.ASN1Encoder<ProcessingPriorityCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessingPriorityCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessingPriorityCodeField */
/**
 * @summary Encodes a(n) ProcessingPriorityCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingPriorityCodeField, encoded as an ASN.1 Element.
 */
export function _encode_ProcessingPriorityCodeField(
    value: ProcessingPriorityCodeField,
    elGetter: $.ASN1Encoder<ProcessingPriorityCodeField>
) {
    if (!_cached_encoder_for_ProcessingPriorityCodeField) {
        _cached_encoder_for_ProcessingPriorityCodeField =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_ProcessingPriorityCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProcessingPriorityCodeField */

/* eslint-enable */
