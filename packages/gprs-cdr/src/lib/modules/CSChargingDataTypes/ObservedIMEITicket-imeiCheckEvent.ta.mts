/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObservedIMEITicket_imeiCheckEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedIMEITicket-imeiCheckEvent ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ObservedIMEITicket_imeiCheckEvent = INTEGER;

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall: ObservedIMEITicket_imeiCheckEvent = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall
 * @constant
 * @type {number}
 */
export
const mobileOriginatedCall: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall: ObservedIMEITicket_imeiCheckEvent = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const mobileTerminatedCall: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating: ObservedIMEITicket_imeiCheckEvent = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const smsMobileOriginating: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating: ObservedIMEITicket_imeiCheckEvent = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const smsMobileTerminating: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_ssAction: ObservedIMEITicket_imeiCheckEvent = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const ssAction: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_ssAction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_locationUpdate: ObservedIMEITicket_imeiCheckEvent = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const locationUpdate: ObservedIMEITicket_imeiCheckEvent = ObservedIMEITicket_imeiCheckEvent_locationUpdate; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ObservedIMEITicket_imeiCheckEvent: $.ASN1Decoder<ObservedIMEITicket_imeiCheckEvent> = $._decodeInteger;

export
const _encode_ObservedIMEITicket_imeiCheckEvent: $.ASN1Encoder<ObservedIMEITicket_imeiCheckEvent> = $._encodeInteger;

/* eslint-enable */
