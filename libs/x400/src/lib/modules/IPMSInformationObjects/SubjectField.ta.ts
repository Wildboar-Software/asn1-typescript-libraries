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

/* START_OF_SYMBOL_DEFINITION SubjectField */
/**
 * @summary SubjectField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectField  ::=  TeletexString(SIZE (0..ub-subject-field))
 * ```
 */
export type SubjectField = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION SubjectField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectField */
let _cached_decoder_for_SubjectField: $.ASN1Decoder<SubjectField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectField */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectField */
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectField} The decoded data structure.
 */
export function _decode_SubjectField(el: _Element) {
    if (!_cached_decoder_for_SubjectField) {
        _cached_decoder_for_SubjectField = $._decodeTeletexString;
    }
    return _cached_decoder_for_SubjectField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubjectField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectField */
let _cached_encoder_for_SubjectField: $.ASN1Encoder<SubjectField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectField */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectField */
/**
 * @summary Encodes a(n) SubjectField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectField, encoded as an ASN.1 Element.
 */
export function _encode_SubjectField(
    value: SubjectField,
    elGetter: $.ASN1Encoder<SubjectField>
) {
    if (!_cached_encoder_for_SubjectField) {
        _cached_encoder_for_SubjectField = $._encodeTeletexString;
    }
    return _cached_encoder_for_SubjectField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubjectField */

/* eslint-enable */
