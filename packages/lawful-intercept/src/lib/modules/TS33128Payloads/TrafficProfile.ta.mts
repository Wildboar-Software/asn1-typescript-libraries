/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficProfile
 * @description
 * 
 * Identifies the type of data transmission, if available: single packet
 * transmission (UL or DL), dual packet transmission (UL with subsequent DL or
 * DL with subsequent UL), multiple packets transmission. See TS 38.413 [23]
 * clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.25. The
 * SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/TrafficProfile'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of data transmission, if available: single packet
 * transmission (UL or DL), dual packet transmission (UL with subsequent DL or
 * DL with subsequent UL), multiple packets transmission. See TS 38.413 [23]
 * clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.25. The
 * SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/TrafficProfile'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of data transmission, if available: single packet
 * transmission (UL or DL), dual packet transmission (UL with subsequent DL or
 * DL with subsequent UL), multiple packets transmission. See TS 38.413 [23]
 * clause 9.3.1.144. Encoded according to TS 29.571 [17] clause 5.4.3.25. The
 * SBIReference for this parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/TrafficProfile'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const TrafficProfile_singleTransUL = TrafficProfile.singleTransUL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleTransUL
 * @constant
 * @type {number}
 */
export
const singleTransUL = TrafficProfile.singleTransUL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_singleTransDL
 * @constant
 * @type {number}
 */
export
const TrafficProfile_singleTransDL = TrafficProfile.singleTransDL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleTransDL
 * @constant
 * @type {number}
 */
export
const singleTransDL = TrafficProfile.singleTransDL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_dualTransULFirst
 * @constant
 * @type {number}
 */
export
const TrafficProfile_dualTransULFirst = TrafficProfile.dualTransULFirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualTransULFirst
 * @constant
 * @type {number}
 */
export
const dualTransULFirst = TrafficProfile.dualTransULFirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_dualTransDLFirst
 * @constant
 * @type {number}
 */
export
const TrafficProfile_dualTransDLFirst = TrafficProfile.dualTransDLFirst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dualTransDLFirst
 * @constant
 * @type {number}
 */
export
const dualTransDLFirst = TrafficProfile.dualTransDLFirst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TrafficProfile_multiTrans
 * @constant
 * @type {number}
 */
export
const TrafficProfile_multiTrans = TrafficProfile.multiTrans; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiTrans
 * @constant
 * @type {number}
 */
export
const multiTrans = TrafficProfile.multiTrans; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TrafficProfile: $.ASN1Decoder<TrafficProfile> = $._decodeEnumerated;
export const _encode_TrafficProfile: $.ASN1Encoder<TrafficProfile> = $._encodeEnumerated;


/* eslint-enable */
