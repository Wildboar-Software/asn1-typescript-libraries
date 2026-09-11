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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TBCD_STRING
 * @description
 *
 * Telephony Binary Coded Decimal String: digits 0-9, `*`, `#`, a, b, c; two
 * digits per octet. Digit encodings: 0000-1001 (0-9), 1010 (`*`), 1011 (`#`),
 * 1100 (a), 1101 (b), 1110 (c). 1111 is filler when there is an odd number of
 * digits.
 *
 * Bits 4321 of octet n encode digit 2(n-1)+1 (the earlier digit of the pair).
 * Bits 8765 of octet n encode digit 2n (the later digit).
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBCD-STRING  ::=  OCTET STRING
 * ```
 */
export
type TBCD_STRING = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TBCD_STRING
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TBCD_STRING = $._decodeOctetString;

/**
 * @summary Encodes a(n) TBCD_STRING into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBCD_STRING, encoded as an ASN.1 Element.
 */
export const _encode_TBCD_STRING = $._encodeOctetString;


/* eslint-enable */
