/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_O_BcsmTriggerDetectionPoint {
    collectedInfo = 2,
    routeSelectFailure = 4,
}

/**
 * @summary O_BcsmTriggerDetectionPoint
 * @description
 *
 * Originating BCSM CAMEL trigger detection point: `collectedInfo` (2) or
 * `routeSelectFailure` (4). Other values: ignore the enclosing
 * `O-BcsmCamelTDPData` or `O-BcsmCamelTDP-Criteria` sequence. (3GPP TS 29.002
 * V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * O-BcsmTriggerDetectionPoint  ::=  ENUMERATED {
 *     collectedInfo (2),
 *     ...,
 *     routeSelectFailure (4) }
 * ```
 * 
 * @enum {number}
 */
export
type O_BcsmTriggerDetectionPoint = _enum_for_O_BcsmTriggerDetectionPoint | ENUMERATED;

/**
 * @summary O_BcsmTriggerDetectionPoint_collectedInfo
 * @description
 *
 * DP2 collectedInfo. For CAMEL phase 2 this is the only allowed O-BCSM TDP.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const O_BcsmTriggerDetectionPoint_collectedInfo: O_BcsmTriggerDetectionPoint = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary collectedInfo
 * @description
 *
 * DP2 collectedInfo. For CAMEL phase 2 this is the only allowed O-BCSM TDP.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const collectedInfo: O_BcsmTriggerDetectionPoint = O_BcsmTriggerDetectionPoint_collectedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary O_BcsmTriggerDetectionPoint_routeSelectFailure
 * @description
 *
 * DP4 routeSelectFailure. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const O_BcsmTriggerDetectionPoint_routeSelectFailure: O_BcsmTriggerDetectionPoint = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeSelectFailure
 * @description
 *
 * DP4 routeSelectFailure. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * @constant
 * @type {number}
 */
export
const routeSelectFailure: O_BcsmTriggerDetectionPoint = O_BcsmTriggerDetectionPoint_routeSelectFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) O_BcsmTriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_O_BcsmTriggerDetectionPoint = $._decodeEnumerated;

/**
 * @summary Encodes a(n) O_BcsmTriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The O_BcsmTriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export const _encode_O_BcsmTriggerDetectionPoint = $._encodeEnumerated;


/* eslint-enable */
