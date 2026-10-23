/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEICheckEvent
 * @description
 *
 * This field identifies the type of event that caused the IMEI check to take
 * place: Mobile originating call attempt; Mobile terminating call attempt;
 * Mobile originating SMS; Mobile terminating SMS; Supplementary service
 * actions performed by the subscriber; Location update.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.33.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEICheckEvent  ::=  INTEGER {
 *    mobileOriginatedCall    ( 0 ),
 *    mobileTerminatedCall    ( 1 ),
 *    smsMobileOriginating    ( 2 ),
 *    smsMobileTerminating    ( 3 ),
 *    ssAction                ( 4 ),
 *    locationUpdate          ( 5 )}
 * ```
 */
export
type IMEICheckEvent = INTEGER;

/**
 * @summary IMEICheckEvent_mobileOriginatedCall
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_mobileOriginatedCall: IMEICheckEvent = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_mobileOriginatedCall
 * @constant
 * @type {number}
 */
export
const mobileOriginatedCall: IMEICheckEvent = IMEICheckEvent_mobileOriginatedCall; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_mobileTerminatedCall: IMEICheckEvent = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_mobileTerminatedCall
 * @constant
 * @type {number}
 */
export
const mobileTerminatedCall: IMEICheckEvent = IMEICheckEvent_mobileTerminatedCall; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_smsMobileOriginating: IMEICheckEvent = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_smsMobileOriginating
 * @constant
 * @type {number}
 */
export
const smsMobileOriginating: IMEICheckEvent = IMEICheckEvent_smsMobileOriginating; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_smsMobileTerminating: IMEICheckEvent = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_smsMobileTerminating
 * @constant
 * @type {number}
 */
export
const smsMobileTerminating: IMEICheckEvent = IMEICheckEvent_smsMobileTerminating; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_ssAction: IMEICheckEvent = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_ssAction
 * @constant
 * @type {number}
 */
export
const ssAction: IMEICheckEvent = IMEICheckEvent_ssAction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const IMEICheckEvent_locationUpdate: IMEICheckEvent = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IMEICheckEvent_locationUpdate
 * @constant
 * @type {number}
 */
export
const locationUpdate: IMEICheckEvent = IMEICheckEvent_locationUpdate; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IMEICheckEvent: $.ASN1Decoder<IMEICheckEvent> = $._decodeInteger;

export
const _encode_IMEICheckEvent: $.ASN1Encoder<IMEICheckEvent> = $._encodeInteger;

/* eslint-enable */
