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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta';
export {
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta';

/* START_OF_SYMBOL_DEFINITION OtherNotificationTypeFields */
/**
 * @summary OtherNotificationTypeFields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherNotificationTypeFields  ::=  SET OF IPMSExtension{{OtherNotifications}}
 * ```
 */
export type OtherNotificationTypeFields = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OtherNotificationTypeFields */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherNotificationTypeFields */
let _cached_decoder_for_OtherNotificationTypeFields: $.ASN1Decoder<OtherNotificationTypeFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherNotificationTypeFields */

/* START_OF_SYMBOL_DEFINITION _decode_OtherNotificationTypeFields */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherNotificationTypeFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherNotificationTypeFields} The decoded data structure.
 */
export function _decode_OtherNotificationTypeFields(el: _Element) {
    if (!_cached_decoder_for_OtherNotificationTypeFields) {
        _cached_decoder_for_OtherNotificationTypeFields = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_OtherNotificationTypeFields(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherNotificationTypeFields */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherNotificationTypeFields */
let _cached_encoder_for_OtherNotificationTypeFields: $.ASN1Encoder<OtherNotificationTypeFields> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherNotificationTypeFields */

/* START_OF_SYMBOL_DEFINITION _encode_OtherNotificationTypeFields */
/**
 * @summary Encodes a(n) OtherNotificationTypeFields into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherNotificationTypeFields, encoded as an ASN.1 Element.
 */
export function _encode_OtherNotificationTypeFields(
    value: OtherNotificationTypeFields,
    elGetter: $.ASN1Encoder<OtherNotificationTypeFields>
) {
    if (!_cached_encoder_for_OtherNotificationTypeFields) {
        _cached_encoder_for_OtherNotificationTypeFields = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_OtherNotificationTypeFields(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherNotificationTypeFields */

/* eslint-enable */
