/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_join: ImplicitFloorReq = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @constant
 * @type {number}
 */
export
const join: ImplicitFloorReq = ImplicitFloorReq_join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_rejoin
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_rejoin: ImplicitFloorReq = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejoin
 * @constant
 * @type {number}
 */
export
const rejoin: ImplicitFloorReq = ImplicitFloorReq_rejoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_release
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_release: ImplicitFloorReq = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @constant
 * @type {number}
 */
export
const release: ImplicitFloorReq = ImplicitFloorReq_release; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImplicitFloorReq: $.ASN1Decoder<ImplicitFloorReq> = $._decodeEnumerated;
export const _encode_ImplicitFloorReq: $.ASN1Encoder<ImplicitFloorReq> = $._encodeEnumerated;


/* eslint-enable */
