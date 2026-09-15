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



/**
 * @summary Ext_SS_Status
 * @description
 *
 * State of an individual supplementary service as in 3GPP TS 23.011. Size 1..5
 * octets.
 *
 * Octet 1: bits 8765 unused (0000); bits 4321 convey the Q, P, R and A bits
 * (bit 4 = Q, bit 3 = P, bit 2 = R, bit 1 = A). Octets 2-5 are reserved for
 * future use and shall be discarded if received and not understood.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.3.17).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-Status  ::=  OCTET STRING (SIZE (1..5))
 * ```
 */
export
type Ext_SS_Status = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_Status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_SS_Status = (el: _Element): Ext_SS_Status => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("Ext_SS_Status violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_SS_Status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_Status, encoded as an ASN.1 Element.
 */
export const _encode_Ext_SS_Status = $._encodeOctetString;


/* eslint-enable */
