/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const MiscCallInfo_dpAssignment: typeof _enum_for_MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment_individualBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_individualBased: _enum_for_MiscCallInfo_dpAssignment.individualBased = MiscCallInfo_dpAssignment.individualBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualBased
 * @constant
 * @type {number}
 */
export
const individualBased: _enum_for_MiscCallInfo_dpAssignment.individualBased = MiscCallInfo_dpAssignment.individualBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_groupBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_groupBased: _enum_for_MiscCallInfo_dpAssignment.groupBased = MiscCallInfo_dpAssignment.groupBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupBased
 * @constant
 * @type {number}
 */
export
const groupBased: _enum_for_MiscCallInfo_dpAssignment.groupBased = MiscCallInfo_dpAssignment.groupBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MiscCallInfo_dpAssignment_switchBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_switchBased: _enum_for_MiscCallInfo_dpAssignment.switchBased = MiscCallInfo_dpAssignment.switchBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchBased
 * @constant
 * @type {number}
 */
export
const switchBased: _enum_for_MiscCallInfo_dpAssignment.switchBased = MiscCallInfo_dpAssignment.switchBased; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_MiscCallInfo_dpAssignment(el: _Element): MiscCallInfo_dpAssignment {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case MiscCallInfo_dpAssignment.individualBased: return MiscCallInfo_dpAssignment.individualBased;
        case MiscCallInfo_dpAssignment.groupBased: return MiscCallInfo_dpAssignment.groupBased;
        case MiscCallInfo_dpAssignment.switchBased: return MiscCallInfo_dpAssignment.switchBased;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for MiscCallInfo_dpAssignment.",
                el,
            );
    }
}

export
const _encode_MiscCallInfo_dpAssignment: $.ASN1Encoder<MiscCallInfo_dpAssignment> = $._encodeEnumerated as $.ASN1Encoder<MiscCallInfo_dpAssignment>;

/* eslint-enable */
