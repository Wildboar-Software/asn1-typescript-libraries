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
    SummarizeErrors,
    _decode_SummarizeErrors,
    _encode_SummarizeErrors,
} from '../MhsAcctAsn1Module/SummarizeErrors.ta.js';
export {
    SummarizeErrors,
    _decode_SummarizeErrors,
    _encode_SummarizeErrors,
} from '../MhsAcctAsn1Module/SummarizeErrors.ta.js';

/* START_OF_SYMBOL_DEFINITION ListErrors */
/**
 * @summary ListErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListErrors  ::=  SummarizeErrors
 * ```
 */
export type ListErrors = SummarizeErrors; // DefinedType
/* END_OF_SYMBOL_DEFINITION ListErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListErrors */
let _cached_decoder_for_ListErrors: $.ASN1Decoder<ListErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListErrors */

/* START_OF_SYMBOL_DEFINITION _decode_ListErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) ListErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListErrors} The decoded data structure.
 */
export function _decode_ListErrors(el: _Element) {
    if (!_cached_decoder_for_ListErrors) {
        _cached_decoder_for_ListErrors = _decode_SummarizeErrors;
    }
    return _cached_decoder_for_ListErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListErrors */
let _cached_encoder_for_ListErrors: $.ASN1Encoder<ListErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListErrors */

/* START_OF_SYMBOL_DEFINITION _encode_ListErrors */
/**
 * @summary Encodes a(n) ListErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListErrors, encoded as an ASN.1 Element.
 */
export function _encode_ListErrors(
    value: ListErrors,
    elGetter: $.ASN1Encoder<ListErrors>
) {
    if (!_cached_encoder_for_ListErrors) {
        _cached_encoder_for_ListErrors = _encode_SummarizeErrors;
    }
    return _cached_encoder_for_ListErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListErrors */

/* eslint-enable */
