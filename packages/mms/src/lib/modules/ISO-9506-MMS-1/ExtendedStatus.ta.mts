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
 * @summary ExtendedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedStatus  ::=  BIT STRING {
 *    safetyInterlocksViolated         (0),
 *    anyPhysicalResourcePowerOn       (1),
 *    allPhysicalResourcesCalibrated   (2),
 *    localControl                     (3) } (SIZE(4))
 * ```
 */
export
type ExtendedStatus = BIT_STRING;

/**
 * @summary ExtendedStatus_safetyInterlocksViolated
 * @constant
 */
export
const ExtendedStatus_safetyInterlocksViolated: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary safetyInterlocksViolated
 * @constant
 */
export
const safetyInterlocksViolated: number = ExtendedStatus_safetyInterlocksViolated; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_anyPhysicalResourcePowerOn
 * @constant
 */
export
const ExtendedStatus_anyPhysicalResourcePowerOn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary anyPhysicalResourcePowerOn
 * @constant
 */
export
const anyPhysicalResourcePowerOn: number = ExtendedStatus_anyPhysicalResourcePowerOn; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_allPhysicalResourcesCalibrated
 * @constant
 */
export
const ExtendedStatus_allPhysicalResourcesCalibrated: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary allPhysicalResourcesCalibrated
 * @constant
 */
export
const allPhysicalResourcesCalibrated: number = ExtendedStatus_allPhysicalResourcesCalibrated; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_localControl
 * @constant
 */
export
const ExtendedStatus_localControl: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary localControl
 * @constant
 */
export
const localControl: number = ExtendedStatus_localControl; /* SHORT_NAMED_BIT */
export const _decode_ExtendedStatus = $._decodeBitString;
export const _encode_ExtendedStatus = $._encodeBitString;


/* eslint-enable */
