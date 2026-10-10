/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SignalType {
    brief = 0,
    onOff = 1,
    timeOut = 2,
}

/**
 * @summary SignalType
 * @description
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
