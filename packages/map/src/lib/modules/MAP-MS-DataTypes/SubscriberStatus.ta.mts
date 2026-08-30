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



/**
 * @summary SubscriberStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SubscriberStatus {
    serviceGranted = 0,
    operatorDeterminedBarring = 1,
}

/**
 * @summary SubscriberStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
type SubscriberStatus = _enum_for_SubscriberStatus;

/**
 * @summary SubscriberStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberStatus  ::=  ENUMERATED {
 *     serviceGranted  (0),
 *     operatorDeterminedBarring  (1)}
 * ```
 * 
 * @enum {number}
 */
export
const SubscriberStatus = _enum_for_SubscriberStatus;

/**
 * @summary SubscriberStatus_serviceGranted
 * @constant
 * @type {number}
 */
export
const SubscriberStatus_serviceGranted: SubscriberStatus = SubscriberStatus.serviceGranted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceGranted
 * @constant
 * @type {number}
 */
export
const serviceGranted: SubscriberStatus = SubscriberStatus.serviceGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriberStatus_operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const SubscriberStatus_operatorDeterminedBarring: SubscriberStatus = SubscriberStatus.operatorDeterminedBarring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operatorDeterminedBarring
 * @constant
 * @type {number}
 */
export
const operatorDeterminedBarring: SubscriberStatus = SubscriberStatus.operatorDeterminedBarring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscriberStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SubscriberStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberStatus, encoded as an ASN.1 Element.
 */
export const _encode_SubscriberStatus = $._encodeEnumerated;


/* eslint-enable */
