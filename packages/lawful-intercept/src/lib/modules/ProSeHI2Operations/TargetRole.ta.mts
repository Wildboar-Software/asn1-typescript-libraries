/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TargetRole {
    announcingUE = 1,
    monitoringUE = 2,
}

/**
 * @summary TargetRole
 * @description
 * 
 * Role of the target UE in direct discovery. Required on both report records.
 * 3GPP TS 33.108, clause 13.2, table 13.2.1-2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetRole  ::=  ENUMERATED
 * {
 *     announcingUE                (1),
 *     monitoringUE                (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetRole = _enum_for_TargetRole | ENUMERATED;

/**
 * @summary TargetRole_announcingUE
 * @description
 * 
 * The target is announcing. Metadata applies to a discovery request only in
 * this role. 3GPP TS 33.108, clause 13.2.2.2, table 13.2.2.2-1.
 * 
 * @constant
 * @type {number}
 */
export
const TargetRole_announcingUE: _enum_for_TargetRole.announcingUE = _enum_for_TargetRole.announcingUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary announcingUE
 * @description
 * 
 * Target is the announcing UE. 3GPP TS 33.108, clause 13.2.
 * 
 * @constant
 * @type {number}
 */
export
const announcingUE: _enum_for_TargetRole.announcingUE = TargetRole_announcingUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetRole_monitoringUE
 * @description
 * 
 * The target is monitoring. An application mask applies only in this role. More
 * than one PLMN, application name, timer, code, or mask may be reported. 3GPP
 * TS 33.108, clause 13.2.2.2, table 13.2.2.2-1.
 * 
 * @constant
 * @type {number}
 */
export
const TargetRole_monitoringUE: _enum_for_TargetRole.monitoringUE = _enum_for_TargetRole.monitoringUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringUE
 * @description
 * 
 * Target is the monitoring UE. 3GPP TS 33.108, clause 13.2.
 * 
 * @constant
 * @type {number}
 */
export
const monitoringUE: _enum_for_TargetRole.monitoringUE = TargetRole_monitoringUE; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TargetRole: $.ASN1Decoder<TargetRole> = $._decodeEnumerated;
export const _encode_TargetRole: $.ASN1Encoder<TargetRole> = $._encodeEnumerated;


/* eslint-enable */
