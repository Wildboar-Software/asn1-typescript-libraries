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

/* START_OF_SYMBOL_DEFINITION SignatureValue */
/**
 * @summary SignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */
let _cached_decoder_for_SignatureValue: $.ASN1Decoder<SignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureValue */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureValue} The decoded data structure.
 */
export function _decode_SignatureValue(el: _Element) {
    if (!_cached_decoder_for_SignatureValue) {
        _cached_decoder_for_SignatureValue = $._decodeOctetString;
    }
    return _cached_decoder_for_SignatureValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */
let _cached_encoder_for_SignatureValue: $.ASN1Encoder<SignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureValue */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureValue */
/**
 * @summary Encodes a(n) SignatureValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureValue, encoded as an ASN.1 Element.
 */
export function _encode_SignatureValue(
    value: SignatureValue,
    elGetter: $.ASN1Encoder<SignatureValue>
) {
    if (!_cached_encoder_for_SignatureValue) {
        _cached_encoder_for_SignatureValue = $._encodeOctetString;
    }
    return _cached_encoder_for_SignatureValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureValue */

/* eslint-enable */
