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
 * @summary CallDiversionTreatmentIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallDiversionTreatmentIndicator  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type CallDiversionTreatmentIndicator = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CallDiversionTreatmentIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallDiversionTreatmentIndicator = (el: _Element): CallDiversionTreatmentIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("CallDiversionTreatmentIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CallDiversionTreatmentIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallDiversionTreatmentIndicator, encoded as an ASN.1 Element.
 */
export const _encode_CallDiversionTreatmentIndicator = $._encodeOctetString;


/* eslint-enable */
