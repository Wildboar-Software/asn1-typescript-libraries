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
 *   individualLine(0),
 *   groupBased(1),
 *   officeBased(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MiscCallInfo_dpAssignment {
    individualLine = 0,
    groupBased = 1,
    officeBased = 2,
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
 *   individualLine(0),
 *   groupBased(1),
 *   officeBased(2)
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
 *   individualLine(0),
 *   groupBased(1),
 *   officeBased(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MiscCallInfo_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;

/**
 * @summary MiscCallInfo_dpAssignment_individualLine
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_individualLine: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualLine; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individualLine
 * @constant
 * @type {number}
 */
export
const individualLine: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.individualLine; /* SHORT_NAMED_ENUMERATED_VALUE */

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
 * @summary MiscCallInfo_dpAssignment_officeBased
 * @constant
 * @type {number}
 */
export
const MiscCallInfo_dpAssignment_officeBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.officeBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary officeBased
 * @constant
 * @type {number}
 */
export
const officeBased: MiscCallInfo_dpAssignment = MiscCallInfo_dpAssignment.officeBased; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_MiscCallInfo_dpAssignment(el: _Element): MiscCallInfo_dpAssignment {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case MiscCallInfo_dpAssignment.individualLine: return MiscCallInfo_dpAssignment.individualLine;
        case MiscCallInfo_dpAssignment.groupBased: return MiscCallInfo_dpAssignment.groupBased;
        case MiscCallInfo_dpAssignment.officeBased: return MiscCallInfo_dpAssignment.officeBased;
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
