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
 * @summary CellGlobalIdOrServiceAreaIdFixedLength
 * @description
 *
 * CGI or SAI as in 3GPP TS 23.003. Size 7 octets.
 *
 * - octet 1 bits 4321: MCC 1st digit; bits 8765: MCC 2nd digit
 * - octet 2 bits 4321: MCC 3rd digit; bits 8765: MNC 3rd digit or filler 1111
 *   for 2-digit MNCs
 * - octet 3 bits 4321: MNC 1st digit; bits 8765: MNC 2nd digit
 * - octets 4-5: Location Area Code as in 3GPP TS 24.008
 * - octets 6-7: Cell Identity (CI) or Service Area Code (SAC) as in 3GPP
 *   TS 23.003
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.22).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellGlobalIdOrServiceAreaIdFixedLength  ::=  OCTET STRING (SIZE (7))
 * ```
 */
export
type CellGlobalIdOrServiceAreaIdFixedLength = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CellGlobalIdOrServiceAreaIdFixedLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CellGlobalIdOrServiceAreaIdFixedLength = (el: _Element): CellGlobalIdOrServiceAreaIdFixedLength => {
    const value = $._decodeOctetString(el);
    if (value.length < 7 || value.length > 7) {
        throw new ASN1SizeError("CellGlobalIdOrServiceAreaIdFixedLength violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CellGlobalIdOrServiceAreaIdFixedLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellGlobalIdOrServiceAreaIdFixedLength, encoded as an ASN.1 Element.
 */
export const _encode_CellGlobalIdOrServiceAreaIdFixedLength = $._encodeOctetString;


/* eslint-enable */
