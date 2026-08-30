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
 * @summary NR_TA_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NR-TA-Id  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type NR_TA_Id = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) NR_TA_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NR_TA_Id = (el: _Element): NR_TA_Id => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("NR_TA_Id violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) NR_TA_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NR_TA_Id, encoded as an ASN.1 Element.
 */
export const _encode_NR_TA_Id = $._encodeOctetString;


/* eslint-enable */
