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
    FNExtensionsSubField,
    _decode_FNExtensionsSubField,
    _encode_FNExtensionsSubField,
} from '../EDIMSInformationObjects/FNExtensionsSubField.ta.mjs';
export {
    FNExtensionsSubField,
    _decode_FNExtensionsSubField,
    _encode_FNExtensionsSubField,
} from '../EDIMSInformationObjects/FNExtensionsSubField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION FNExtensionsField */
/**
 * @summary FNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNExtensionsField  ::=  SET OF FNExtensionsSubField
 * ```
 */
export type FNExtensionsField = FNExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsField */
let _cached_decoder_for_FNExtensionsField: $.ASN1Decoder<FNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_FNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNExtensionsField} The decoded data structure.
 */
export function _decode_FNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_FNExtensionsField) {
        _cached_decoder_for_FNExtensionsField = $._decodeSetOf<FNExtensionsSubField>(
            () => _decode_FNExtensionsSubField
        );
    }
    return _cached_decoder_for_FNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsField */
let _cached_encoder_for_FNExtensionsField: $.ASN1Encoder<FNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_FNExtensionsField */
/**
 * @summary Encodes a(n) FNExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_FNExtensionsField(
    value: FNExtensionsField,
    elGetter: $.ASN1Encoder<FNExtensionsField>
) {
    if (!_cached_encoder_for_FNExtensionsField) {
        _cached_encoder_for_FNExtensionsField = $._encodeSetOf<FNExtensionsSubField>(
            () => _encode_FNExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_FNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNExtensionsField */

/* eslint-enable */
