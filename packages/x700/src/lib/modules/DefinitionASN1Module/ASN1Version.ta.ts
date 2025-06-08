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

/* START_OF_SYMBOL_DEFINITION ASN1Version */
/**
 * @summary ASN1Version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ASN1Version  ::=  BIT STRING {v1990(0), v1994(1)}
 * ```
 */
export type ASN1Version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ASN1Version */

/* START_OF_SYMBOL_DEFINITION ASN1Version_v1990 */
/**
 * @summary ASN1Version_v1990
 * @constant
 */
export const ASN1Version_v1990: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ASN1Version_v1990 */

/* START_OF_SYMBOL_DEFINITION v1990 */
/**
 * @summary v1990
 * @constant
 */
export const v1990: number = ASN1Version_v1990; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1990 */

/* START_OF_SYMBOL_DEFINITION ASN1Version_v1994 */
/**
 * @summary ASN1Version_v1994
 * @constant
 */
export const ASN1Version_v1994: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ASN1Version_v1994 */

/* START_OF_SYMBOL_DEFINITION v1994 */
/**
 * @summary v1994
 * @constant
 */
export const v1994: number = ASN1Version_v1994; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1994 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ASN1Version */
let _cached_decoder_for_ASN1Version: $.ASN1Decoder<ASN1Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _decode_ASN1Version */
/**
 * @summary Decodes an ASN.1 element into a(n) ASN1Version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ASN1Version} The decoded data structure.
 */
export function _decode_ASN1Version(el: _Element) {
    if (!_cached_decoder_for_ASN1Version) {
        _cached_decoder_for_ASN1Version = $._decodeBitString;
    }
    return _cached_decoder_for_ASN1Version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ASN1Version */
let _cached_encoder_for_ASN1Version: $.ASN1Encoder<ASN1Version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ASN1Version */

/* START_OF_SYMBOL_DEFINITION _encode_ASN1Version */
/**
 * @summary Encodes a(n) ASN1Version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASN1Version, encoded as an ASN.1 Element.
 */
export function _encode_ASN1Version(
    value: ASN1Version,
    elGetter: $.ASN1Encoder<ASN1Version>
) {
    if (!_cached_encoder_for_ASN1Version) {
        _cached_encoder_for_ASN1Version = $._encodeBitString;
    }
    return _cached_encoder_for_ASN1Version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ASN1Version */

/* eslint-enable */
