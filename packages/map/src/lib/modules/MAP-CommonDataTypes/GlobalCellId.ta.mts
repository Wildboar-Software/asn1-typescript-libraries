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
 * @summary GlobalCellId
 * @description
 *
 * Cell Global Identification as in 3GPP TS 23.003. Size 5..7 octets.
 *
 * - octet 1 bits 4321: MCC 1st digit; bits 8765: MCC 2nd digit
 * - octet 2 bits 4321: MCC 3rd digit; bits 8765: MNC 3rd digit or filler 1111
 *   for 2-digit MNCs
 * - octet 3 bits 4321: MNC 1st digit; bits 8765: MNC 2nd digit
 * - octets 4-5: Location Area Code as in 3GPP TS 24.008
 * - octets 6-7: Cell Identity (CI) as in 3GPP TS 24.008
 *
 * Used e.g. as serving / target cell Id.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.8 and 7.6.2.37).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCellId  ::=  OCTET STRING (SIZE (5..7))
 * ```
 */
export
type GlobalCellId = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalCellId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GlobalCellId = (el: _Element): GlobalCellId => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 7) {
        throw new ASN1SizeError("GlobalCellId violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GlobalCellId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalCellId, encoded as an ASN.1 Element.
 */
export const _encode_GlobalCellId = $._encodeOctetString;


/* eslint-enable */
