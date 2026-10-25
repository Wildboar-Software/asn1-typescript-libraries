/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObservedIMEITicket_imeiCheckEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedIMEITicket-imeiCheckEvent ::= INTEGER {
 *    mobileOriginatedCall    ( 0 ),
 *    mobileTerminatedCall    ( 1 ),
 *    smsMobileOriginating    ( 2 ),
 *    smsMobileTerminating    ( 3 ),
 *    ssAction                ( 4 ),
 *    locationUpdate          ( 5 )
 * }
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
const ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall = 0 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall
 * @constant
 * @type {number}
 */
export
const mobileOriginatedCall = ObservedIMEITicket_imeiCheckEvent_mobileOriginatedCall satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall = 1 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const mobileTerminatedCall = ObservedIMEITicket_imeiCheckEvent_mobileTerminatedCall satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating = 2 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const smsMobileOriginating = ObservedIMEITicket_imeiCheckEvent_smsMobileOriginating satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating = 3 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const smsMobileTerminating = ObservedIMEITicket_imeiCheckEvent_smsMobileTerminating satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_ssAction = 4 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const ssAction = ObservedIMEITicket_imeiCheckEvent_ssAction satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const ObservedIMEITicket_imeiCheckEvent_locationUpdate = 5 satisfies ObservedIMEITicket_imeiCheckEvent; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObservedIMEITicket_imeiCheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const locationUpdate = ObservedIMEITicket_imeiCheckEvent_locationUpdate satisfies ObservedIMEITicket_imeiCheckEvent; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ObservedIMEITicket_imeiCheckEvent: $.ASN1Decoder<ObservedIMEITicket_imeiCheckEvent> = $._decodeInteger;

export
const _encode_ObservedIMEITicket_imeiCheckEvent: $.ASN1Encoder<ObservedIMEITicket_imeiCheckEvent> = $._encodeInteger;

/* eslint-enable */
