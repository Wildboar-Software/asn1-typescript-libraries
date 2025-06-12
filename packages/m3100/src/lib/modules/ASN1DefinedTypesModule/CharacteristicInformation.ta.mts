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

/* START_OF_SYMBOL_DEFINITION CharacteristicInformation */
/**
 * @summary CharacteristicInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacteristicInformation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CharacteristicInformation = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacteristicInformation */
let _cached_decoder_for_CharacteristicInformation: $.ASN1Decoder<CharacteristicInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _decode_CharacteristicInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacteristicInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacteristicInformation} The decoded data structure.
 */
export function _decode_CharacteristicInformation(el: _Element) {
    if (!_cached_decoder_for_CharacteristicInformation) {
        _cached_decoder_for_CharacteristicInformation =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CharacteristicInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacteristicInformation */
let _cached_encoder_for_CharacteristicInformation: $.ASN1Encoder<CharacteristicInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _encode_CharacteristicInformation */
/**
 * @summary Encodes a(n) CharacteristicInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacteristicInformation, encoded as an ASN.1 Element.
 */
export function _encode_CharacteristicInformation(
    value: CharacteristicInformation,
    elGetter: $.ASN1Encoder<CharacteristicInformation>
) {
    if (!_cached_encoder_for_CharacteristicInformation) {
        _cached_encoder_for_CharacteristicInformation =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CharacteristicInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacteristicInformation */

/* eslint-enable */
