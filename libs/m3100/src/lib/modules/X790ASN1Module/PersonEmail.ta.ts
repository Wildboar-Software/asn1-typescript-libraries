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

/* START_OF_SYMBOL_DEFINITION PersonEmail */
/**
 * @summary PersonEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonEmail  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonEmail = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonEmail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonEmail */
let _cached_decoder_for_PersonEmail: $.ASN1Decoder<PersonEmail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _decode_PersonEmail */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonEmail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonEmail} The decoded data structure.
 */
export function _decode_PersonEmail(el: _Element) {
    if (!_cached_decoder_for_PersonEmail) {
        _cached_decoder_for_PersonEmail = $._decodeGraphicString;
    }
    return _cached_decoder_for_PersonEmail(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonEmail */
let _cached_encoder_for_PersonEmail: $.ASN1Encoder<PersonEmail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonEmail */

/* START_OF_SYMBOL_DEFINITION _encode_PersonEmail */
/**
 * @summary Encodes a(n) PersonEmail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonEmail, encoded as an ASN.1 Element.
 */
export function _encode_PersonEmail(
    value: PersonEmail,
    elGetter: $.ASN1Encoder<PersonEmail>
) {
    if (!_cached_encoder_for_PersonEmail) {
        _cached_encoder_for_PersonEmail = $._encodeGraphicString;
    }
    return _cached_encoder_for_PersonEmail(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonEmail */

/* eslint-enable */
