/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficProfile  ::=  ENUMERATED
 * {
 *     singleTransUL(1),
 *     singleTransDL(2),
 *     dualTransULFirst(3),
 *     dualTransDLFirst(4),
 *     multiTrans(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TrafficProfile {
    singleTransUL = 1,
    singleTransDL = 2,
    dualTransULFirst = 3,
    dualTransDLFirst = 4,
    multiTrans = 5,
}

/**
 * @summary TrafficProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficProfile  ::=  ENUMERATED
 * {
 *     singleTransUL(1),
 *     singleTransDL(2),
 *     dualTransULFirst(3),
 *     dualTransDLFirst(4),
 *     multiTrans(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TrafficProfile = _enum_for_TrafficProfile;

/**
 * @summary TrafficProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficProfile  ::=  ENUMERATED
 * {
 *     singleTransUL(1),
 *     singleTransDL(2),
 *     dualTransULFirst(3),
 *     dualTransDLFirst(4),
 *     multiTrans(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TrafficProfile = _enum_for_TrafficProfile;

/**
 * @summary TrafficProfile_singleTransUL
 * @constant
 * @type {number}
 */
export
const TrafficProfile_singleTransUL: TrafficProfile = TrafficProfile.singleTransUL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleTransUL
 * @constant
 * @type {number}
 */
export
const singleTransUL: TrafficProfile = TrafficProfile.singleTransUL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_singleTransDL
 * @constant
 * @type {number}
 */
export
const TrafficProfile_singleTransDL: TrafficProfile = TrafficProfile.singleTransDL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleTransDL
 * @constant
 * @type {number}
 */
export
const singleTransDL: TrafficProfile = TrafficProfile.singleTransDL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_dualTransULFirst
 * @constant
 * @type {number}
 */
export
const TrafficProfile_dualTransULFirst: TrafficProfile = TrafficProfile.dualTransULFirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualTransULFirst
 * @constant
 * @type {number}
 */
export
const dualTransULFirst: TrafficProfile = TrafficProfile.dualTransULFirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_dualTransDLFirst
 * @constant
 * @type {number}
 */
export
const TrafficProfile_dualTransDLFirst: TrafficProfile = TrafficProfile.dualTransDLFirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualTransDLFirst
 * @constant
 * @type {number}
 */
export
const dualTransDLFirst: TrafficProfile = TrafficProfile.dualTransDLFirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_multiTrans
 * @constant
 * @type {number}
 */
export
const TrafficProfile_multiTrans: TrafficProfile = TrafficProfile.multiTrans; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiTrans
 * @constant
 * @type {number}
 */
export
const multiTrans: TrafficProfile = TrafficProfile.multiTrans; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TrafficProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TrafficProfile = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TrafficProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrafficProfile, encoded as an ASN.1 Element.
 */
export const _encode_TrafficProfile = $._encodeEnumerated;


/* eslint-enable */
