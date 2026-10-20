/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresenceReportingAreaNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceReportingAreaNode  ::=  BIT STRING {
 *    oCS  (0 ),
 *    pCRF  (1 )}
 * ```
 */
export
type PresenceReportingAreaNode = BIT_STRING;

/**
 * @summary PresenceReportingAreaNode_oCS
 * @constant
 */
export
const PresenceReportingAreaNode_oCS: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oCS
 * @constant
 */
export
const oCS: number = PresenceReportingAreaNode_oCS; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceReportingAreaNode_pCRF
 * @constant
 */
export
const PresenceReportingAreaNode_pCRF: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary pCRF
 * @constant
 */
export
const pCRF: number = PresenceReportingAreaNode_pCRF; /* SHORT_NAMED_BIT */

export
const _decode_PresenceReportingAreaNode: $.ASN1Decoder<PresenceReportingAreaNode> = $._decodeBitString;

export
const _encode_PresenceReportingAreaNode: $.ASN1Encoder<PresenceReportingAreaNode> = $._encodeBitString;

/* eslint-enable */
