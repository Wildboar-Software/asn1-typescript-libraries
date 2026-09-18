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
 * @summary FunctionalUnits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionalUnits  ::=  BIT STRING {
 *     profileSwitch       (0),
 *     multipleIntNeg      (1),
 *     negotiatedRelease   (2),
 *     urgentData          (3),
 *     destructiveBreak    (4),   -- for any bit, value 1 implies offered/accepted
 *     enhancedAccess      (5),   --  value 0 implies not offered/not accepted
 *     structuredCOs       (6),   --  depending on occurrence in ASQ or ASR
 *     blocks              (7),
 *     fields              (8),
 *     referenceInfOs      (9),
 *     ripple              (10),
 *     exceptions          (11),
 *     contextRetention    (12)
 * }
 * ```
 */
export
type FunctionalUnits = BIT_STRING;

/**
 * @summary FunctionalUnits_profileSwitch
 * @constant
 */
export
const FunctionalUnits_profileSwitch: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary profileSwitch
 * @constant
 */
export
const profileSwitch: number = FunctionalUnits_profileSwitch; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_multipleIntNeg
 * @constant
 */
export
const FunctionalUnits_multipleIntNeg: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary multipleIntNeg
 * @constant
 */
export
const multipleIntNeg: number = FunctionalUnits_multipleIntNeg; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_negotiatedRelease
 * @constant
 */
export
const FunctionalUnits_negotiatedRelease: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary negotiatedRelease
 * @constant
 */
export
const negotiatedRelease: number = FunctionalUnits_negotiatedRelease; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_urgentData
 * @constant
 */
export
const FunctionalUnits_urgentData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary urgentData
 * @constant
 */
export
const urgentData: number = FunctionalUnits_urgentData; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_destructiveBreak
 * @constant
 */
export
const FunctionalUnits_destructiveBreak: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary destructiveBreak
 * @constant
 */
export
const destructiveBreak: number = FunctionalUnits_destructiveBreak; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_enhancedAccess
 * @constant
 */
export
const FunctionalUnits_enhancedAccess: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary enhancedAccess
 * @constant
 */
export
const enhancedAccess: number = FunctionalUnits_enhancedAccess; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_structuredCOs
 * @constant
 */
export
const FunctionalUnits_structuredCOs: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary structuredCOs
 * @constant
 */
export
const structuredCOs: number = FunctionalUnits_structuredCOs; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_blocks
 * @constant
 */
export
const FunctionalUnits_blocks: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary blocks
 * @constant
 */
export
const blocks: number = FunctionalUnits_blocks; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_fields
 * @constant
 */
export
const FunctionalUnits_fields: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary fields
 * @constant
 */
export
const fields: number = FunctionalUnits_fields; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_referenceInfOs
 * @constant
 */
export
const FunctionalUnits_referenceInfOs: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary referenceInfOs
 * @constant
 */
export
const referenceInfOs: number = FunctionalUnits_referenceInfOs; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_ripple
 * @constant
 */
export
const FunctionalUnits_ripple: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ripple
 * @constant
 */
export
const ripple: number = FunctionalUnits_ripple; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_exceptions
 * @constant
 */
export
const FunctionalUnits_exceptions: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary exceptions
 * @constant
 */
export
const exceptions: number = FunctionalUnits_exceptions; /* SHORT_NAMED_BIT */

/**
 * @summary FunctionalUnits_contextRetention
 * @constant
 */
export
const FunctionalUnits_contextRetention: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary contextRetention
 * @constant
 */
export
const contextRetention: number = FunctionalUnits_contextRetention; /* SHORT_NAMED_BIT */
export const _decode_FunctionalUnits = $._decodeBitString;
export const _encode_FunctionalUnits = $._encodeBitString;


/* eslint-enable */
