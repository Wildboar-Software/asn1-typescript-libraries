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
 * Group-call request to join, rejoin, or release the group call (module
 * comment). Clause 17.3.2 sends a begin record when the PTC server receives or
 * sends a request to join, rejoin, or release. Table 17.1.5's single line,
 * "indicates the client who has request the floor", does not match these three
 * values. 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * Request to join the group call (module comment, clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_join = _enum_for_ImplicitFloorReq.join; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @description
 * 
 * Join the group call (clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const join = ImplicitFloorReq_join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_rejoin
 * @description
 * 
 * Request to rejoin the group call (module comment, clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_rejoin = _enum_for_ImplicitFloorReq.rejoin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejoin
 * @description
 * 
 * Rejoin the group call (clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const rejoin = ImplicitFloorReq_rejoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_release
 * @description
 * 
 * Request to release the group call (module comment, clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_release = _enum_for_ImplicitFloorReq.release; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @description
 * 
 * Release the group call (clause 17.3.2).
 * 
 * @constant
 * @type {number}
 */
export
const release = ImplicitFloorReq_release; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImplicitFloorReq: $.ASN1Decoder<ImplicitFloorReq> = $._decodeEnumerated;
export const _encode_ImplicitFloorReq: $.ASN1Encoder<ImplicitFloorReq> = $._encodeEnumerated;


/* eslint-enable */
