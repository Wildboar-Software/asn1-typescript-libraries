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
import {
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';
export {
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SubmissionControlResult */
/**
 * @summary SubmissionControlResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlResult  ::=  Waiting
 * ```
 */
export type SubmissionControlResult = Waiting; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubmissionControlResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControlResult */
let _cached_decoder_for_SubmissionControlResult: $.ASN1Decoder<SubmissionControlResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControlResult */

/* START_OF_SYMBOL_DEFINITION _decode_SubmissionControlResult */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlResult} The decoded data structure.
 */
export function _decode_SubmissionControlResult(el: _Element) {
    if (!_cached_decoder_for_SubmissionControlResult) {
        _cached_decoder_for_SubmissionControlResult = _decode_Waiting;
    }
    return _cached_decoder_for_SubmissionControlResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmissionControlResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControlResult */
let _cached_encoder_for_SubmissionControlResult: $.ASN1Encoder<SubmissionControlResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControlResult */

/* START_OF_SYMBOL_DEFINITION _encode_SubmissionControlResult */
/**
 * @summary Encodes a(n) SubmissionControlResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlResult, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControlResult(
    value: SubmissionControlResult,
    elGetter: $.ASN1Encoder<SubmissionControlResult>
) {
    if (!_cached_encoder_for_SubmissionControlResult) {
        _cached_encoder_for_SubmissionControlResult = _encode_Waiting;
    }
    return _cached_encoder_for_SubmissionControlResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmissionControlResult */

/* eslint-enable */
