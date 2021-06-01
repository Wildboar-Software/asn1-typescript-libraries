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
    MessageDeliveryErrors,
    _decode_MessageDeliveryErrors,
    _encode_MessageDeliveryErrors,
} from '../MhsAcctAsn1Module/MessageDeliveryErrors.ta';
export {
    MessageDeliveryErrors,
    _decode_MessageDeliveryErrors,
    _encode_MessageDeliveryErrors,
} from '../MhsAcctAsn1Module/MessageDeliveryErrors.ta';

/* START_OF_SYMBOL_DEFINITION ReportDeliveryErrors */
/**
 * @summary ReportDeliveryErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryErrors  ::=  MessageDeliveryErrors
 * ```
 */
export type ReportDeliveryErrors = MessageDeliveryErrors; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReportDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryErrors */
let _cached_decoder_for_ReportDeliveryErrors: $.ASN1Decoder<ReportDeliveryErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _decode_ReportDeliveryErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryErrors} The decoded data structure.
 */
export function _decode_ReportDeliveryErrors(el: _Element) {
    if (!_cached_decoder_for_ReportDeliveryErrors) {
        _cached_decoder_for_ReportDeliveryErrors = _decode_MessageDeliveryErrors;
    }
    return _cached_decoder_for_ReportDeliveryErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryErrors */
let _cached_encoder_for_ReportDeliveryErrors: $.ASN1Encoder<ReportDeliveryErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _encode_ReportDeliveryErrors */
/**
 * @summary Encodes a(n) ReportDeliveryErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryErrors, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryErrors(
    value: ReportDeliveryErrors,
    elGetter: $.ASN1Encoder<ReportDeliveryErrors>
) {
    if (!_cached_encoder_for_ReportDeliveryErrors) {
        _cached_encoder_for_ReportDeliveryErrors = _encode_MessageDeliveryErrors;
    }
    return _cached_encoder_for_ReportDeliveryErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportDeliveryErrors */

/* eslint-enable */
