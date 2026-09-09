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
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED {
 *     inMonitoringState(0),
 *     inAnyState(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MidCallControlInfo_Item_midCallReportType {
    inMonitoringState = 0,
    inAnyState = 1,
}

/**
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED {
 *     inMonitoringState(0),
 *     inAnyState(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MidCallControlInfo_Item_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;

/**
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED {
 *     inMonitoringState(0),
 *     inAnyState(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MidCallControlInfo_Item_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inMonitoringState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inMonitoringState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inMonitoringState
 * @constant
 * @type {number}
 */
export
const inMonitoringState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inAnyState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inAnyState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inAnyState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inAnyState
 * @constant
 * @type {number}
 */
export
const inAnyState: MidCallControlInfo_Item_midCallReportType = MidCallControlInfo_Item_midCallReportType.inAnyState; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MidCallControlInfo_Item_midCallReportType = $._decodeEnumerated;
export const _encode_MidCallControlInfo_Item_midCallReportType = $._encodeEnumerated;


/* eslint-enable */
