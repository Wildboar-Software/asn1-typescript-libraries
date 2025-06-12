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
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
export {
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NewRecipient */
/**
 * @summary NewRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NewRecipient  ::=  RecipientField
 * ```
 */
export type NewRecipient = RecipientField; // DefinedType
/* END_OF_SYMBOL_DEFINITION NewRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NewRecipient */
let _cached_decoder_for_NewRecipient: $.ASN1Decoder<NewRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NewRecipient */

/* START_OF_SYMBOL_DEFINITION _decode_NewRecipient */
/**
 * @summary Decodes an ASN.1 element into a(n) NewRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NewRecipient} The decoded data structure.
 */
export function _decode_NewRecipient(el: _Element) {
    if (!_cached_decoder_for_NewRecipient) {
        _cached_decoder_for_NewRecipient = _decode_RecipientField;
    }
    return _cached_decoder_for_NewRecipient(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NewRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NewRecipient */
let _cached_encoder_for_NewRecipient: $.ASN1Encoder<NewRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NewRecipient */

/* START_OF_SYMBOL_DEFINITION _encode_NewRecipient */
/**
 * @summary Encodes a(n) NewRecipient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NewRecipient, encoded as an ASN.1 Element.
 */
export function _encode_NewRecipient(
    value: NewRecipient,
    elGetter: $.ASN1Encoder<NewRecipient>
) {
    if (!_cached_encoder_for_NewRecipient) {
        _cached_encoder_for_NewRecipient = _encode_RecipientField;
    }
    return _cached_encoder_for_NewRecipient(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NewRecipient */

/* eslint-enable */
