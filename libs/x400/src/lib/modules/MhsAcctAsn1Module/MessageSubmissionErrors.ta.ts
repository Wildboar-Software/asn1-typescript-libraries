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
import {
    SubmissionError,
    SubmissionError_submission_control_violated /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_control_violated /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_element_of_service_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    element_of_service_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_deferred_delivery_cancellation_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    deferred_delivery_cancellation_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_originator_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    originator_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_recipient_improperly_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_improperly_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_message_submission_identifier_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    message_submission_identifier_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_inconsistent_request /* IMPORTED_LONG_NAMED_INTEGER */,
    inconsistent_request /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_remote_bind_error /* IMPORTED_LONG_NAMED_INTEGER */,
    remote_bind_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta';
export {
    SubmissionError,
    SubmissionError_submission_control_violated /* IMPORTED_LONG_NAMED_INTEGER */,
    submission_control_violated /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_element_of_service_not_subscribed /* IMPORTED_LONG_NAMED_INTEGER */,
    element_of_service_not_subscribed /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_deferred_delivery_cancellation_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    deferred_delivery_cancellation_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_originator_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    originator_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_recipient_improperly_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_improperly_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_message_submission_identifier_invalid /* IMPORTED_LONG_NAMED_INTEGER */,
    message_submission_identifier_invalid /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_inconsistent_request /* IMPORTED_LONG_NAMED_INTEGER */,
    inconsistent_request /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmissionError_remote_bind_error /* IMPORTED_LONG_NAMED_INTEGER */,
    remote_bind_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta';

/* START_OF_SYMBOL_DEFINITION MessageSubmissionErrors */
/**
 * @summary MessageSubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionErrors  ::=
 *   SubmissionError
 *     (submission-control-violated | element-of-service-not-subscribed |
 *      originator-invalid | recipient-improperly-specified | inconsistent-request
 *      | security-error | unsupported-critical-function | remote-bind-error)
 * ```
 */
export type MessageSubmissionErrors = SubmissionError; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionErrors */
let _cached_decoder_for_MessageSubmissionErrors: $.ASN1Decoder<MessageSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSubmissionErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionErrors} The decoded data structure.
 */
export function _decode_MessageSubmissionErrors(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionErrors) {
        _cached_decoder_for_MessageSubmissionErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_MessageSubmissionErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionErrors */
let _cached_encoder_for_MessageSubmissionErrors: $.ASN1Encoder<MessageSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSubmissionErrors */
/**
 * @summary Encodes a(n) MessageSubmissionErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionErrors, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionErrors(
    value: MessageSubmissionErrors,
    elGetter: $.ASN1Encoder<MessageSubmissionErrors>
) {
    if (!_cached_encoder_for_MessageSubmissionErrors) {
        _cached_encoder_for_MessageSubmissionErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_MessageSubmissionErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSubmissionErrors */

/* eslint-enable */
