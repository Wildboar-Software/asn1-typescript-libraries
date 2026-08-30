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
enum _enum_for_SMS_TriggerDetectionPoint {
    sms_CollectedInfo = 1,
    sms_DeliveryRequest = 2,
}

/**
 * @summary SMS_TriggerDetectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-TriggerDetectionPoint  ::=  ENUMERATED {
 *     sms-CollectedInfo (1),
 *     ...,
 *     sms-DeliveryRequest (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SMS_TriggerDetectionPoint = _enum_for_SMS_TriggerDetectionPoint | ENUMERATED;

/**
 * @summary SMS_TriggerDetectionPoint_sms_CollectedInfo
 * @constant
 * @type {number}
 */
export
const SMS_TriggerDetectionPoint_sms_CollectedInfo: SMS_TriggerDetectionPoint = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_CollectedInfo
 * @constant
 * @type {number}
 */
export
const sms_CollectedInfo: SMS_TriggerDetectionPoint = SMS_TriggerDetectionPoint_sms_CollectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMS_TriggerDetectionPoint_sms_DeliveryRequest
 * @constant
 * @type {number}
 */
export
const SMS_TriggerDetectionPoint_sms_DeliveryRequest: SMS_TriggerDetectionPoint = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_DeliveryRequest
 * @constant
 * @type {number}
 */
export
const sms_DeliveryRequest: SMS_TriggerDetectionPoint = SMS_TriggerDetectionPoint_sms_DeliveryRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_TriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMS_TriggerDetectionPoint = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SMS_TriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_TriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export const _encode_SMS_TriggerDetectionPoint = $._encodeEnumerated;


/* eslint-enable */
