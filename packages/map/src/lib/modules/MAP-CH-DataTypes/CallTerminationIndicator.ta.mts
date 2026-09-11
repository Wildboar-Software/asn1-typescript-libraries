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
enum _enum_for_CallTerminationIndicator {
    terminateCallActivityReferred = 0,
    terminateAllCallActivities = 1,
}

/**
 * @summary CallTerminationIndicator
 * @description
 *
 * 2–10 map to terminateCallActivityReferred; >10 to terminateAllCallActivities.
 * MSCs without linkage of all activities treat any value as
 * terminateCallActivityReferred (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTerminationIndicator  ::=  ENUMERATED {
 *     terminateCallActivityReferred    (0),
 *     terminateAllCallActivities    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type CallTerminationIndicator = _enum_for_CallTerminationIndicator | ENUMERATED;

/**
 * @summary CallTerminationIndicator_terminateCallActivityReferred
 * @description
 *
 * `terminateCallActivityReferred (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallTerminationIndicator_terminateCallActivityReferred: CallTerminationIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminateCallActivityReferred
 * @description
 *
 * `terminateCallActivityReferred (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const terminateCallActivityReferred: CallTerminationIndicator = CallTerminationIndicator_terminateCallActivityReferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallTerminationIndicator_terminateAllCallActivities
 * @description
 *
 * `terminateAllCallActivities (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallTerminationIndicator_terminateAllCallActivities: CallTerminationIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminateAllCallActivities
 * @description
 *
 * `terminateAllCallActivities (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const terminateAllCallActivities: CallTerminationIndicator = CallTerminationIndicator_terminateAllCallActivities; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallTerminationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallTerminationIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallTerminationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTerminationIndicator, encoded as an ASN.1 Element.
 */
export const _encode_CallTerminationIndicator = $._encodeEnumerated;


/* eslint-enable */
