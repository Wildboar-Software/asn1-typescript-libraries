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
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ControlType {
    sCPOverloaded = 0,
    manuallyInitiated = 1,
    destinationOverload = 2,
}

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ControlType = _enum_for_ControlType;

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ControlType = _enum_for_ControlType;

/**
 * @summary ControlType_sCPOverloaded
 * @constant
 * @type {number}
 */
export
const ControlType_sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCPOverloaded
 * @constant
 * @type {number}
 */
export
const sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_manuallyInitiated
 * @constant
 * @type {number}
 */
export
const ControlType_manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manuallyInitiated
 * @constant
 * @type {number}
 */
export
const manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_destinationOverload
 * @constant
 * @type {number}
 */
export
const ControlType_destinationOverload: ControlType = ControlType.destinationOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationOverload
 * @constant
 * @type {number}
 */
export
const destinationOverload: ControlType = ControlType.destinationOverload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ControlType = $._decodeEnumerated;
export const _encode_ControlType = $._encodeEnumerated;


/* eslint-enable */
