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
 * Who started the PTC session. Mandatory on session initiation (table 17.2.4).
 * 
 * Annex B.3: the target requests a session, or receives a session initiation
 * from the network or another party. If an associate was the originator, that
 * associate's identity is included when it is known. The third value names the
 * originating party; this enumeration does not itself carry the identity.
 * 
 * 3GPP TS 33.108, clause 17.2.4 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
 * The target requested the PTC session.
 * 
 * 3GPP TS 33.108, table 17.2.4 and annex B.3.
 * @constant
 * @type {number}
 */
export
const InitiationCause_requests = _enum_for_InitiationCause.requests; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requests
 * @description
 * 
 * The target requested the PTC session (table 17.2.4).
 * @constant
 * @type {number}
 */
export
const requests = InitiationCause_requests; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_received
 * @description
 * 
 * The target received a session initiation from the network or from another
 * party.
 * 
 * 3GPP TS 33.108, table 17.2.4 and annex B.3.
 * @constant
 * @type {number}
 */
export
const InitiationCause_received = _enum_for_InitiationCause.received; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @description
 * 
 * The target received the PTC session initiation (table 17.2.4).
 * @constant
 * @type {number}
 */
export
const received = InitiationCause_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_pTCOriginatingId
 * @description
 * 
 * The originating PTC party is identified. Table 17.2.4 requires the
 * associate's identity when an associate started the session, if that identity
 * is known. This value does not itself carry the identity.
 * 
 * 3GPP TS 33.108, table 17.2.4 and annex B.3.
 * @constant
 * @type {number}
 */
export
const InitiationCause_pTCOriginatingId = _enum_for_InitiationCause.pTCOriginatingId; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCOriginatingId
 * @description
 * 
 * The originating PTC party is identified; the identity is carried separately
 * (table 17.2.4).
 * @constant
 * @type {number}
 */
export
const pTCOriginatingId = InitiationCause_pTCOriginatingId; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InitiationCause: $.ASN1Decoder<InitiationCause> = $._decodeEnumerated;
export const _encode_InitiationCause: $.ASN1Encoder<InitiationCause> = $._encodeEnumerated;


/* eslint-enable */
