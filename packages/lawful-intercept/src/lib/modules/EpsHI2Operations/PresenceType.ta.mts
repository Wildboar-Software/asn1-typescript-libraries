/* eslint-disable */
import {
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCClient: PresenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCClient
 * @constant
 * @type {number}
 */
export
const pTCClient: PresenceType = PresenceType_pTCClient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PresenceType_pTCGroup
 * @constant
 * @type {number}
 */
export
const PresenceType_pTCGroup: PresenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroup
 * @constant
 * @type {number}
 */
export
const pTCGroup: PresenceType = PresenceType_pTCGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PresenceType: $.ASN1Decoder<PresenceType> = $._decodeEnumerated;

export const _encode_PresenceType: $.ASN1Encoder<PresenceType> = $._encodeEnumerated;

/* eslint-enable */
