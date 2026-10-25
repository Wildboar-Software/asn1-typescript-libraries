/* eslint-disable */
import {
    type ENUMERATED
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
 * Whether a broadcast interception command was confirmed. Informative annex M
 * lists the broadcast-status system as for further study. The schema comments
 * below are illustrations, not a normative procedure. 3GPP TS 33.108, annex M
 * (informative).
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
 * @description
 * 
 * Schema illustration: after a broadcast command, at least one node with an LI
 * function has modified or confirmed its target list to include the identity
 * the LEA requested. Annex M (informative) does not specify this as a
 * requirement. 3GPP TS 33.108, annex M.
 * 
 * @constant
 * @type {number}
 */
export
const BroadcastStatus_succesfull = _enum_for_BroadcastStatus.succesfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary succesfull
 * @description
 * 
 * Broadcast confirmed by at least one LI node. Illustrative. 3GPP TS 33.108,
 * annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const succesfull = BroadcastStatus_succesfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BroadcastStatus_unsuccesfull
 * @description
 * 
 * Schema illustration: no positive confirmation from at least one LI node for a
 * command broadcast by the operator's mediation. Annex M (informative) does not
 * specify this as a requirement. 3GPP TS 33.108, annex M.
 * 
 * @constant
 * @type {number}
 */
export
const BroadcastStatus_unsuccesfull = _enum_for_BroadcastStatus.unsuccesfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccesfull
 * @description
 * 
 * Broadcast not confirmed by at least one LI node. Illustrative. 3GPP TS
 * 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const unsuccesfull = BroadcastStatus_unsuccesfull; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_BroadcastStatus: $.ASN1Decoder<BroadcastStatus> = $._decodeEnumerated;
export const _encode_BroadcastStatus: $.ASN1Encoder<BroadcastStatus> = $._encodeEnumerated;


/* eslint-enable */
