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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
export {
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NotificationExtensionsField */
/**
 * @summary NotificationExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationExtensionsField  ::=  SET OF IPMSExtension{{NotificationExtensions}}
 * ```
 */
export type NotificationExtensionsField = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NotificationExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationExtensionsField */
let _cached_decoder_for_NotificationExtensionsField: $.ASN1Decoder<NotificationExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationExtensionsField} The decoded data structure.
 */
export function _decode_NotificationExtensionsField(el: _Element) {
    if (!_cached_decoder_for_NotificationExtensionsField) {
        _cached_decoder_for_NotificationExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_NotificationExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationExtensionsField */
let _cached_encoder_for_NotificationExtensionsField: $.ASN1Encoder<NotificationExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationExtensionsField */
/**
 * @summary Encodes a(n) NotificationExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NotificationExtensionsField(
    value: NotificationExtensionsField,
    elGetter: $.ASN1Encoder<NotificationExtensionsField>
) {
    if (!_cached_encoder_for_NotificationExtensionsField) {
        _cached_encoder_for_NotificationExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_NotificationExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationExtensionsField */

/* eslint-enable */
