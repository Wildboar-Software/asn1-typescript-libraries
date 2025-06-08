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

/* START_OF_SYMBOL_DEFINITION SequenceNumberProblem */
/**
 * @summary SequenceNumberProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumberProblem  ::=  INTEGER {no-such-entry(0)}(0..ub-error-reasons)
 * ```
 */
export type SequenceNumberProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION SequenceNumberProblem_no_such_entry */
/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const SequenceNumberProblem_no_such_entry: SequenceNumberProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceNumberProblem_no_such_entry */

/* START_OF_SYMBOL_DEFINITION no_such_entry */
/**
 * @summary SequenceNumberProblem_no_such_entry
 * @constant
 * @type {number}
 */
export const no_such_entry: SequenceNumberProblem = SequenceNumberProblem_no_such_entry; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_such_entry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberProblem */
let _cached_decoder_for_SequenceNumberProblem: $.ASN1Decoder<SequenceNumberProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceNumberProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNumberProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceNumberProblem} The decoded data structure.
 */
export function _decode_SequenceNumberProblem(el: _Element) {
    if (!_cached_decoder_for_SequenceNumberProblem) {
        _cached_decoder_for_SequenceNumberProblem = $._decodeInteger;
    }
    return _cached_decoder_for_SequenceNumberProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberProblem */
let _cached_encoder_for_SequenceNumberProblem: $.ASN1Encoder<SequenceNumberProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumberProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceNumberProblem */
/**
 * @summary Encodes a(n) SequenceNumberProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNumberProblem, encoded as an ASN.1 Element.
 */
export function _encode_SequenceNumberProblem(
    value: SequenceNumberProblem,
    elGetter: $.ASN1Encoder<SequenceNumberProblem>
) {
    if (!_cached_encoder_for_SequenceNumberProblem) {
        _cached_encoder_for_SequenceNumberProblem = $._encodeInteger;
    }
    return _cached_encoder_for_SequenceNumberProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceNumberProblem */

/* eslint-enable */
