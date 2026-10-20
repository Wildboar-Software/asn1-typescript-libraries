/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CAMELInformationPDP_levelOfCAMELService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformationPDP-levelOfCAMELService ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CAMELInformationPDP_levelOfCAMELService = BIT_STRING;

/**
 * @summary CAMELInformationPDP_levelOfCAMELService_basic
 * @constant
 */
export
const CAMELInformationPDP_levelOfCAMELService_basic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basic
 * @constant
 */
export
const basic: number = CAMELInformationPDP_levelOfCAMELService_basic; /* SHORT_NAMED_BIT */

/**
 * @summary CAMELInformationPDP_levelOfCAMELService_callDurationSupervision
 * @constant
 */
export
const CAMELInformationPDP_levelOfCAMELService_callDurationSupervision: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callDurationSupervision
 * @constant
 */
export
const callDurationSupervision: number = CAMELInformationPDP_levelOfCAMELService_callDurationSupervision; /* SHORT_NAMED_BIT */

/**
 * @summary CAMELInformationPDP_levelOfCAMELService_onlineCharging
 * @constant
 */
export
const CAMELInformationPDP_levelOfCAMELService_onlineCharging: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onlineCharging
 * @constant
 */
export
const onlineCharging: number = CAMELInformationPDP_levelOfCAMELService_onlineCharging; /* SHORT_NAMED_BIT */

export
const _decode_CAMELInformationPDP_levelOfCAMELService: $.ASN1Decoder<CAMELInformationPDP_levelOfCAMELService> = $._decodeBitString;

export
const _encode_CAMELInformationPDP_levelOfCAMELService: $.ASN1Encoder<CAMELInformationPDP_levelOfCAMELService> = $._encodeBitString;

/* eslint-enable */
