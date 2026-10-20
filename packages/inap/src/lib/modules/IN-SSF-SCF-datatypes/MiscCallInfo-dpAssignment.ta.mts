/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::=
 * ENUMERATED {
 *   individualBased(0),
 *   groupBased(1),
 *   switchBased(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MiscCallInfo_dpAssignment {
    individualBased = 0,
    groupBased = 1,
    switchBased = 2,
}

/**
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::=
 * ENUMERATED {
 *   individualBased(0),
 *   groupBased(1),
 *   switchBased(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo-dpAssignment ::=
 * ENUMERATED {
 *   individualBased(0),
 *   groupBased(1),
 *   switchBased(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment_individualBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_individualBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualBased
 * @constant
 * @type {number}
 */
export
const individualBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_groupBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_groupBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.groupBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupBased
 * @constant
 * @type {number}
 */
export
const groupBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.groupBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_switchBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_switchBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.switchBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchBased
 * @constant
 * @type {number}
 */
export
const switchBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.switchBased; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MiscCallInfo_dpAssignment: $.ASN1Decoder<MiscCallInfo_dpAssignment> = $._decodeEnumerated;

export
const _encode_MiscCallInfo_dpAssignment: $.ASN1Encoder<MiscCallInfo_dpAssignment> = $._encodeEnumerated;

/* eslint-enable */
