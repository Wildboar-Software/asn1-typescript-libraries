/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_InitiationCause {
    requests = 1,
    received = 2,
    pTCOriginatingId = 3,
}

/**
 * @summary InitiationCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiationCause             ::=  ENUMERATED
 * {
 *     requests                (1),
 *     received                (2),
 *     pTCOriginatingId        (3),
 *     -- requests or receives a session initiation from the network or another
 *     -- party to initiate a PTC session. Identify the originating PTC party, if known.
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InitiationCause = _enum_for_InitiationCause | ENUMERATED;

/**
 * @summary InitiationCause_requests
 * @constant
 * @type {number}
 */
export
const InitiationCause_requests: InitiationCause = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requests
 * @constant
 * @type {number}
 */
export
const requests: InitiationCause = InitiationCause_requests; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_received
 * @constant
 * @type {number}
 */
export
const InitiationCause_received: InitiationCause = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @constant
 * @type {number}
 */
export
const received: InitiationCause = InitiationCause_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_pTCOriginatingId
 * @constant
 * @type {number}
 */
export
const InitiationCause_pTCOriginatingId: InitiationCause = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCOriginatingId
 * @constant
 * @type {number}
 */
export
const pTCOriginatingId: InitiationCause = InitiationCause_pTCOriginatingId; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_InitiationCause: $.ASN1Decoder<InitiationCause> = $._decodeEnumerated;

export const _encode_InitiationCause: $.ASN1Encoder<InitiationCause> = $._encodeEnumerated;

/* eslint-enable */
