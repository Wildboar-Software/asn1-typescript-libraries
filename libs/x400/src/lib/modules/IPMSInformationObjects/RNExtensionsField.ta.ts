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

/* START_OF_SYMBOL_DEFINITION RNExtensionsField */
/**
 * @summary RNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RNExtensionsField  ::=  SET OF IPMSExtension{{RNExtensions}}
 * ```
 */
export type RNExtensionsField = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RNExtensionsField */
let _cached_decoder_for_RNExtensionsField: $.ASN1Decoder<RNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_RNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) RNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RNExtensionsField} The decoded data structure.
 */
export function _decode_RNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_RNExtensionsField) {
        _cached_decoder_for_RNExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_RNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RNExtensionsField */
let _cached_encoder_for_RNExtensionsField: $.ASN1Encoder<RNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_RNExtensionsField */
/**
 * @summary Encodes a(n) RNExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_RNExtensionsField(
    value: RNExtensionsField,
    elGetter: $.ASN1Encoder<RNExtensionsField>
) {
    if (!_cached_encoder_for_RNExtensionsField) {
        _cached_encoder_for_RNExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_RNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RNExtensionsField */

/* eslint-enable */
