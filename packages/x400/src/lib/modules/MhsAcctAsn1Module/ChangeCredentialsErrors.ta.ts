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
    AdministrationError,
    AdministrationError_register_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    register_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_new_credentials_unacceptable /* IMPORTED_LONG_NAMED_INTEGER */,
    new_credentials_unacceptable /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_old_credentials_incorrectly_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    old_credentials_incorrectly_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_remote_bind_error /* IMPORTED_LONG_NAMED_INTEGER */,
    remote_bind_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AdministrationError,
    _encode_AdministrationError,
} from '../MhsAcctAsn1Module/AdministrationError.ta.js';
export {
    AdministrationError,
    AdministrationError_register_rejected /* IMPORTED_LONG_NAMED_INTEGER */,
    register_rejected /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_new_credentials_unacceptable /* IMPORTED_LONG_NAMED_INTEGER */,
    new_credentials_unacceptable /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_old_credentials_incorrectly_specified /* IMPORTED_LONG_NAMED_INTEGER */,
    old_credentials_incorrectly_specified /* IMPORTED_SHORT_NAMED_INTEGER */,
    AdministrationError_remote_bind_error /* IMPORTED_LONG_NAMED_INTEGER */,
    remote_bind_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AdministrationError,
    _encode_AdministrationError,
} from '../MhsAcctAsn1Module/AdministrationError.ta.js';

/* START_OF_SYMBOL_DEFINITION ChangeCredentialsErrors */
/**
 * @summary ChangeCredentialsErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeCredentialsErrors  ::=
 *   AdministrationError
 *     (new-credentials-unacceptable | old-credentials-incorrectly-specified |
 *      remote-bind-error)
 * ```
 */
export type ChangeCredentialsErrors = AdministrationError; // DefinedType
/* END_OF_SYMBOL_DEFINITION ChangeCredentialsErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeCredentialsErrors */
let _cached_decoder_for_ChangeCredentialsErrors: $.ASN1Decoder<ChangeCredentialsErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangeCredentialsErrors */

/* START_OF_SYMBOL_DEFINITION _decode_ChangeCredentialsErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangeCredentialsErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangeCredentialsErrors} The decoded data structure.
 */
export function _decode_ChangeCredentialsErrors(el: _Element) {
    if (!_cached_decoder_for_ChangeCredentialsErrors) {
        _cached_decoder_for_ChangeCredentialsErrors = _decode_AdministrationError;
    }
    return _cached_decoder_for_ChangeCredentialsErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangeCredentialsErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeCredentialsErrors */
let _cached_encoder_for_ChangeCredentialsErrors: $.ASN1Encoder<ChangeCredentialsErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangeCredentialsErrors */

/* START_OF_SYMBOL_DEFINITION _encode_ChangeCredentialsErrors */
/**
 * @summary Encodes a(n) ChangeCredentialsErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeCredentialsErrors, encoded as an ASN.1 Element.
 */
export function _encode_ChangeCredentialsErrors(
    value: ChangeCredentialsErrors,
    elGetter: $.ASN1Encoder<ChangeCredentialsErrors>
) {
    if (!_cached_encoder_for_ChangeCredentialsErrors) {
        _cached_encoder_for_ChangeCredentialsErrors = _encode_AdministrationError;
    }
    return _cached_encoder_for_ChangeCredentialsErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangeCredentialsErrors */

/* eslint-enable */
