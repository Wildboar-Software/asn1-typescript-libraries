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



export
enum _enum_for_AdditionalRoamingNotAllowedCause {
    supportedRAT_TypesNotAllowed = 0,
}

/**
 * @summary AdditionalRoamingNotAllowedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalRoamingNotAllowedCause  ::=  ENUMERATED {
 *     supportedRAT-TypesNotAllowed (0),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalRoamingNotAllowedCause = _enum_for_AdditionalRoamingNotAllowedCause | ENUMERATED;

/**
 * @summary AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed
 * @constant
 * @type {number}
 */
export
const AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed: AdditionalRoamingNotAllowedCause = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supportedRAT_TypesNotAllowed
 * @constant
 * @type {number}
 */
export
const supportedRAT_TypesNotAllowed: AdditionalRoamingNotAllowedCause = AdditionalRoamingNotAllowedCause_supportedRAT_TypesNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalRoamingNotAllowedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalRoamingNotAllowedCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AdditionalRoamingNotAllowedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalRoamingNotAllowedCause, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalRoamingNotAllowedCause = $._encodeEnumerated;


/* eslint-enable */
