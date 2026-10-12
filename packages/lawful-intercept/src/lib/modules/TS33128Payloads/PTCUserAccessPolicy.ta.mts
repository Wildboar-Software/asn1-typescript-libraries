/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCUserAccessPolicy
 * @description
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
const PTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;

/**
 * @summary PTCUserAccessPolicy_allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const allowIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_blockIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const blockIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowAutoAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowAutoAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const allowAutoAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowAutoAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowOverrideManualAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const allowOverrideManualAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCUserAccessPolicy: $.ASN1Decoder<PTCUserAccessPolicy> = $._decodeEnumerated;
export const _encode_PTCUserAccessPolicy: $.ASN1Encoder<PTCUserAccessPolicy> = $._encodeEnumerated;


/* eslint-enable */
