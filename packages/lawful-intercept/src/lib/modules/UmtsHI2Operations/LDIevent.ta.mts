/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LDIevent {
    targetEntersIA = 1,
    targetLeavesIA = 2,
}

/**
 * @summary LDIevent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDIevent  ::=  ENUMERATED
 * {
 *     targetEntersIA             (1),
 *     targetLeavesIA            (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LDIevent = _enum_for_LDIevent | ENUMERATED;

/**
 * @summary LDIevent_targetEntersIA
 * @constant
 * @type {number}
 */
export
const LDIevent_targetEntersIA: LDIevent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetEntersIA
 * @constant
 * @type {number}
 */
export
const targetEntersIA: LDIevent = LDIevent_targetEntersIA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDIevent_targetLeavesIA
 * @constant
 * @type {number}
 */
export
const LDIevent_targetLeavesIA: LDIevent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetLeavesIA
 * @constant
 * @type {number}
 */
export
const targetLeavesIA: LDIevent = LDIevent_targetLeavesIA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LDIevent: $.ASN1Decoder<LDIevent> = $._decodeEnumerated;
export const _encode_LDIevent: $.ASN1Encoder<LDIevent> = $._encodeEnumerated;


/* eslint-enable */
