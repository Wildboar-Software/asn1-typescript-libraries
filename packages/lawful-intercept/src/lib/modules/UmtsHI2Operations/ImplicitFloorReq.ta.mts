/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ImplicitFloorReq {
    join = 1,
    rejoin = 2,
    release = 3,
}

/**
 * @summary ImplicitFloorReq
 * @description
 * 
 * Group-call request to join, to rejoin, or to release the group call.
 * 
 * Clause 17.3.2 sends a Begin record when the PTC server receives such a
 * request or sends one to the target. Table 17.1.5 instead says this parameter
 * indicates the client that requested the floor. These three values do not
 * carry a client identity.
 * 
 * 3GPP TS 33.108, clause 17.3.2 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImplicitFloorReq         ::=  ENUMERATED
 * {
 *     join            (1),
 *     rejoin            (2),
 *     release            (3),
 *     -- group Call request to join, rejoin, or release of the group call
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ImplicitFloorReq = _enum_for_ImplicitFloorReq | ENUMERATED;

/**
 * @summary ImplicitFloorReq_join
 * @description
 * 
 * Group-call request to join. Clause 17.3.2 sends a Begin record when the PTC
 * server receives this request or sends it to the target.
 * 
 * 3GPP TS 33.108, clause 17.3.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_join: ImplicitFloorReq = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @description
 * 
 * Group-call request to join (clause 17.3.2).
 * @constant
 * @type {number}
 */
export
const join: ImplicitFloorReq = ImplicitFloorReq_join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_rejoin
 * @description
 * 
 * Group-call request to rejoin.
 * 
 * 3GPP TS 33.108, clause 17.3.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_rejoin: ImplicitFloorReq = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejoin
 * @description
 * 
 * Group-call request to rejoin (clause 17.3.2).
 * @constant
 * @type {number}
 */
export
const rejoin: ImplicitFloorReq = ImplicitFloorReq_rejoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_release
 * @description
 * 
 * Group-call request to release the group call.
 * 
 * 3GPP TS 33.108, clause 17.3.2 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_release: ImplicitFloorReq = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @description
 * 
 * Group-call request to release (clause 17.3.2).
 * @constant
 * @type {number}
 */
export
const release: ImplicitFloorReq = ImplicitFloorReq_release; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImplicitFloorReq: $.ASN1Decoder<ImplicitFloorReq> = $._decodeEnumerated;
export const _encode_ImplicitFloorReq: $.ASN1Encoder<ImplicitFloorReq> = $._encodeEnumerated;


/* eslint-enable */
