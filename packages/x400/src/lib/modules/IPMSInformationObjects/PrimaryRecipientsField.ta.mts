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
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';
export {
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PrimaryRecipientsField */
/**
 * @summary PrimaryRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryRecipientsField  ::=  SEQUENCE OF PrimaryRecipientsSubfield
 * ```
 */
export type PrimaryRecipientsField = PrimaryRecipientsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PrimaryRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryRecipientsField */
let _cached_decoder_for_PrimaryRecipientsField: $.ASN1Decoder<PrimaryRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryRecipientsField */

/* START_OF_SYMBOL_DEFINITION _decode_PrimaryRecipientsField */
/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryRecipientsField} The decoded data structure.
 */
export function _decode_PrimaryRecipientsField(el: _Element) {
    if (!_cached_decoder_for_PrimaryRecipientsField) {
        _cached_decoder_for_PrimaryRecipientsField = $._decodeSequenceOf<PrimaryRecipientsSubfield>(
            () => _decode_PrimaryRecipientsSubfield
        );
    }
    return _cached_decoder_for_PrimaryRecipientsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrimaryRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryRecipientsField */
let _cached_encoder_for_PrimaryRecipientsField: $.ASN1Encoder<PrimaryRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryRecipientsField */

/* START_OF_SYMBOL_DEFINITION _encode_PrimaryRecipientsField */
/**
 * @summary Encodes a(n) PrimaryRecipientsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryRecipientsField(
    value: PrimaryRecipientsField,
    elGetter: $.ASN1Encoder<PrimaryRecipientsField>
) {
    if (!_cached_encoder_for_PrimaryRecipientsField) {
        _cached_encoder_for_PrimaryRecipientsField = $._encodeSequenceOf<PrimaryRecipientsSubfield>(
            () => _encode_PrimaryRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_PrimaryRecipientsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrimaryRecipientsField */

/* eslint-enable */
