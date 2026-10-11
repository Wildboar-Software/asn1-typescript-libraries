/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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

export const _decode_TrafficProfile: $.ASN1Decoder<TrafficProfile> = $._decodeEnumerated;

export const _encode_TrafficProfile: $.ASN1Encoder<TrafficProfile> = $._encodeEnumerated;


/* eslint-enable */
