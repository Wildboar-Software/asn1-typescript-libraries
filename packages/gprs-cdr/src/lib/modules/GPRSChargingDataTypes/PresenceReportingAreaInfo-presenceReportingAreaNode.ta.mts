/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaInfo-presenceReportingAreaNode ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PresenceReportingAreaInfo_presenceReportingAreaNode = BIT_STRING;

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaNode_oCS
 * @constant
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaNode_oCS: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oCS
 * @constant
 */
export
const oCS: number = PresenceReportingAreaInfo_presenceReportingAreaNode_oCS; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceReportingAreaInfo_presenceReportingAreaNode_pCRF
 * @constant
 */
export
const PresenceReportingAreaInfo_presenceReportingAreaNode_pCRF: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary pCRF
 * @constant
 */
export
const pCRF: number = PresenceReportingAreaInfo_presenceReportingAreaNode_pCRF; /* SHORT_NAMED_BIT */

export
const _decode_PresenceReportingAreaInfo_presenceReportingAreaNode: $.ASN1Decoder<PresenceReportingAreaInfo_presenceReportingAreaNode> = $._decodeBitString;

export
const _encode_PresenceReportingAreaInfo_presenceReportingAreaNode: $.ASN1Encoder<PresenceReportingAreaInfo_presenceReportingAreaNode> = $._encodeBitString;

/* eslint-enable */
