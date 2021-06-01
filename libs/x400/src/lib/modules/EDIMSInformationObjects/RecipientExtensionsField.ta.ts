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
    RecipientExtensionsSubField,
    _decode_RecipientExtensionsSubField,
    _encode_RecipientExtensionsSubField,
} from '../EDIMSInformationObjects/RecipientExtensionsSubField.ta';
export {
    RecipientExtensionsSubField,
    _decode_RecipientExtensionsSubField,
    _encode_RecipientExtensionsSubField,
} from '../EDIMSInformationObjects/RecipientExtensionsSubField.ta';

/* START_OF_SYMBOL_DEFINITION RecipientExtensionsField */
/**
 * @summary RecipientExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientExtensionsField  ::=  SET OF RecipientExtensionsSubField
 * ```
 */
export type RecipientExtensionsField = RecipientExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RecipientExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientExtensionsField */
let _cached_decoder_for_RecipientExtensionsField: $.ASN1Decoder<RecipientExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientExtensionsField} The decoded data structure.
 */
export function _decode_RecipientExtensionsField(el: _Element) {
    if (!_cached_decoder_for_RecipientExtensionsField) {
        _cached_decoder_for_RecipientExtensionsField = $._decodeSetOf<RecipientExtensionsSubField>(
            () => _decode_RecipientExtensionsSubField
        );
    }
    return _cached_decoder_for_RecipientExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientExtensionsField */
let _cached_encoder_for_RecipientExtensionsField: $.ASN1Encoder<RecipientExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientExtensionsField */
/**
 * @summary Encodes a(n) RecipientExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientExtensionsField(
    value: RecipientExtensionsField,
    elGetter: $.ASN1Encoder<RecipientExtensionsField>
) {
    if (!_cached_encoder_for_RecipientExtensionsField) {
        _cached_encoder_for_RecipientExtensionsField = $._encodeSetOf<RecipientExtensionsSubField>(
            () => _encode_RecipientExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientExtensionsField */

/* eslint-enable */
