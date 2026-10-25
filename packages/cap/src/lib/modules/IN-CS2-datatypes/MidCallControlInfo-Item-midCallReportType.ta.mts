/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * MidCallControlInfo-Item-midCallReportType {PARAMETERS-BOUND:bound} ::= ENUMERATED {
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
const MidCallControlInfo_Item_midCallReportType: typeof _enum_for_MidCallControlInfo_Item_midCallReportType = _enum_for_MidCallControlInfo_Item_midCallReportType;

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inMonitoringState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inMonitoringState: _enum_for_MidCallControlInfo_Item_midCallReportType.inMonitoringState = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inMonitoringState
 * @constant
 * @type {number}
 */
export
const inMonitoringState: _enum_for_MidCallControlInfo_Item_midCallReportType.inMonitoringState = MidCallControlInfo_Item_midCallReportType.inMonitoringState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MidCallControlInfo_Item_midCallReportType_inAnyState
 * @constant
 * @type {number}
 */
export
const MidCallControlInfo_Item_midCallReportType_inAnyState: _enum_for_MidCallControlInfo_Item_midCallReportType.inAnyState = MidCallControlInfo_Item_midCallReportType.inAnyState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inAnyState
 * @constant
 * @type {number}
 */
export
const inAnyState: _enum_for_MidCallControlInfo_Item_midCallReportType.inAnyState = MidCallControlInfo_Item_midCallReportType.inAnyState; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MidCallControlInfo_Item_midCallReportType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_MidCallControlInfo_Item_midCallReportType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
