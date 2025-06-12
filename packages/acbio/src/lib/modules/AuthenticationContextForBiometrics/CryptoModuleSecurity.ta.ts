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

/* START_OF_SYMBOL_DEFINITION CryptoModuleSecurity */
/**
 * @summary CryptoModuleSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CryptoModuleSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type CryptoModuleSecurity = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */
let _cached_decoder_for_CryptoModuleSecurity: $.ASN1Decoder<CryptoModuleSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */
/**
 * @summary Decodes an ASN.1 element into a(n) CryptoModuleSecurity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CryptoModuleSecurity} The decoded data structure.
 */
export function _decode_CryptoModuleSecurity(el: _Element) {
    if (!_cached_decoder_for_CryptoModuleSecurity) {
        _cached_decoder_for_CryptoModuleSecurity = $._decodeOctetString;
    }
    return _cached_decoder_for_CryptoModuleSecurity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */
let _cached_encoder_for_CryptoModuleSecurity: $.ASN1Encoder<CryptoModuleSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */
/**
 * @summary Encodes a(n) CryptoModuleSecurity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoModuleSecurity, encoded as an ASN.1 Element.
 */
export function _encode_CryptoModuleSecurity(
    value: CryptoModuleSecurity,
    elGetter: $.ASN1Encoder<CryptoModuleSecurity>
) {
    if (!_cached_encoder_for_CryptoModuleSecurity) {
        _cached_encoder_for_CryptoModuleSecurity = $._encodeOctetString;
    }
    return _cached_encoder_for_CryptoModuleSecurity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */

/* eslint-enable */
