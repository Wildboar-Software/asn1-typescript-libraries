/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SignalType {
    /**
     * Plays out on its own. No duration is required. The signal remains in the
     * descriptor until removed, but a replacement descriptor is not guaranteed
     * to stop it (clause 7.1.11.7).
     */
    brief = 0,
    /**
     * Continues until an empty Signals descriptor, or a replacement that omits
     * it, turns it off (clause 7.1.11.7). A duration, if present, is ignored.
     */
    onOff = 1,
    /**
     * Continues until turned off or until `duration` elapses. Stays in the
     * Signals descriptor until explicitly removed (clause 7.1.11.7).
     */
    timeOut = 2,
}

/**
 * @summary SignalType
 * @description
 * 
 * How long a signal runs (ITU-T Rec. H.248.1 (03/2013) clause 7.1.11.7).
 *
 * On/off runs until a later Signals descriptor removes it. Timeout runs until
 * it is removed or `duration` elapses, and stays in the descriptor until
 * removed. Brief stops by itself; a later descriptor is not guaranteed to cut
 * it short, because it may already have finished. Overriding the type does not
 * change the signal's meaning. A signal whose default is not timeout must carry
 * `duration` when overridden to timeout.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignalType  ::=  ENUMERATED
 *     {
 *         brief(0),
 *         onOff(1),
 *         timeOut(2),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type SignalType = _enum_for_SignalType | ENUMERATED;

/**
 * @summary SignalType_brief
 * @description
 *
 * Plays out on its own. No duration is required. The signal remains in the
 * descriptor until removed, but a replacement descriptor is not guaranteed to
 * stop it (clause 7.1.11.7).
 *
 * @constant
 * @type {number}
 */
export
const SignalType_brief: SignalType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary brief
 * @constant
 * @type {number}
 */
export
const brief: SignalType = SignalType_brief; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalType_onOff
 * @description
 *
 * Continues until an empty Signals descriptor, or a replacement that omits it,
 * turns it off (clause 7.1.11.7). A duration, if present, is ignored.
 *
 * @constant
 * @type {number}
 */
export
const SignalType_onOff: SignalType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onOff
 * @constant
 * @type {number}
 */
export
const onOff: SignalType = SignalType_onOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SignalType_timeOut
 * @description
 *
 * Continues until turned off or until `duration` elapses. Stays in the Signals
 * descriptor until explicitly removed (clause 7.1.11.7).
 *
 * @constant
 * @type {number}
 */
export
const SignalType_timeOut: SignalType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeOut
 * @constant
 * @type {number}
 */
export
const timeOut: SignalType = SignalType_timeOut; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SignalType = $._decodeEnumerated;
export const _encode_SignalType = $._encodeEnumerated;


/* eslint-enable */
