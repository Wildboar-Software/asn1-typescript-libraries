/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const TargetRole_announcingUE: TargetRole = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary announcingUE
 * @constant
 * @type {number}
 */
export
const announcingUE: TargetRole = TargetRole_announcingUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetRole_monitoringUE
 * @constant
 * @type {number}
 */
export
const TargetRole_monitoringUE: TargetRole = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringUE
 * @constant
 * @type {number}
 */
export
const monitoringUE: TargetRole = TargetRole_monitoringUE; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TargetRole: $.ASN1Decoder<TargetRole> = $._decodeEnumerated;

export const _encode_TargetRole: $.ASN1Encoder<TargetRole> = $._encodeEnumerated;


/* eslint-enable */
