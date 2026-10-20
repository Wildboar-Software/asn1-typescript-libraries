/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELInformationMM_levelOfCAMELService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformationMM-levelOfCAMELService ::= BIT STRING {
 *    basic  (0 ),
 *    callDurationSupervision  (1 ),
 *    onlineCharging  (2 )
 * }
 * ```
 */
export
type CAMELInformationMM_levelOfCAMELService = BIT_STRING;

/**
 * @summary CAMELInformationMM_levelOfCAMELService_basic
 * @constant
 */
export
const CAMELInformationMM_levelOfCAMELService_basic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basic
 * @constant
 */
export
const basic: number = CAMELInformationMM_levelOfCAMELService_basic; /* SHORT_NAMED_BIT */

/**
 * @summary CAMELInformationMM_levelOfCAMELService_callDurationSupervision
 * @constant
 */
export
const CAMELInformationMM_levelOfCAMELService_callDurationSupervision: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callDurationSupervision
 * @constant
 */
export
const callDurationSupervision: number = CAMELInformationMM_levelOfCAMELService_callDurationSupervision; /* SHORT_NAMED_BIT */

/**
 * @summary CAMELInformationMM_levelOfCAMELService_onlineCharging
 * @constant
 */
export
const CAMELInformationMM_levelOfCAMELService_onlineCharging: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onlineCharging
 * @constant
 */
export
const onlineCharging: number = CAMELInformationMM_levelOfCAMELService_onlineCharging; /* SHORT_NAMED_BIT */

export
const _decode_CAMELInformationMM_levelOfCAMELService: $.ASN1Decoder<CAMELInformationMM_levelOfCAMELService> = $._decodeBitString;

export
const _encode_CAMELInformationMM_levelOfCAMELService: $.ASN1Encoder<CAMELInformationMM_levelOfCAMELService> = $._encodeBitString;

/* eslint-enable */
