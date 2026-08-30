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
 * @summary ServiceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceIndicator  ::=  BIT STRING {
 *     clir-invoked (0),
 *     camel-invoked (1)} (SIZE(2..32))
 * ```
 */
export
type ServiceIndicator = BIT_STRING;

/**
 * @summary ServiceIndicator_clir_invoked
 * @constant
 */
export
const ServiceIndicator_clir_invoked: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary clir_invoked
 * @constant
 */
export
const clir_invoked: number = ServiceIndicator_clir_invoked; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceIndicator_camel_invoked
 * @constant
 */
export
const ServiceIndicator_camel_invoked: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary camel_invoked
 * @constant
 */
export
const camel_invoked: number = ServiceIndicator_camel_invoked; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceIndicator = (el: _Element): ServiceIndicator => {
    const value = $._decodeBitString(el);
    if (value.length < 2 || value.length > 32) {
        throw new ASN1SizeError("ServiceIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ServiceIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceIndicator, encoded as an ASN.1 Element.
 */
export const _encode_ServiceIndicator = $._encodeBitString;


/* eslint-enable */
