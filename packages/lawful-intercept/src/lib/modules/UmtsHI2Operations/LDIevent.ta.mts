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
 * Location-dependent interception: the target entered or left the interception
 * area.
 * 
 * Optional on a location-update report, and only when that reporting is
 * authorized (table 6.6). If the target enters an interception area and has a
 * PDP context active, a Begin record is triggered as well (clause 6.5.1.2).
 * 
 * 3GPP TS 33.108, table 6.6 and clause 6.5.1.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * The target entered the interception area. Optional on a location-update
 * report when location-dependent interception is authorized. Entry with a PDP
 * context active also opens an IRI-Begin.
 * 
 * 3GPP TS 33.108, table 6.6 and clause 6.5.1.2.
 * @constant
 * @type {number}
 */
export
const LDIevent_targetEntersIA = _enum_for_LDIevent.targetEntersIA satisfies LDIevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetEntersIA
 * @description
 * 
 * The target entered the interception area (table 6.6).
 * @constant
 * @type {number}
 */
export
const targetEntersIA = LDIevent_targetEntersIA satisfies LDIevent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDIevent_targetLeavesIA
 * @description
 * 
 * The target left the interception area. Optional on a location-update report
 * when location-dependent interception is authorized.
 * 
 * 3GPP TS 33.108, table 6.6.
 * @constant
 * @type {number}
 */
export
const LDIevent_targetLeavesIA = _enum_for_LDIevent.targetLeavesIA satisfies LDIevent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetLeavesIA
 * @description
 * 
 * The target left the interception area (table 6.6).
 * @constant
 * @type {number}
 */
export
const targetLeavesIA = LDIevent_targetLeavesIA satisfies LDIevent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_LDIevent: $.ASN1Decoder<LDIevent> = $._decodeEnumerated;
export const _encode_LDIevent: $.ASN1Encoder<LDIevent> = $._encodeEnumerated;


/* eslint-enable */
