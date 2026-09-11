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
 * @summary AlertingPattern
 * @description
 *
 * Indication the MS may use to alert the user in a specific manner for
 * mobile-terminating traffic (switched call or USSD). One octet: either an
 * alerting level or an alerting category (GSM 02.07).
 *
 * - bits 8765: 0000 (unused)
 * - bits 43: type of pattern — 00 level; 01 category; 10 category; all other
 *   values reserved
 * - bits 21: type of alerting
 *
 * All other alerting-level and alerting-category values are reserved.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertingPattern  ::=  OCTET STRING (SIZE (1) )
 * ```
 */
export
type AlertingPattern = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AlertingPattern
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AlertingPattern = $._decodeOctetString;

/**
 * @summary Encodes a(n) AlertingPattern into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertingPattern, encoded as an ASN.1 Element.
 */
export const _encode_AlertingPattern = $._encodeOctetString;


/* eslint-enable */
