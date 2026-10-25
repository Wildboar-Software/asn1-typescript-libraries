/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PresenceType {
    pTCClient = 1,
    pTCGroup = 2,
}

/**
 * @summary PresenceType
 * @description
 * 
 * Whether a PTC presence identity is a PTC client or a PTC group (clause
 * 17.1.5). Reported with associate presence when the PTC server supports
 * presence and acts as watcher for the target.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceType     ::=  ENUMERATED
 * {
 *     pTCClient        (1),
 *     pTCGroup        (2),
 *     -- identifies the type of presenceID given [PTC Client(s) or PTC group].
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PresenceType = _enum_for_PresenceType | ENUMERATED;

/**
 * @summary PresenceType_pTCClient
 * @description
 * 
 * The presence identity is a PTC client (clause 17.1.5). Reported with
 * associate presence when the server is the watcher.
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCClient: PresenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @description
 * 
 * Presence identity is a PTC client (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const pTCClient: PresenceType = PresenceType_pTCClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceType_pTCGroup
 * @description
 * 
 * The presence identity is a PTC group (clause 17.1.5 and the module comment).
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCGroup: PresenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @description
 * 
 * Presence identity is a PTC group (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const pTCGroup: PresenceType = PresenceType_pTCGroup; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PresenceType: $.ASN1Decoder<PresenceType> = $._decodeEnumerated;
export const _encode_PresenceType: $.ASN1Encoder<PresenceType> = $._encodeEnumerated;


/* eslint-enable */
