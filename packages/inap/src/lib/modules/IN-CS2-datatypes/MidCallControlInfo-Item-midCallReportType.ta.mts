/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MidCallControlInfo_Item_midCallReportType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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
 * MidCallControlInfo-Item-midCallReportType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
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

export
const _decode_MidCallControlInfo_Item_midCallReportType: $.ASN1Decoder<MidCallControlInfo_Item_midCallReportType> = $._decodeEnumerated;

export
const _encode_MidCallControlInfo_Item_midCallReportType: $.ASN1Encoder<MidCallControlInfo_Item_midCallReportType> = $._encodeEnumerated;

/* eslint-enable */
