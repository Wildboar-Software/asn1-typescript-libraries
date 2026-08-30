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
enum _enum_for_FailureCauseParam {
    limitReachedOnNumberOfConcurrentLocationRequests = 0,
}

/**
 * @summary FailureCauseParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCauseParam  ::=  ENUMERATED {
 *     limitReachedOnNumberOfConcurrentLocationRequests (0),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type FailureCauseParam = _enum_for_FailureCauseParam | ENUMERATED;

/**
 * @summary FailureCauseParam_limitReachedOnNumberOfConcurrentLocationRequests
 * @constant
 * @type {number}
 */
export
const FailureCauseParam_limitReachedOnNumberOfConcurrentLocationRequests: FailureCauseParam = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary limitReachedOnNumberOfConcurrentLocationRequests
 * @constant
 * @type {number}
 */
export
const limitReachedOnNumberOfConcurrentLocationRequests: FailureCauseParam = FailureCauseParam_limitReachedOnNumberOfConcurrentLocationRequests; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FailureCauseParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FailureCauseParam = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FailureCauseParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FailureCauseParam, encoded as an ASN.1 Element.
 */
export const _encode_FailureCauseParam = $._encodeEnumerated;


/* eslint-enable */
