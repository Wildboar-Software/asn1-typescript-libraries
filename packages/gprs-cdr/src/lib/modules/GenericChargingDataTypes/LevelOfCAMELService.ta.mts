/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LevelOfCAMELService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LevelOfCAMELService  ::=  BIT STRING {
 *    basic  (0 ),
 *    callDurationSupervision  (1 ),
 *    onlineCharging  (2 )}
 * ```
 */
export
type LevelOfCAMELService = BIT_STRING;

/**
 * @summary LevelOfCAMELService_basic
 * @constant
 */
export
const LevelOfCAMELService_basic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basic
 * @constant
 */
export
const basic: number = LevelOfCAMELService_basic; /* SHORT_NAMED_BIT */

/**
 * @summary LevelOfCAMELService_callDurationSupervision
 * @constant
 */
export
const LevelOfCAMELService_callDurationSupervision: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callDurationSupervision
 * @constant
 */
export
const callDurationSupervision: number = LevelOfCAMELService_callDurationSupervision; /* SHORT_NAMED_BIT */

/**
 * @summary LevelOfCAMELService_onlineCharging
 * @constant
 */
export
const LevelOfCAMELService_onlineCharging: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onlineCharging
 * @constant
 */
export
const onlineCharging: number = LevelOfCAMELService_onlineCharging; /* SHORT_NAMED_BIT */

export
const _decode_LevelOfCAMELService: $.ASN1Decoder<LevelOfCAMELService> = $._decodeBitString;

export
const _encode_LevelOfCAMELService: $.ASN1Encoder<LevelOfCAMELService> = $._encodeBitString;

/* eslint-enable */
