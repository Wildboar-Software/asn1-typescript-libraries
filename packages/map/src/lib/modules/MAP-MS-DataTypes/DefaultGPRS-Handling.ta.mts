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
enum _enum_for_DefaultGPRS_Handling {
    continueTransaction = 0,
    releaseTransaction = 1,
}

/**
 * @summary DefaultGPRS_Handling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultGPRS-Handling  ::=  ENUMERATED {
 *     continueTransaction (0) ,
 *     releaseTransaction (1) ,
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DefaultGPRS_Handling = _enum_for_DefaultGPRS_Handling | ENUMERATED;

/**
 * @summary DefaultGPRS_Handling_continueTransaction
 * @constant
 * @type {number}
 */
export
const DefaultGPRS_Handling_continueTransaction: DefaultGPRS_Handling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueTransaction
 * @constant
 * @type {number}
 */
export
const continueTransaction: DefaultGPRS_Handling = DefaultGPRS_Handling_continueTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultGPRS_Handling_releaseTransaction
 * @constant
 * @type {number}
 */
export
const DefaultGPRS_Handling_releaseTransaction: DefaultGPRS_Handling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseTransaction
 * @constant
 * @type {number}
 */
export
const releaseTransaction: DefaultGPRS_Handling = DefaultGPRS_Handling_releaseTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultGPRS_Handling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DefaultGPRS_Handling = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DefaultGPRS_Handling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultGPRS_Handling, encoded as an ASN.1 Element.
 */
export const _encode_DefaultGPRS_Handling = $._encodeEnumerated;


/* eslint-enable */
