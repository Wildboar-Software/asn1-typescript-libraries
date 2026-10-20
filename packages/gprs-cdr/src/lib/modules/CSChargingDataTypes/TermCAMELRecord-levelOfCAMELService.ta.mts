/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_levelOfCAMELService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-levelOfCAMELService ::= BIT STRING {
 *    basic  (0 ),
 *    callDurationSupervision  (1 ),
 *    onlineCharging  (2 )
 * }
 * ```
 */
export
type TermCAMELRecord_levelOfCAMELService = BIT_STRING;

/**
 * @summary TermCAMELRecord_levelOfCAMELService_basic
 * @constant
 */
export
const TermCAMELRecord_levelOfCAMELService_basic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basic
 * @constant
 */
export
const basic: number = TermCAMELRecord_levelOfCAMELService_basic; /* SHORT_NAMED_BIT */

/**
 * @summary TermCAMELRecord_levelOfCAMELService_callDurationSupervision
 * @constant
 */
export
const TermCAMELRecord_levelOfCAMELService_callDurationSupervision: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callDurationSupervision
 * @constant
 */
export
const callDurationSupervision: number = TermCAMELRecord_levelOfCAMELService_callDurationSupervision; /* SHORT_NAMED_BIT */

/**
 * @summary TermCAMELRecord_levelOfCAMELService_onlineCharging
 * @constant
 */
export
const TermCAMELRecord_levelOfCAMELService_onlineCharging: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onlineCharging
 * @constant
 */
export
const onlineCharging: number = TermCAMELRecord_levelOfCAMELService_onlineCharging; /* SHORT_NAMED_BIT */

export
const _decode_TermCAMELRecord_levelOfCAMELService: $.ASN1Decoder<TermCAMELRecord_levelOfCAMELService> = $._decodeBitString;

export
const _encode_TermCAMELRecord_levelOfCAMELService: $.ASN1Encoder<TermCAMELRecord_levelOfCAMELService> = $._encodeBitString;

/* eslint-enable */
