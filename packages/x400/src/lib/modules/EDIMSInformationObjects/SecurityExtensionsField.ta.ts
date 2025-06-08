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
    SecurityExtensionsSubField,
    _decode_SecurityExtensionsSubField,
    _encode_SecurityExtensionsSubField,
} from '../EDIMSInformationObjects/SecurityExtensionsSubField.ta';
export {
    SecurityExtensionsSubField,
    _decode_SecurityExtensionsSubField,
    _encode_SecurityExtensionsSubField,
} from '../EDIMSInformationObjects/SecurityExtensionsSubField.ta';

/* START_OF_SYMBOL_DEFINITION SecurityExtensionsField */
/**
 * @summary SecurityExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityExtensionsField  ::=  SET OF SecurityExtensionsSubField
 * ```
 */
export type SecurityExtensionsField = SecurityExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsField */
let _cached_decoder_for_SecurityExtensionsField: $.ASN1Decoder<SecurityExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityExtensionsField} The decoded data structure.
 */
export function _decode_SecurityExtensionsField(el: _Element) {
    if (!_cached_decoder_for_SecurityExtensionsField) {
        _cached_decoder_for_SecurityExtensionsField = $._decodeSetOf<SecurityExtensionsSubField>(
            () => _decode_SecurityExtensionsSubField
        );
    }
    return _cached_decoder_for_SecurityExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsField */
let _cached_encoder_for_SecurityExtensionsField: $.ASN1Encoder<SecurityExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsField */
/**
 * @summary Encodes a(n) SecurityExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_SecurityExtensionsField(
    value: SecurityExtensionsField,
    elGetter: $.ASN1Encoder<SecurityExtensionsField>
) {
    if (!_cached_encoder_for_SecurityExtensionsField) {
        _cached_encoder_for_SecurityExtensionsField = $._encodeSetOf<SecurityExtensionsSubField>(
            () => _encode_SecurityExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityExtensionsField */

/* eslint-enable */
