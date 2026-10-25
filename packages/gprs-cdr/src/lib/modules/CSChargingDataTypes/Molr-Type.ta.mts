/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Molr_Type {
    locationEstimate = 0,
    assistanceData = 1,
    deCipheringKeys = 2,
    deferredMo_lrTTTPInitiation = 3,
    deferredMo_lrSelfLocationInitiation = 4,
    deferredMt_lrOrmo_lrTTTPLocationEstimate = 5,
    deferredMt_lrOrmo_lrCancellation = 6,
    periodicEvent = 7,
    enteringAreaEvent = 8,
    leavingAreaEvent = 9,
    beingInsideAreaEvent = 10,
    motionEvent = 11,
    maximumIntervalExpirationEvent = 12,
}

/**
 * @summary Molr_Type
 * @description
 *
 * The MOLR-Type identifier refers to the type of MO-LR that was invoked as
 * defined in TS 24.080 [209].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.56.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Molr-Type  ::=  ENUMERATED {
 *    locationEstimate                            ( 0 ),
 *    assistanceData                              ( 1 ),
 *    deCipheringKeys                             ( 2 ),
 *    ... ,
 *    deferredMo-lrTTTPInitiation                 ( 3 ),
 *    deferredMo-lrSelfLocationInitiation         ( 4 ),
 *    deferredMt-lrOrmo-lrTTTPLocationEstimate    ( 5 ),
 *    deferredMt-lrOrmo-lrCancellation            ( 6 ),
 *    periodicEvent                               ( 7 ),
 *    enteringAreaEvent                           ( 8 ),
 *    leavingAreaEvent                            ( 9 ),
 *    beingInsideAreaEvent                        ( 10 ),
 *    motionEvent                                 ( 11 ),
 *    maximumIntervalExpirationEvent              ( 12 ) }
 * ```
 * 
 * @enum {number}
 */
export
type Molr_Type = _enum_for_Molr_Type | ENUMERATED;

/**
 * @summary Molr_Type_locationEstimate
 * @constant
 * @type {number}
 */
export
const Molr_Type_locationEstimate = _enum_for_Molr_Type.locationEstimate satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationEstimate
 * @constant
 * @type {number}
 */
export
const locationEstimate = Molr_Type_locationEstimate satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_assistanceData
 * @constant
 * @type {number}
 */
export
const Molr_Type_assistanceData = _enum_for_Molr_Type.assistanceData satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary assistanceData
 * @constant
 * @type {number}
 */
export
const assistanceData = Molr_Type_assistanceData satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_deCipheringKeys
 * @constant
 * @type {number}
 */
export
const Molr_Type_deCipheringKeys = _enum_for_Molr_Type.deCipheringKeys satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deCipheringKeys
 * @constant
 * @type {number}
 */
export
const deCipheringKeys = Molr_Type_deCipheringKeys satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_deferredMo_lrTTTPInitiation
 * @constant
 * @type {number}
 */
export
const Molr_Type_deferredMo_lrTTTPInitiation = _enum_for_Molr_Type.deferredMo_lrTTTPInitiation satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredMo_lrTTTPInitiation
 * @constant
 * @type {number}
 */
export
const deferredMo_lrTTTPInitiation = Molr_Type_deferredMo_lrTTTPInitiation satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_deferredMo_lrSelfLocationInitiation
 * @constant
 * @type {number}
 */
export
const Molr_Type_deferredMo_lrSelfLocationInitiation = _enum_for_Molr_Type.deferredMo_lrSelfLocationInitiation satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredMo_lrSelfLocationInitiation
 * @constant
 * @type {number}
 */
export
const deferredMo_lrSelfLocationInitiation = Molr_Type_deferredMo_lrSelfLocationInitiation satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_deferredMt_lrOrmo_lrTTTPLocationEstimate
 * @constant
 * @type {number}
 */
export
const Molr_Type_deferredMt_lrOrmo_lrTTTPLocationEstimate = _enum_for_Molr_Type.deferredMt_lrOrmo_lrTTTPLocationEstimate satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredMt_lrOrmo_lrTTTPLocationEstimate
 * @constant
 * @type {number}
 */
export
const deferredMt_lrOrmo_lrTTTPLocationEstimate = Molr_Type_deferredMt_lrOrmo_lrTTTPLocationEstimate satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_deferredMt_lrOrmo_lrCancellation
 * @constant
 * @type {number}
 */
export
const Molr_Type_deferredMt_lrOrmo_lrCancellation = _enum_for_Molr_Type.deferredMt_lrOrmo_lrCancellation satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferredMt_lrOrmo_lrCancellation
 * @constant
 * @type {number}
 */
export
const deferredMt_lrOrmo_lrCancellation = Molr_Type_deferredMt_lrOrmo_lrCancellation satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_periodicEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_periodicEvent = _enum_for_Molr_Type.periodicEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodicEvent
 * @constant
 * @type {number}
 */
export
const periodicEvent = Molr_Type_periodicEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_enteringAreaEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_enteringAreaEvent = _enum_for_Molr_Type.enteringAreaEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enteringAreaEvent
 * @constant
 * @type {number}
 */
export
const enteringAreaEvent = Molr_Type_enteringAreaEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_leavingAreaEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_leavingAreaEvent = _enum_for_Molr_Type.leavingAreaEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leavingAreaEvent
 * @constant
 * @type {number}
 */
export
const leavingAreaEvent = Molr_Type_leavingAreaEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_beingInsideAreaEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_beingInsideAreaEvent = _enum_for_Molr_Type.beingInsideAreaEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary beingInsideAreaEvent
 * @constant
 * @type {number}
 */
export
const beingInsideAreaEvent = Molr_Type_beingInsideAreaEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_motionEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_motionEvent = _enum_for_Molr_Type.motionEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary motionEvent
 * @constant
 * @type {number}
 */
export
const motionEvent = Molr_Type_motionEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Molr_Type_maximumIntervalExpirationEvent
 * @constant
 * @type {number}
 */
export
const Molr_Type_maximumIntervalExpirationEvent = _enum_for_Molr_Type.maximumIntervalExpirationEvent satisfies Molr_Type; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumIntervalExpirationEvent
 * @constant
 * @type {number}
 */
export
const maximumIntervalExpirationEvent = Molr_Type_maximumIntervalExpirationEvent satisfies Molr_Type; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Molr_Type: $.ASN1Decoder<Molr_Type> = $._decodeEnumerated;

export
const _encode_Molr_Type: $.ASN1Encoder<Molr_Type> = $._encodeEnumerated;

/* eslint-enable */
