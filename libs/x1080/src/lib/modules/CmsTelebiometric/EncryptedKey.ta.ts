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

/* START_OF_SYMBOL_DEFINITION EncryptedKey */
/**
 * @summary EncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export type EncryptedKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedKey */
let _cached_decoder_for_EncryptedKey: $.ASN1Decoder<EncryptedKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedKey */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedKey} The decoded data structure.
 */
export function _decode_EncryptedKey(el: _Element) {
    if (!_cached_decoder_for_EncryptedKey) {
        _cached_decoder_for_EncryptedKey = $._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedKey */
let _cached_encoder_for_EncryptedKey: $.ASN1Encoder<EncryptedKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedKey */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedKey */
/**
 * @summary Encodes a(n) EncryptedKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedKey, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedKey(
    value: EncryptedKey,
    elGetter: $.ASN1Encoder<EncryptedKey>
) {
    if (!_cached_encoder_for_EncryptedKey) {
        _cached_encoder_for_EncryptedKey = $._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedKey */

/* eslint-enable */
