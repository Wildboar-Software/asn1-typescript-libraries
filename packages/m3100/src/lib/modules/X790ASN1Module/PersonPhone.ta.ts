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

/* START_OF_SYMBOL_DEFINITION PersonPhone */
/**
 * @summary PersonPhone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonPhone  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonPhone = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonPhone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonPhone */
let _cached_decoder_for_PersonPhone: $.ASN1Decoder<PersonPhone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _decode_PersonPhone */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonPhone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonPhone} The decoded data structure.
 */
export function _decode_PersonPhone(el: _Element) {
    if (!_cached_decoder_for_PersonPhone) {
        _cached_decoder_for_PersonPhone = $._decodeGraphicString;
    }
    return _cached_decoder_for_PersonPhone(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonPhone */
let _cached_encoder_for_PersonPhone: $.ASN1Encoder<PersonPhone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonPhone */

/* START_OF_SYMBOL_DEFINITION _encode_PersonPhone */
/**
 * @summary Encodes a(n) PersonPhone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonPhone, encoded as an ASN.1 Element.
 */
export function _encode_PersonPhone(
    value: PersonPhone,
    elGetter: $.ASN1Encoder<PersonPhone>
) {
    if (!_cached_encoder_for_PersonPhone) {
        _cached_encoder_for_PersonPhone = $._encodeGraphicString;
    }
    return _cached_encoder_for_PersonPhone(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonPhone */

/* eslint-enable */
