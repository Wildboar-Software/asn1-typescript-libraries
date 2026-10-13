/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_BroadcastStatus {
    succesfull = 0,
    unsuccesfull = 1,
}

/**
 * @summary BroadcastStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BroadcastStatus  ::=  ENUMERATED
 * {
 *     succesfull(0),
 *     -- Example of usage: following a broadcasted command at least the target list of one node with a LI function has
 *     -- been modified or confirm to include the target id requested by the LEA.
 *     unsuccesfull(1),
 *     -- case of usage: such information could be provided to the LEMF following the impossibility to get a positive confirmation from at least one node with an LI function on the broadcasted command made by the operator's mediation or the management of mediation.
 * ...}
 * ```
 * 
 * @enum {number}
 */
export
type BroadcastStatus = _enum_for_BroadcastStatus | ENUMERATED;

/**
 * @summary BroadcastStatus_succesfull
 * @constant
 * @type {number}
 */
export
const BroadcastStatus_succesfull: BroadcastStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary succesfull
 * @constant
 * @type {number}
 */
export
const succesfull: BroadcastStatus = BroadcastStatus_succesfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BroadcastStatus_unsuccesfull
 * @constant
 * @type {number}
 */
export
const BroadcastStatus_unsuccesfull: BroadcastStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccesfull
 * @constant
 * @type {number}
 */
export
const unsuccesfull: BroadcastStatus = BroadcastStatus_unsuccesfull; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_BroadcastStatus: $.ASN1Decoder<BroadcastStatus> = $._decodeEnumerated;
export const _encode_BroadcastStatus: $.ASN1Encoder<BroadcastStatus> = $._encodeEnumerated;


/* eslint-enable */
