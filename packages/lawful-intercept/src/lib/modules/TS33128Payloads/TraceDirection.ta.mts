/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceDirection
 * @description
 * 
 * The TraceDirection provides information on the direction of the trace
 * information being reported.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TraceDirection {
    /**
     * @description
     *
     * Shall be chosen when the message being reported is to the AMF.
     *
     * 3GPP TS 33.128, clause 8.5.10.
     */
    toAMF = 1,
    /**
     * @description
     *
     * Shall be chosen when the message being reported is from the AMF.
     *
     * 3GPP TS 33.128, clause 8.5.10.
     */
    fromAMF = 2,
    /**
     * @description
     *
     * Shall be chosen when the message being reported is to the MME.
     *
     * 3GPP TS 33.128, clause 8.5.10.
     */
    toMME = 3,
    /**
     * @description
     *
     * Shall be chosen when the message being reported is from the MME.
     *
     * 3GPP TS 33.128, clause 8.5.10.
     */
    fromMME = 4,
}

/**
 * @summary TraceDirection
 * @description
 * 
 * The TraceDirection provides information on the direction of the trace
 * information being reported.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TraceDirection = _enum_for_TraceDirection;

/**
 * @summary TraceDirection
 * @description
 * 
 * The TraceDirection provides information on the direction of the trace
 * information being reported.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDirection  ::=  ENUMERATED
 * {
 *     toAMF(1),
 *     fromAMF(2),
 *     toMME(3),
 *     fromMME(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TraceDirection = _enum_for_TraceDirection;

/**
 * @summary TraceDirection_toAMF
 * @description
 *
 * Shall be chosen when the message being reported is to the AMF.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const TraceDirection_toAMF = TraceDirection.toAMF satisfies TraceDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toAMF
 * @description
 *
 * Shall be chosen when the message being reported is to the AMF.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const toAMF = TraceDirection.toAMF satisfies TraceDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_fromAMF
 * @description
 *
 * Shall be chosen when the message being reported is from the AMF.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const TraceDirection_fromAMF = TraceDirection.fromAMF satisfies TraceDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromAMF
 * @description
 *
 * Shall be chosen when the message being reported is from the AMF.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const fromAMF = TraceDirection.fromAMF satisfies TraceDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_toMME
 * @description
 *
 * Shall be chosen when the message being reported is to the MME.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const TraceDirection_toMME = TraceDirection.toMME satisfies TraceDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toMME
 * @description
 *
 * Shall be chosen when the message being reported is to the MME.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const toMME = TraceDirection.toMME satisfies TraceDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDirection_fromMME
 * @description
 *
 * Shall be chosen when the message being reported is from the MME.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const TraceDirection_fromMME = TraceDirection.fromMME satisfies TraceDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromMME
 * @description
 *
 * Shall be chosen when the message being reported is from the MME.
 *
 * 3GPP TS 33.128, clause 8.5.10.
 *
 * @constant
 * @type {number}
 */
export
const fromMME = TraceDirection.fromMME satisfies TraceDirection; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TraceDirection: $.ASN1Decoder<TraceDirection> = $._decodeEnumerated;
export const _encode_TraceDirection: $.ASN1Encoder<TraceDirection> = $._encodeEnumerated;


/* eslint-enable */
