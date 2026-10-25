/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC user or group
 * access policy: a) Allow Incoming PTC session request b) Block Incoming PTC
 * session request c) Allow Auto Answer Mode d) Allow Override Manual Answer
 * Mode - Report when action requested to the PTC user access policy. - Report
 * when the PTC target attempts a change or queries the access control list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCUserAccessPolicy {
    allowIncomingPTCSessionRequest = 1,
    blockIncomingPTCSessionRequest = 2,
    allowAutoAnswerMode = 3,
    allowOverrideManualAnswerMode = 4,
}

/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC user or group
 * access policy: a) Allow Incoming PTC session request b) Block Incoming PTC
 * session request c) Allow Auto Answer Mode d) Allow Override Manual Answer
 * Mode - Report when action requested to the PTC user access policy. - Report
 * when the PTC target attempts a change or queries the access control list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;

/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * Identifies the action requested by the PTC target to the PTC user or group
 * access policy: a) Allow Incoming PTC session request b) Block Incoming PTC
 * session request c) Allow Auto Answer Mode d) Allow Override Manual Answer
 * Mode - Report when action requested to the PTC user access policy. - Report
 * when the PTC target attempts a change or queries the access control list(s).
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCUserAccessPolicy: typeof _enum_for_PTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;

/**
 * @summary PTCUserAccessPolicy_allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowIncomingPTCSessionRequest: _enum_for_PTCUserAccessPolicy.allowIncomingPTCSessionRequest = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const allowIncomingPTCSessionRequest: _enum_for_PTCUserAccessPolicy.allowIncomingPTCSessionRequest = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_blockIncomingPTCSessionRequest: _enum_for_PTCUserAccessPolicy.blockIncomingPTCSessionRequest = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const blockIncomingPTCSessionRequest: _enum_for_PTCUserAccessPolicy.blockIncomingPTCSessionRequest = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowAutoAnswerMode: _enum_for_PTCUserAccessPolicy.allowAutoAnswerMode = PTCUserAccessPolicy.allowAutoAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const allowAutoAnswerMode: _enum_for_PTCUserAccessPolicy.allowAutoAnswerMode = PTCUserAccessPolicy.allowAutoAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowOverrideManualAnswerMode: _enum_for_PTCUserAccessPolicy.allowOverrideManualAnswerMode = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const allowOverrideManualAnswerMode: _enum_for_PTCUserAccessPolicy.allowOverrideManualAnswerMode = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCUserAccessPolicy: $.ASN1Decoder<PTCUserAccessPolicy> = $._decodeEnumerated;
export const _encode_PTCUserAccessPolicy: $.ASN1Encoder<PTCUserAccessPolicy> = $._encodeEnumerated;


/* eslint-enable */
