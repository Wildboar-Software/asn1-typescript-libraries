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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION RSAENCRYPTED */
/**
 * @summary RSAENCRYPTED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RSAENCRYPTED{ToBeEnciphered}  ::= 
 *   BIT STRING
 *     (CONSTRAINED BY {
 *        -- shall be the result of applying the encipherment procedure
 *        -- to the BER-encoded octets of a value of --ToBeEnciphered})
 * ```
 */
export
type RSAENCRYPTED = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION RSAENCRYPTED */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_RSAENCRYPTED */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) RSAENCRYPTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_RSAENCRYPTED<ToBeEnciphered>(_decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>) {
    return $._decodeBitString;
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_RSAENCRYPTED */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_RSAENCRYPTED */
/**
 * @summary Returns a function that will encode a(n) RSAENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) RSAENCRYPTED as an ASN.1 element.
 */
export
function _get_encoder_for_RSAENCRYPTED<ToBeEnciphered>(_encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>) {
    return $._encodeBitString;
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_RSAENCRYPTED */

/* eslint-enable */
