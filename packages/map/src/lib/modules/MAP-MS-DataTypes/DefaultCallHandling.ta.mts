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
enum _enum_for_DefaultCallHandling {
    continueCall = 0,
    releaseCall = 1,
}

/**
 * @summary DefaultCallHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultCallHandling  ::=  ENUMERATED {
 *     continueCall (0) ,
 *     releaseCall (1) ,
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type DefaultCallHandling = _enum_for_DefaultCallHandling | ENUMERATED;

/**
 * @summary DefaultCallHandling_continueCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_continueCall: DefaultCallHandling = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueCall
 * @constant
 * @type {number}
 */
export
const continueCall: DefaultCallHandling = DefaultCallHandling_continueCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultCallHandling_releaseCall
 * @constant
 * @type {number}
 */
export
const DefaultCallHandling_releaseCall: DefaultCallHandling = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCall
 * @constant
 * @type {number}
 */
export
const releaseCall: DefaultCallHandling = DefaultCallHandling_releaseCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultCallHandling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DefaultCallHandling = $._decodeEnumerated;

/**
 * @summary Encodes a(n) DefaultCallHandling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultCallHandling, encoded as an ASN.1 Element.
 */
export const _encode_DefaultCallHandling = $._encodeEnumerated;


/* eslint-enable */
