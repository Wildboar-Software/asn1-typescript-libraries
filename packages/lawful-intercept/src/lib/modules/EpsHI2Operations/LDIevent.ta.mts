/* eslint-disable */
import {
    type ENUMERATED
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
 * Whether the target entered or left an interception area. Location-dependent
 * interception is limited to one or more interception areas (clause 3.1).
 * Optional on a GPRS location-update report, and only for that case (table
 * 6.6). Clause 10.5.1.1 lists entering or leaving the area as an optional
 * report trigger marked for further study, and clause 10.5.1.2 lists entry with
 * an active bearer or tunnel as a begin trigger also marked for further study.
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * The target entered the interception area (table 6.6). The EPS use is for
 * further study (clause 10.5.1).
 * 
 * @constant
 * @type {number}
 */
export
const LDIevent_targetEntersIA: LDIevent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetEntersIA
 * @description
 * 
 * Target entered the interception area (table 6.6).
 * 
 * @constant
 * @type {number}
 */
export
const targetEntersIA: LDIevent = LDIevent_targetEntersIA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDIevent_targetLeavesIA
 * @description
 * 
 * The target left the interception area (table 6.6). The EPS use is for further
 * study (clause 10.5.1).
 * 
 * @constant
 * @type {number}
 */
export
const LDIevent_targetLeavesIA: LDIevent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetLeavesIA
 * @description
 * 
 * Target left the interception area (table 6.6).
 * 
 * @constant
 * @type {number}
 */
export
const targetLeavesIA: LDIevent = LDIevent_targetLeavesIA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LDIevent: $.ASN1Decoder<LDIevent> = $._decodeEnumerated;
export const _encode_LDIevent: $.ASN1Encoder<LDIevent> = $._encodeEnumerated;


/* eslint-enable */
