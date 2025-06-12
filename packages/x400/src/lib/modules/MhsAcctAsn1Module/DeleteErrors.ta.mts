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
    RetrievalError,
    RetrievalError_attribute_error /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_auto_action_request_error /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_request_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_delete_error /* IMPORTED_LONG_NAMED_INTEGER */,
    delete_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_fetch_restriction_error /* IMPORTED_LONG_NAMED_INTEGER */,
    fetch_restriction_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_invalid_parameter_error /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_parameter_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_range_error /* IMPORTED_LONG_NAMED_INTEGER */,
    range_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_sequence_number_error /* IMPORTED_LONG_NAMED_INTEGER */,
    sequence_number_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_service_error /* IMPORTED_LONG_NAMED_INTEGER */,
    service_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
export {
    RetrievalError,
    RetrievalError_attribute_error /* IMPORTED_LONG_NAMED_INTEGER */,
    attribute_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_auto_action_request_error /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_request_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_delete_error /* IMPORTED_LONG_NAMED_INTEGER */,
    delete_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_fetch_restriction_error /* IMPORTED_LONG_NAMED_INTEGER */,
    fetch_restriction_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_invalid_parameter_error /* IMPORTED_LONG_NAMED_INTEGER */,
    invalid_parameter_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_range_error /* IMPORTED_LONG_NAMED_INTEGER */,
    range_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_sequence_number_error /* IMPORTED_LONG_NAMED_INTEGER */,
    sequence_number_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalError_service_error /* IMPORTED_LONG_NAMED_INTEGER */,
    service_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DeleteErrors */
/**
 * @summary DeleteErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteErrors  ::=
 *   RetrievalError
 *     (delete-error | invalid-parameter-error | range-error | security-error |
 *      sequence-number-error | service-error)
 * ```
 */
export type DeleteErrors = RetrievalError; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeleteErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteErrors */
let _cached_decoder_for_DeleteErrors: $.ASN1Decoder<DeleteErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteErrors */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteErrors} The decoded data structure.
 */
export function _decode_DeleteErrors(el: _Element) {
    if (!_cached_decoder_for_DeleteErrors) {
        _cached_decoder_for_DeleteErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_DeleteErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteErrors */
let _cached_encoder_for_DeleteErrors: $.ASN1Encoder<DeleteErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteErrors */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteErrors */
/**
 * @summary Encodes a(n) DeleteErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteErrors, encoded as an ASN.1 Element.
 */
export function _encode_DeleteErrors(
    value: DeleteErrors,
    elGetter: $.ASN1Encoder<DeleteErrors>
) {
    if (!_cached_encoder_for_DeleteErrors) {
        _cached_encoder_for_DeleteErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_DeleteErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteErrors */

/* eslint-enable */
