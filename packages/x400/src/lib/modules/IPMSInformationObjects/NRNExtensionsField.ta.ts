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

/* START_OF_SYMBOL_DEFINITION NRNExtensionsField */
/**
 * @summary NRNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NRNExtensionsField  ::=  SET OF IPMSExtension{{NRNExtensions}}
 * ```
 */
export type NRNExtensionsField = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NRNExtensionsField */
let _cached_decoder_for_NRNExtensionsField: $.ASN1Decoder<NRNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_NRNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) NRNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NRNExtensionsField} The decoded data structure.
 */
export function _decode_NRNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_NRNExtensionsField) {
        _cached_decoder_for_NRNExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_NRNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NRNExtensionsField */
let _cached_encoder_for_NRNExtensionsField: $.ASN1Encoder<NRNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_NRNExtensionsField */
/**
 * @summary Encodes a(n) NRNExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NRNExtensionsField(
    value: NRNExtensionsField,
    elGetter: $.ASN1Encoder<NRNExtensionsField>
) {
    if (!_cached_encoder_for_NRNExtensionsField) {
        _cached_encoder_for_NRNExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_NRNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NRNExtensionsField */

/* eslint-enable */
