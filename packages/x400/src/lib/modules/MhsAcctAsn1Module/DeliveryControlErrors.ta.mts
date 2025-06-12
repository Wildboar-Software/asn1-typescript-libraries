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
    DeliveryError,
    DeliveryError_delivery_control_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_control_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_control_violates_registration /* IMPORTED_LONG_NAMED_INTEGER */,
    control_violates_registration /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';
export {
    DeliveryError,
    DeliveryError_delivery_control_violation /* IMPORTED_LONG_NAMED_INTEGER */,
    delivery_control_violation /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_control_violates_registration /* IMPORTED_LONG_NAMED_INTEGER */,
    control_violates_registration /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_security_error /* IMPORTED_LONG_NAMED_INTEGER */,
    security_error /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveryError_unsupported_critical_function /* IMPORTED_LONG_NAMED_INTEGER */,
    unsupported_critical_function /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DeliveryControlErrors */
/**
 * @summary DeliveryControlErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControlErrors  ::=
 *   DeliveryError(control-violates-registration | security-error)
 * ```
 */
export type DeliveryControlErrors = DeliveryError; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlErrors */
let _cached_decoder_for_DeliveryControlErrors: $.ASN1Decoder<DeliveryControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControlErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControlErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControlErrors} The decoded data structure.
 */
export function _decode_DeliveryControlErrors(el: _Element) {
    if (!_cached_decoder_for_DeliveryControlErrors) {
        _cached_decoder_for_DeliveryControlErrors = _decode_DeliveryError;
    }
    return _cached_decoder_for_DeliveryControlErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlErrors */
let _cached_encoder_for_DeliveryControlErrors: $.ASN1Encoder<DeliveryControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControlErrors */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControlErrors */
/**
 * @summary Encodes a(n) DeliveryControlErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControlErrors, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControlErrors(
    value: DeliveryControlErrors,
    elGetter: $.ASN1Encoder<DeliveryControlErrors>
) {
    if (!_cached_encoder_for_DeliveryControlErrors) {
        _cached_encoder_for_DeliveryControlErrors = _encode_DeliveryError;
    }
    return _cached_encoder_for_DeliveryControlErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControlErrors */

/* eslint-enable */
