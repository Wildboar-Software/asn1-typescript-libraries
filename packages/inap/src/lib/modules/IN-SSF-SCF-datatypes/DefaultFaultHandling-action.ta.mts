/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DefaultFaultHandling_action {
    resumeCallProcessing = 0,
    releaseCall = 1,
}

/**
 * @summary DefaultFaultHandling_action
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultFaultHandling-action ::=
 * ENUMERATED {
 *   resumeCallProcessing(0),
 *   releaseCall(1),
 *   ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DefaultFaultHandling_action = _enum_for_DefaultFaultHandling_action | ENUMERATED;

/**
 * @summary DefaultFaultHandling_action_resumeCallProcessing
 * @constant
 * @type {number}
 */
export
const DefaultFaultHandling_action_resumeCallProcessing = _enum_for_DefaultFaultHandling_action.resumeCallProcessing satisfies DefaultFaultHandling_action; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resumeCallProcessing
 * @constant
 * @type {number}
 */
export
const resumeCallProcessing = DefaultFaultHandling_action_resumeCallProcessing satisfies DefaultFaultHandling_action; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DefaultFaultHandling_action_releaseCall
 * @constant
 * @type {number}
 */
export
const DefaultFaultHandling_action_releaseCall = _enum_for_DefaultFaultHandling_action.releaseCall satisfies DefaultFaultHandling_action; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCall
 * @constant
 * @type {number}
 */
export
const releaseCall = DefaultFaultHandling_action_releaseCall satisfies DefaultFaultHandling_action; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DefaultFaultHandling_action: $.ASN1Decoder<DefaultFaultHandling_action> = $._decodeEnumerated;

export
const _encode_DefaultFaultHandling_action: $.ASN1Encoder<DefaultFaultHandling_action> = $._encodeEnumerated;

/* eslint-enable */
