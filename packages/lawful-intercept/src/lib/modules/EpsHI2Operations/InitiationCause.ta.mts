/* eslint-disable */
import {
    type ENUMERATED
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
 * Who originated a PTC session initiation. Mandatory on the session-initiation
 * begin record (table 17.2.4). If an associate originated it, include that
 * associate's identity when known. The module comment covers all three values
 * in one sentence and does not define them separately: the target requests or
 * receives a session initiation from the network or another party, and the
 * originating PTC party is identified if known. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * The shared module comment says a session initiation is requested. The
 * specification does not further separate this value from the other two.
 * 
 * @constant
 * @type {number}
 */
export
const InitiationCause_requests: _enum_for_InitiationCause.requests = _enum_for_InitiationCause.requests; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requests
 * @description
 * 
 * Session initiation was requested (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const requests: _enum_for_InitiationCause.requests = InitiationCause_requests; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_received
 * @description
 * 
 * The shared module comment says a session initiation is received. The
 * specification does not further separate this value from the other two.
 * 
 * @constant
 * @type {number}
 */
export
const InitiationCause_received: _enum_for_InitiationCause.received = _enum_for_InitiationCause.received; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @description
 * 
 * Session initiation was received (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const received: _enum_for_InitiationCause.received = InitiationCause_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_pTCOriginatingId
 * @description
 * 
 * The shared module comment says to identify the originating PTC party if
 * known. Table 17.2.4 requires the associate's identity when an associate
 * originated the session and the identity is known.
 * 
 * @constant
 * @type {number}
 */
export
const InitiationCause_pTCOriginatingId: _enum_for_InitiationCause.pTCOriginatingId = _enum_for_InitiationCause.pTCOriginatingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCOriginatingId
 * @description
 * 
 * Originating PTC party, when known (table 17.2.4).
 * 
 * @constant
 * @type {number}
 */
export
const pTCOriginatingId: _enum_for_InitiationCause.pTCOriginatingId = InitiationCause_pTCOriginatingId; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InitiationCause: $.ASN1Decoder<InitiationCause> = $._decodeEnumerated;
export const _encode_InitiationCause: $.ASN1Encoder<InitiationCause> = $._encodeEnumerated;


/* eslint-enable */
