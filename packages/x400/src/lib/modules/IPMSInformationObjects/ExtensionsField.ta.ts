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
} from '../IPMSInformationObjects/IPMSExtension.ta.js';
export {
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.js';

/* START_OF_SYMBOL_DEFINITION ExtensionsField */
/**
 * @summary ExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionsField  ::=  SET OF IPMSExtension{{HeadingExtensions}}
 * ```
 */
export type ExtensionsField = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionsField */
let _cached_decoder_for_ExtensionsField: $.ASN1Decoder<ExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionsField} The decoded data structure.
 */
export function _decode_ExtensionsField(el: _Element) {
    if (!_cached_decoder_for_ExtensionsField) {
        _cached_decoder_for_ExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_ExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionsField */
let _cached_encoder_for_ExtensionsField: $.ASN1Encoder<ExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionsField */
/**
 * @summary Encodes a(n) ExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionsField(
    value: ExtensionsField,
    elGetter: $.ASN1Encoder<ExtensionsField>
) {
    if (!_cached_encoder_for_ExtensionsField) {
        _cached_encoder_for_ExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionsField */

/* eslint-enable */
