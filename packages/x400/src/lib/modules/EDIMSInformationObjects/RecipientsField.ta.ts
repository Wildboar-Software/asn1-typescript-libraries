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
    RecipientsSubField,
    _decode_RecipientsSubField,
    _encode_RecipientsSubField,
} from '../EDIMSInformationObjects/RecipientsSubField.ta.js';
export {
    RecipientsSubField,
    _decode_RecipientsSubField,
    _encode_RecipientsSubField,
} from '../EDIMSInformationObjects/RecipientsSubField.ta.js';

/* START_OF_SYMBOL_DEFINITION RecipientsField */
/**
 * @summary RecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientsField  ::=  SET OF RecipientsSubField
 * ```
 */
export type RecipientsField = RecipientsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientsField */
let _cached_decoder_for_RecipientsField: $.ASN1Decoder<RecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientsField */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientsField */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientsField} The decoded data structure.
 */
export function _decode_RecipientsField(el: _Element) {
    if (!_cached_decoder_for_RecipientsField) {
        _cached_decoder_for_RecipientsField = $._decodeSetOf<RecipientsSubField>(
            () => _decode_RecipientsSubField
        );
    }
    return _cached_decoder_for_RecipientsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientsField */
let _cached_encoder_for_RecipientsField: $.ASN1Encoder<RecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientsField */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientsField */
/**
 * @summary Encodes a(n) RecipientsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_RecipientsField(
    value: RecipientsField,
    elGetter: $.ASN1Encoder<RecipientsField>
) {
    if (!_cached_encoder_for_RecipientsField) {
        _cached_encoder_for_RecipientsField = $._encodeSetOf<RecipientsSubField>(
            () => _encode_RecipientsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientsField */

/* eslint-enable */
