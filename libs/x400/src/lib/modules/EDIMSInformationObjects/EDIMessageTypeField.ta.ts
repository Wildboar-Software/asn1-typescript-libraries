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
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';
export {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';

/* START_OF_SYMBOL_DEFINITION EDIMessageTypeField */
/**
 * @summary EDIMessageTypeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMessageTypeField  ::=  SET OF EDIMessageTypeFieldSubField
 * ```
 */
export type EDIMessageTypeField = EDIMessageTypeFieldSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EDIMessageTypeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMessageTypeField */
let _cached_decoder_for_EDIMessageTypeField: $.ASN1Decoder<EDIMessageTypeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMessageTypeField */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMessageTypeField */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMessageTypeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMessageTypeField} The decoded data structure.
 */
export function _decode_EDIMessageTypeField(el: _Element) {
    if (!_cached_decoder_for_EDIMessageTypeField) {
        _cached_decoder_for_EDIMessageTypeField = $._decodeSetOf<EDIMessageTypeFieldSubField>(
            () => _decode_EDIMessageTypeFieldSubField
        );
    }
    return _cached_decoder_for_EDIMessageTypeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMessageTypeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMessageTypeField */
let _cached_encoder_for_EDIMessageTypeField: $.ASN1Encoder<EDIMessageTypeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMessageTypeField */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMessageTypeField */
/**
 * @summary Encodes a(n) EDIMessageTypeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMessageTypeField, encoded as an ASN.1 Element.
 */
export function _encode_EDIMessageTypeField(
    value: EDIMessageTypeField,
    elGetter: $.ASN1Encoder<EDIMessageTypeField>
) {
    if (!_cached_encoder_for_EDIMessageTypeField) {
        _cached_encoder_for_EDIMessageTypeField = $._encodeSetOf<EDIMessageTypeFieldSubField>(
            () => _encode_EDIMessageTypeFieldSubField,
            $.BER
        );
    }
    return _cached_encoder_for_EDIMessageTypeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMessageTypeField */

/* eslint-enable */
