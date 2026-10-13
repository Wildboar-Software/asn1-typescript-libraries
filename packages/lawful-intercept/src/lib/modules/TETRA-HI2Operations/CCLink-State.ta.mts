/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CCLink_State {
    setUpInProcess = 1,
    callActive = 2,
    callReleased = 3,
    lack_of_resource = 4,
}

/**
 * @summary CCLink_State
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCLink-State  ::=  ENUMERATED
 * {
 *     setUpInProcess(1),
 *         -- The set-up of the call is in process.
 *     callActive(2),
 *     callReleased(3),
 *     lack-of-resource(4),
 *         -- The lack-of-resource state is sent when a CC Link cannot
 *         -- be established because of lack of resource at the MF level
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CCLink_State = _enum_for_CCLink_State | ENUMERATED;

/**
 * @summary CCLink_State_setUpInProcess
 * @constant
 * @type {number}
 */
export
const CCLink_State_setUpInProcess: CCLink_State = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary setUpInProcess
 * @constant
 * @type {number}
 */
export
const setUpInProcess: CCLink_State = CCLink_State_setUpInProcess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callActive
 * @constant
 * @type {number}
 */
export
const CCLink_State_callActive: CCLink_State = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callActive
 * @constant
 * @type {number}
 */
export
const callActive: CCLink_State = CCLink_State_callActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_callReleased
 * @constant
 * @type {number}
 */
export
const CCLink_State_callReleased: CCLink_State = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReleased
 * @constant
 * @type {number}
 */
export
const callReleased: CCLink_State = CCLink_State_callReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCLink_State_lack_of_resource
 * @constant
 * @type {number}
 */
export
const CCLink_State_lack_of_resource: CCLink_State = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lack_of_resource
 * @constant
 * @type {number}
 */
export
const lack_of_resource: CCLink_State = CCLink_State_lack_of_resource; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CCLink_State: $.ASN1Decoder<CCLink_State> = $._decodeEnumerated;
export const _encode_CCLink_State: $.ASN1Encoder<CCLink_State> = $._encodeEnumerated;


/* eslint-enable */
