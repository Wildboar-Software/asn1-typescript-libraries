/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParticipatingType
 * @description
 *
 * How the user takes part in the PoC session: normal, network
 * PoC Box, or UE PoC Box. Traffic-based charging distinguishes
 * the three.
 *
 * Online, inviting a PoC Box during the session is a change of
 * participating type. The OCS may arm
 * `CHANGE_IN_USER_PARTICIPATING_TYPE`; the PoC Server then sends
 * Reserve Units Request [update] with the new rating group.
 *
 * TS 32.272 does not define how a network PoC Box differs from a
 * UE PoC Box. It refers to OMA-AD-POC.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1, 5.3.2.6, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipatingType {
    normal = 0,
    nW_PoC_Box = 1,
    uE_PoC_Box = 2,
}

/**
 * @summary ParticipatingType
 * @description
 *
 * How the user takes part in the PoC session: normal, network
 * PoC Box, or UE PoC Box. Traffic-based charging distinguishes
 * the three.
 *
 * Online, inviting a PoC Box during the session is a change of
 * participating type. The OCS may arm
 * `CHANGE_IN_USER_PARTICIPATING_TYPE`; the PoC Server then sends
 * Reserve Units Request [update] with the new rating group.
 *
 * TS 32.272 does not define how a network PoC Box differs from a
 * UE PoC Box. It refers to OMA-AD-POC.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1, 5.3.2.6, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipatingType = _enum_for_ParticipatingType;

/**
 * @summary ParticipatingType
 * @description
 *
 * How the user takes part in the PoC session: normal, network
 * PoC Box, or UE PoC Box. Traffic-based charging distinguishes
 * the three.
 *
 * Online, inviting a PoC Box during the session is a change of
 * participating type. The OCS may arm
 * `CHANGE_IN_USER_PARTICIPATING_TYPE`; the PoC Server then sends
 * Reserve Units Request [update] with the new rating group.
 *
 * TS 32.272 does not define how a network PoC Box differs from a
 * UE PoC Box. It refers to OMA-AD-POC.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1, 5.3.2.6, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipatingType  ::=  ENUMERATED {
 *    normal        ( 0 ),
 *    nW-PoC-Box    ( 1 ),
 *    uE-PoC-Box    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipatingType = _enum_for_ParticipatingType;

/**
 * @summary ParticipatingType_normal
 * @constant
 * @type {number}
 */
export
const ParticipatingType_normal = ParticipatingType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal = ParticipatingType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipatingType_nW_PoC_Box
 * @constant
 * @type {number}
 */
export
const ParticipatingType_nW_PoC_Box = ParticipatingType.nW_PoC_Box; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nW_PoC_Box
 * @constant
 * @type {number}
 */
export
const nW_PoC_Box = ParticipatingType.nW_PoC_Box; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipatingType_uE_PoC_Box
 * @constant
 * @type {number}
 */
export
const ParticipatingType_uE_PoC_Box = ParticipatingType.uE_PoC_Box; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE_PoC_Box
 * @constant
 * @type {number}
 */
export
const uE_PoC_Box = ParticipatingType.uE_PoC_Box; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ParticipatingType: $.ASN1Decoder<ParticipatingType> = $._decodeEnumerated;

export
const _encode_ParticipatingType: $.ASN1Encoder<ParticipatingType> = $._encodeEnumerated;

/* eslint-enable */
