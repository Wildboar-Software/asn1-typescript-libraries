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
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Password
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password  ::=  NumericString
 *     (FROM ("0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"))
 *     (SIZE (4))
 * ```
 */
export
type Password = NumericString; // NumericString

let _cached_decoder_for_Password: $.ASN1Decoder<Password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Password
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Password (el: _Element): Password {
    if (!_cached_decoder_for_Password) { _cached_decoder_for_Password = $._decodeNumericString; }
    return _cached_decoder_for_Password(el);
}

let _cached_encoder_for_Password: $.ASN1Encoder<Password> | null = null;

/**
 * @summary Encodes a(n) Password into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password, encoded as an ASN.1 Element.
 */
export
function _encode_Password (value: Password, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Password) { _cached_encoder_for_Password = $._encodeNumericString; }
    return _cached_encoder_for_Password(value, elGetter);
}


/* eslint-enable */
