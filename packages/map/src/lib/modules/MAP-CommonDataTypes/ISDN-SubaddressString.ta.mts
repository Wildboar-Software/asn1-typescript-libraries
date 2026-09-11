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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxISDN_SubaddressLength } from "./maxISDN-SubaddressLength.va.mjs";

/**
 * @summary ISDN_SubaddressString
 * @description
 *
 * ISDN subaddress. Size 1..`maxISDN-SubaddressLength` (21): one octet for type
 * of subaddress and odd/even indicator, then up to 20 octets of subaddress
 * information.
 *
 * First octet:
 * - bit 8: 1 (no extension)
 * - bits 765: type of subaddress — 000 NSAP (X.213/ISO 8348 AD2); 010 User
 *   Specified; all other values reserved
 * - bit 4: odd/even indicator — 0 even number of address signals; 1 odd. Used
 *   when type is "user specified" and coding is BCD
 * - bits 321: 000 (unused)
 *
 * NSAP shall be formatted as specified by octet 4 (AFI), using the preferred
 * binary encoding of X.213/ISO 8348 AD2; see ITU-T Rec I.334. User-specific
 * subaddress is encoded per the user specification (max 20 octets). When
 * interworking with X.25, BCD coding should be applied.
 *
 * Used e.g. as forwarded-to subaddress (3GPP TS 29.002 V19.1.0 clauses 17.7.8
 * and 7.6.2.23).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDN-SubaddressString  ::=  
 *     OCTET STRING (SIZE (1..maxISDN-SubaddressLength))
 * ```
 */
export
type ISDN_SubaddressString = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ISDN_SubaddressString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ISDN_SubaddressString = (el: _Element): ISDN_SubaddressString => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxISDN_SubaddressLength) {
        throw new ASN1SizeError("ISDN_SubaddressString violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ISDN_SubaddressString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDN_SubaddressString, encoded as an ASN.1 Element.
 */
export const _encode_ISDN_SubaddressString = $._encodeOctetString;


/* eslint-enable */
