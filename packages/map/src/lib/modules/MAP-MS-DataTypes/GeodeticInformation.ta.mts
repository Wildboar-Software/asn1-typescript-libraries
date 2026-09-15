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
 * @summary GeodeticInformation
 * @description
 *
 * Calling Geodetic Location defined in ITU-T Q.763 (1999). Only ellipsoid point
 * with uncertainty circle is allowed. Structure: screening and presentation
 * indicators (1 octet), type of shape (1), latitude (3), longitude (3),
 * uncertainty code (1), confidence (1) (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformation  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GeodeticInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GeodeticInformation = (el: _Element): GeodeticInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("GeodeticInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GeodeticInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeodeticInformation, encoded as an ASN.1 Element.
 */
export const _encode_GeodeticInformation = $._encodeOctetString;


/* eslint-enable */
